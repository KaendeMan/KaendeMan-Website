const execSync = require('child_process').execSync;

try {
  // Build the Jekyll site
  console.log('Building the Jekyll site...');
  execSync('jekyll build', { stdio: 'inherit' });

  // Push the built files to the gh-pages branch
  console.log('Deploying to GitHub Pages...');
  execSync('git checkout gh-pages', { stdio: 'inherit' });
  execSync('git pull origin gh-pages', { stdio: 'inherit' });
  execSync('rm -rf *', { stdio: 'inherit' });
  execSync('cp -r _site/* .', { stdio: 'inherit' });
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Deploy Jekyll site"', { stdio: 'inherit' });
  execSync('git push origin gh-pages', { stdio: 'inherit' });

  console.log('Deployment successful!');
} catch (error) {
  console.error('Deployment failed:', error.message);
}