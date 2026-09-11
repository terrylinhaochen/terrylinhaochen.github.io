// Generated from AWB BookDigestPersonalizer.astro; run scripts/sync-book-personalizer.mjs.
const root = document.querySelector("[data-book-personalizer]");
if (root) {
  const storageKey = "awb:preferred-ai";
  const options = Array.from(root.querySelectorAll("[data-ai-provider]"));
  const action = root.querySelector("[data-personalize-button]");
  const prompt = root.querySelector("[data-personalize-prompt]");
  const status = root.querySelector("[data-personalize-status]");
  const providerName = (provider) => provider === "chatgpt" ? "ChatGPT" : provider.charAt(0).toUpperCase() + provider.slice(1);
  const supportsPromptLink = (provider) => ["chatgpt", "claude", "grok"].includes(provider);
  const destinationFor = (provider, baseUrl, promptText) => {
    const destination = new URL(baseUrl);
    if (supportsPromptLink(provider)) destination.searchParams.set("q", promptText);
    return destination.toString();
  };
  const paint = (provider) => {
    const selected = options.find((option) => option.dataset.aiProvider === provider) ?? options[0];
    options.forEach((option) => {
      const active = option === selected;
      option.setAttribute("aria-pressed", String(active));
      option.classList.toggle("border-white", active);
      option.classList.toggle("ring-2", active);
      option.classList.toggle("ring-white/35", active);
      option.classList.toggle("ring-offset-2", active);
      option.classList.toggle("ring-offset-ink", active);
      option.classList.toggle("opacity-65", !active);
    });
    if (action && selected) {
      action.dataset.selectedProvider = selected.dataset.aiProvider;
      action.dataset.selectedUrl = selected.dataset.aiUrl;
      action.href = destinationFor(
        selected.dataset.aiProvider ?? "chatgpt",
        selected.dataset.aiUrl ?? "https://chatgpt.com/",
        prompt?.textContent ?? ""
      );
      action.textContent = `Personalize in ${providerName(selected.dataset.aiProvider ?? "chatgpt")}`;
    }
  };
  let savedProvider = "chatgpt";
  try {
    savedProvider = localStorage.getItem(storageKey) ?? savedProvider;
  } catch {
  }
  paint(savedProvider);
  options.forEach((option) => option.addEventListener("click", () => {
    const provider = option.dataset.aiProvider ?? "chatgpt";
    try {
      localStorage.setItem(storageKey, provider);
    } catch {
    }
    paint(provider);
    if (status) status.textContent = `${providerName(provider)} will open when you personalize.`;
  }));
  action?.addEventListener("click", async () => {
    if (!prompt) return;
    const provider = action.dataset.selectedProvider ?? "chatgpt";
    try {
      await navigator.clipboard.writeText(prompt.textContent ?? "");
      action.textContent = "Prompt copied";
      if (status) status.textContent = supportsPromptLink(provider) ? `Opening a new ${providerName(provider)} chat with this book and the Answer with Books skill. The prompt is also copied.` : `Prompt copied. Paste it into ${providerName(provider)} to start the personalized reading.`;
    } catch {
      if (status) status.textContent = supportsPromptLink(provider) ? `Opening ${providerName(provider)} with the personalized reading prompt.` : "Copy was blocked. Allow clipboard access and try again.";
    }
    window.setTimeout(() => paint(provider), 2600);
  });
}
