#!/bin/bash

# Optimize JPG and PNG images
find static/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -exec echo "Optimizing {}" \; -exec jpegoptim --max=85 {} \; -exec pngquant --force --ext .png {} \;

# Create WebP versions
find static/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -exec echo "Creating WebP for {}" \; -exec cwebp -q 80 {} -o {}.webp \; 