import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tailwind-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-6">Tailwind CSS Components</h2>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded shadow">
          <h3 class="font-bold text-blue-900 mb-2">Responsive Grid</h3>
          <p class="text-blue-700 text-sm">This grid is 1 col on mobile, 2 on tablet, 3 on desktop</p>
        </div>
        <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded shadow">
          <h3 class="font-bold text-purple-900 mb-2">Utility First</h3>
          <p class="text-purple-700 text-sm">Use Tailwind utilities to build any design without leaving HTML</p>
        </div>
        <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded shadow">
          <h3 class="font-bold text-green-900 mb-2">Zero CSS</h3>
          <p class="text-green-700 text-sm">No custom CSS written for these cards - pure Tailwind utilities</p>
        </div>
      </div>

      <!-- Buttons Showcase -->
      <div class="bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-semibold mb-4">Button Variants</h3>
        <div class="flex flex-wrap gap-3">
          <button class="px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition">Solid</button>
          <button class="px-4 py-2 bg-transparent border-2 border-slate-900 text-slate-900 rounded hover:bg-slate-100 transition">Outlined</button>
          <button class="px-4 py-2 text-slate-900 font-semibold hover:bg-slate-200 px-4 py-2 rounded transition">Text Button</button>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg">Primary Pill</button>
          <button class="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition">Success</button>
        </div>
      </div>

      <!-- Flex & Spacing Examples -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Flexbox & Alignment</h3>

        <!-- Centered Content -->
        <div class="flex items-center justify-between bg-orange-100 p-4 rounded">
          <span class="font-semibold">Left</span>
          <span class="font-semibold">Center</span>
          <span class="font-semibold">Right</span>
        </div>

        <!-- Stack Layout -->
        <div class="flex flex-col gap-3">
          <div class="bg-indigo-100 p-3 rounded font-medium">Stack Item 1</div>
          <div class="bg-indigo-100 p-3 rounded font-medium">Stack Item 2</div>
          <div class="bg-indigo-100 p-3 rounded font-medium">Stack Item 3</div>
        </div>
      </div>

      <!-- Typography -->
      <div class="mt-6 space-y-3 bg-gray-50 p-4 rounded">
        <h3 class="text-lg font-semibold mb-4">Typography</h3>
        <h4 class="text-xl font-bold">Heading Bold</h4>
        <p class="text-base text-gray-700">Regular paragraph text with gray-700 color</p>
        <p class="text-sm font-light text-gray-500">Small light text in gray-500</p>
        <p class="text-lg font-semibold text-indigo-600">Large semibold in indigo</p>
      </div>
    </div>
  `,
})
export class TailwindDemoComponent {}
