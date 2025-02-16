#!/bin/bash

# Make this script executable
chmod +x docker-setup.sh

# Create project directories
mkdir -p docker/php
mkdir -p docker/nginx

# Create CakePHP project
composer create-project --prefer-dist cakephp/app:~4.0 .

# Install additional dependencies
composer require symfony/webpack-encore-bundle

# Create webpack configuration and assets directories
mkdir -p assets/js/components
mkdir -p assets/js/pages
mkdir -p assets/css

# Add .dockerignore file
cat > .dockerignore << 'EOL'
.git
.gitignore
.env
node_modules
vendor
EOL

echo "Docker setup completed successfully!"