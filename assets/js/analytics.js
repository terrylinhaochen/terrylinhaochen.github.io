// Track scroll depth
let scrollDepthTracked = {
  '25': false, '50': false, '75': false, '100': false
};

window.addEventListener('scroll', function() {
  const scrollPercent = Math.round((window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100);
  
  if (scrollPercent >= 25 && !scrollDepthTracked['25']) {
    gtag('event', 'scroll_depth', {'depth': '25%'});
    scrollDepthTracked['25'] = true;
  }
  // Track other percentage points similarly
}); 