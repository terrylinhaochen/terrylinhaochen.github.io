Command for running code locally: 
bundle exec jekyll serve

## Local Development

### Prerequisites
1. **Install Homebrew** (macOS Package Manager)
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   After installation, add Homebrew to your PATH:
   ```bash
   echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
   source ~/.zshrc
   ```

2. **Install Ruby Version Manager (rbenv)**
   ```bash
   brew install rbenv
   echo 'eval "$(rbenv init -)"' >> ~/.zshrc
   source ~/.zshrc
   ```

3. **Install Ruby**
   ```bash
   rbenv install 3.2.2
   rbenv global 3.2.2
   ```
   Verify installation:
   ```bash
   ruby -v
   ```

4. **Install Jekyll and Bundler**
   ```bash
   gem install jekyll bundler
   ```

### Running the Site Locally

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd [repository-name]
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Start the local server**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**
   Open your browser and navigate to:
   ```
   http://localhost:4000
   ```

### Development Notes
- The site will automatically refresh when you make changes to files
- If you modify `_config.yml`, you'll need to restart the server
- To stop the server, press `Ctrl+C` in the terminal
