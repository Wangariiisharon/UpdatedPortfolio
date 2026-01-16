"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function ColorPaletteGenerator() {
  const [baseColor, setBaseColor] = useState("#3B82F6");
  const [scheme, setScheme] = useState("analogous");
  const [copied, setCopied] = useState(-1);

  const hexToHSL = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
  };

  const hslToHex = (h: number, s: number, l: number) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const generatePalette = () => {
    const base = hexToHSL(baseColor);
    let colors = [];

    switch (scheme) {
      case "monochromatic":
        colors = [
          { ...base, l: 85, name: "Lightest" },
          { ...base, l: 65, name: "Light" },
          { ...base, name: "Base" },
          { ...base, l: 35, name: "Dark" },
          { ...base, l: 20, name: "Darkest" },
        ];
        break;

      case "analogous":
        colors = [
          {
            h: (base.h - 60 + 360) % 360,
            s: base.s,
            l: base.l,
            name: "Analogous -60°",
          },
          {
            h: (base.h - 30 + 360) % 360,
            s: base.s,
            l: base.l,
            name: "Analogous -30°",
          },
          { ...base, name: "Base" },
          {
            h: (base.h + 30) % 360,
            s: base.s,
            l: base.l,
            name: "Analogous +30°",
          },
          {
            h: (base.h + 60) % 360,
            s: base.s,
            l: base.l,
            name: "Analogous +60°",
          },
        ];
        break;

      case "complementary":
        const comp = (base.h + 180) % 360;
        colors = [
          { ...base, l: 75, name: "Base Light" },
          { ...base, name: "Base" },
          { ...base, l: 35, name: "Base Dark" },
          { h: comp, s: base.s, l: base.l, name: "Complement" },
          { h: comp, s: base.s, l: 35, name: "Complement Dark" },
        ];
        break;

      case "triadic":
        colors = [
          { ...base, name: "Base" },
          {
            h: (base.h + 120) % 360,
            s: base.s,
            l: base.l,
            name: "Triadic +120°",
          },
          {
            h: (base.h + 240) % 360,
            s: base.s,
            l: base.l,
            name: "Triadic +240°",
          },
          { ...base, l: 75, name: "Base Tint" },
          { ...base, l: 30, name: "Base Shade" },
        ];
        break;

      case "tetradic":
        colors = [
          { ...base, name: "Base" },
          {
            h: (base.h + 90) % 360,
            s: base.s,
            l: base.l,
            name: "Tetradic +90°",
          },
          {
            h: (base.h + 180) % 360,
            s: base.s,
            l: base.l,
            name: "Tetradic +180°",
          },
          {
            h: (base.h + 270) % 360,
            s: base.s,
            l: base.l,
            name: "Tetradic +270°",
          },
          { ...base, s: base.s * 0.3, l: 90, name: "Neutral" },
        ];
        break;

      case "split-complementary":
        const split1 = (base.h + 150) % 360;
        const split2 = (base.h + 210) % 360;
        colors = [
          { ...base, name: "Base" },
          { ...base, l: 75, name: "Base Light" },
          { h: split1, s: base.s, l: base.l, name: "Split +150°" },
          { h: split2, s: base.s, l: base.l, name: "Split +210°" },
          { ...base, s: 15, l: 25, name: "Neutral Dark" },
        ];
        break;

      default:
        colors = [base, base, base, base, base];
    }

    return colors.map((c) => ({
      hex: hslToHex(c.h, c.s, c.l),
      hsl: `hsl(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.l)}%)`,
    }));
  };

  const palette = generatePalette();

  const copyToClipboard = async (hex: string, index: number) => {
    await navigator.clipboard.writeText(hex);
    setCopied(index);
    setTimeout(() => setCopied(-1), 2000);
  };

  const schemes = [
    {
      value: "monochromatic",
      label: "Monochromatic",
      desc: "Single hue variations",
    },
    {
      value: "analogous",
      label: "Analogous",
      desc: "Adjacent wheel colors",
    },
    {
      value: "complementary",
      label: "Complementary",
      desc: "Opposite wheel colors",
    },
    { value: "triadic", label: "Triadic", desc: "Three spaced colors" },
    {
      value: "tetradic",
      label: "Tetradic",
      desc: "Four complementary pairs",
    },
    {
      value: "split-complementary",
      label: "Split Complementary",
      desc: "Base + adjacent complements",
    },
  ];

  return (
    <div className="min-h-screen w-full border border-gray-800">
      {/* Header */}
      <div className="space-y-2 bg-[#010409] border-b border-gray-800 w-full p-6">
        <h1 className="text-4xl font-bold text-white mb-6">
          Color Palette Generator
        </h1>
        <p className="text-gray-400 pb-6">
          Generate harmonious color schemes using color theory principles
        </p>
      </div>
      <div className="w-full space-y-8 p-6">
        {/* Controls */}
        <div className="grid gap-6 mb-6">
          <div className="space-y-5">
            <label className="block text-sm font-medium text-gray-300">
              Base Color
            </label>
            <div className="flex gap-4">
              <input
                type="color"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="w-16 h-16 rounded border-2 border-gray-700 cursor-pointer bg-[#010409]"
              />
              <input
                type="text"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="flex-1 bg-[#010409] text-white px-4 py-2 rounded border border-gray-800 font-mono focus:border-gray-600 focus:outline-none"
                placeholder="#3B82F6"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-300">
              Color Scheme
            </label>
            <select
              value={scheme}
              onChange={(e) => setScheme(e.target.value)}
              className="w-full bg-[#010409] text-white px-4 py-3 rounded border border-gray-800 focus:border-gray-600 focus:outline-none cursor-pointer"
            >
              {schemes.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-500">
              {schemes.find((s) => s.value === scheme)?.desc}
            </p>
          </div>
        </div>

        {/* Palette Display */}
        <div className="space-y-6 mb-6">
          {palette.map((color, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-[#010409] border border-gray-800 rounded hover:border-gray-700 transition-colors group"
            >
              <div
                className={`w-28 h-28 rounded border border-2 border-gray-700 flex-shrink-0`}
                style={{ backgroundColor: color.hex }}
              />

              <div className="flex-1 space-y-1">
                <p className="text-white font-mono text-sm">{color.hex}</p>
                <p className="text-gray-500 text-xs font-mono">{color.hsl}</p>
              </div>
              <button
                onClick={() => copyToClipboard(color.hex, index)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-750 border border-gray-700 rounded text-sm text-gray-300 flex items-center gap-2 transition-colors opacity-0 group-hover:opacity-100"
              >
                {copied === index ? (
                  <>
                    <Check size={14} />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Scheme Options */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {schemes.map((s) => (
            <button
              key={s.value}
              onClick={() => setScheme(s.value)}
              className={`p-4 rounded border text-left transition-all ${
                scheme === s.value
                  ? "bg-[#010409] border border-gray-800"
                  : " border-gray-800 hover:border-gray-700"
              }`}
            >
              <h3 className="text-white font-medium text-sm mb-1">{s.label}</h3>
              <p className="text-gray-500 text-xs">{s.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
