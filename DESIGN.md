---
name: Dentha Dental Studio
description: AI-First Modern Dental Studio & Conversational Care
colors:
  primary: "#0D4848"
  primary-hover: "#072E2E"
  accent: "#134E4A"
  secondary: "#92400E"
  secondary-hover: "#B45309"
  secondary-surface: "#FFFBEB"
  secondary-text: "#78350F"
  ground: "#F8FAFC"
  ground-alt: "#F1F5F9"
  card: "#FFFFFF"
  ink: "#0F172A"
  ink-muted: "#475569"
  border: "#E2E8F0"
  success: "#10B981"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 5.2vw, 3.85rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.875rem, 3.8vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Figtree, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  subhead:
    fontFamily: "Figtree, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Figtree, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.02em"
  caption:
    fontFamily: "Figtree, -apple-system, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
  micro:
    fontFamily: "Figtree, -apple-system, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.03em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.card}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.card}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-hover}"
---

# Design System: Dentha Dental Studio

## Overview

**Creative North Star: "The Architectural Sanctuary"**

Dentha rejects both the sterile, intimidating institutional dental template and the generic pastel "AI slop" veneer. It establishes a serene, light-filled architectural medical sanctuary characterized by crisp porcelain slate grounds (#F8FAFC), deep structural surgical teal (#0D4848), warm clinical amber-gold (#92400E), and refined editorial high-contrast typography.

The interface prioritizes conversational immediacy: rather than hiding clinical knowledge and booking behind phone lines or multi-page forms, the conversational console is the central interactive anchor of the entire experience.

**Key Characteristics:**
- Conversational triage as the primary hero action.
- Crisp, clinical hygiene without cold institutional hostility.
- Deep architectural teal anchors authority and technology; warm amber-gold anchors human care and patient comfort.
- Editorial high-contrast serif headlines paired with ultra-legible modern geometric body typography.

## Colors

The palette balances cool clinical precision (teal) with warm human care (amber-gold), grounded by clean surgical neutrals.

### Primary
- **Deep Architectural Teal** (#0D4848): Primary brand identity, primary CTA buttons, technology surfaces, and AI-powered focal points.
- **Teal Deep Hover** (#072E2E): State elevation on user hover and active interaction.

### Secondary
- **Clinical Amber-Gold** (#92400E / amber-800): Secondary accent for patient comfort, human care emphasis, featured highlights, and compositional rhythm breaks.
- **Amber Hover** (#B45309 / amber-700): Hover and active states on secondary surfaces and interactive elements.
- **Amber Surface** (#FFFBEB / amber-50): Light warm tint for secondary content areas and comfort-oriented sections.
- **Amber Text** (#78350F / amber-900): High-contrast readable text on amber surfaces.

### Neutral
- **Porcelain Ground** (#F8FAFC): Clean, luminous background reflecting modern daylight clinical spaces.
- **Surgical Stone Alt** (#F1F5F9): Alternate section background providing subtle, calm visual pacing.
- **Clean Card White** (#FFFFFF): Elevated container surface for high readability.
- **Deep Slate Ink** (#0F172A): Primary readable text, maintaining strict AAA contrast.
- **Subtle Muted Slate** (#475569): Secondary labels, clinical descriptions, and metadata.
- **Precision Border** (#E2E8F0): Hairline container definitions without harsh visual noise.

### Named Rules
**The Rarity of Teal Rule.** Deep teal is reserved for genuine actions, technology surfaces, and AI-powered focal points; it never floods backgrounds indiscriminately.

**The Secondary Warmth Rule.** Amber-gold belongs to patient comfort, human trust, and compositional variety. It owns specific roles (sanctuary highlights, verified trust badges, comfort procedures, warm welcome signals) and never competes with teal for the same element. The two colors alternate across sections to create visual rhythm, never mix within one component.

## Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body Font:** Figtree (with modern system sans fallback)

**Character:** Commanding editorial poise in headings with sturdy stem weights and high-clarity serifs that remain crisp and legible across all monitor types and resolutions. Figtree ensures effortless reading even for anxious or hurried patients.

### Hierarchy
- **Display** (600, clamp(2.5rem, 5.2vw, 3.85rem), 1.12): Hero thesis statements.
- **Headline** (600, clamp(1.875rem, 3.8vw, 2.75rem), 1.2): Section headers.
- **Title** (600, clamp(1.25rem, 2.2vw, 1.625rem), 1.3): Card titles and clinical treatment headings.
- **Body** (400, 1rem, 1.6): Narrative and descriptions (max 65-75ch).
- **Label** (600, 0.75rem, uppercase tracking): Clinical duration badges, status indicators, metadata.

### Named Rules
**The Calm Voice Rule.** No all-caps shout text or dramatic neon accents; typographic weight and contrast speak for themselves.

## Layout

A balanced 12-column grid system with generous vertical rhythm (py-24 on major sections) and maximum content bounds of 1280px (`max-w-7xl`). Generous whitespace above headings guarantees breathing room between treatments.

## Elevation & Depth

Surfaces rely on subtle single-declaration elevation rather than aggressive dropshadows or neobrutalist hard offsets.

### Shadow Vocabulary
- **Card Rest** (`box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.04)`): Subtle separation for treatments and doctor profiles.
- **Float Console** (`box-shadow: 0 12px 30px -4px rgba(15, 23, 42, 0.08)`): Elevated status for the primary conversational chat hero component.

## Shapes

- **Base Radius:** 16px (rounded-2xl) for main panels, treatment cards, and the chat console.
- **Control Radius:** 12px (rounded-xl) for buttons and inputs.
- **Badge Radius:** Full pill (rounded-full) for quick suggestion chips and status tags.

## Components

### Buttons
- **Primary:** Deep architectural teal (#0D4848), white text, 12px radius, smooth 150ms active scale feedback.
- **Secondary:** Clinical amber-gold (#92400E), white text, 12px radius, used for patient comfort and featured highlights.
- **Chip:** Crisp slate-50 background, subtle border, pill radius.

### Chat Console (Signature Component)
- Embedded in hero with live doctor status indicator, conversational message stream, suggestion chips, slot pickers, and inline booking confirmation.

## Do's and Don'ts

### Do:
- **Do** keep text contrast above 4.5:1 on all clinical and pricing copy.
- **Do** use authentic clinical photography and high-res doctor portraits over generic stock imagery.
- **Do** provide direct in-chat booking actions from every treatment and specialist profile.
- **Do** alternate teal and amber across sections to create visual rhythm and prevent monotone scrolling.

### Don't:
- **Don't** use decorative glowing halos or neon drop shadows.
- **Don't** use generic warm beige or cream presets.
- **Don't** use nested cards inside containers.
- **Don't** mix teal and amber within the same component or accent bar.
