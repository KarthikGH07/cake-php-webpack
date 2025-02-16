<?php

declare(strict_types=1);

namespace App\View\Helper;

use Cake\View\Helper;

class AssetMixHelper extends Helper
{
    /**
     * Default configuration.
     *
     * @var array
     */
    protected $_defaultConfig = [];

    /**
     * Manifest cache
     */
    protected $manifest = null;

    /**
     * Get an asset path from the manifest
     *
     * @param string $path Asset path
     * @return string
     */
    public function asset(string $path): string
    {
        $manifest = $this->getManifest();
        // echo "<script>console.log($manifest);</script>";

        if (isset($manifest[$path])) {
            return $manifest[$path];
        }

        return '/build/' . $path;
    }

    /**
     * Get the manifest data
     *
     * @return array
     */
    protected function getManifest(): array
    {
        if ($this->manifest !== null) {
            return $this->manifest;
        }

        $manifestPath = WWW_ROOT . 'build/manifest.json';

        if (file_exists($manifestPath)) {
            $this->manifest = json_decode(file_get_contents($manifestPath), true);
            return $this->manifest;
        }

        return [];
    }
}
