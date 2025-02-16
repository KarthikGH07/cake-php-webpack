<?php

declare(strict_types=1);

namespace App\Controller;

use Cake\Utility\Hash;
use Cake\Core\Configure;

class ReactController extends AppController
{
    public function initialize(): void
    {
        parent::initialize();

        // Load the AssetMix helper to handle webpack assets
        $this->viewBuilder()->addHelper('AssetMix.AssetMix');
    }

    public function index()
    {
        $path = $this->request->getPath();
        $this->set('reactPath', $path);
        $this->viewBuilder()->setLayout('react');
    }
}
