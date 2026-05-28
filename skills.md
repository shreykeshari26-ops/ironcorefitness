# Agent Skill: Premium Fitness E-Commerce & Lead Generation Engine

## Context & Vision
The goal is to build "IronCore Fitness," a high-conversion, premium gym website. The design must feel heavy, athletic, and elite—avoiding cheap generic Bootstrap templates. It utilizes an ultra-modern dark UI paired with high-contrast energetic accents, fluid typography, and interactive components designed to maximize user engagement and local lead generation.

## Architectural Guidelines

### 1. Visual & Layout Strategy (Reference Image Synthesis)
- **Reference Image Behavior:** Analyze the images in the `reference/` folder. Extract the structural density, typography scaling, and high-contrast lighting styles. Do not replicate literally; adapt the raw energy into a clean, modern web interface.
- **Atmosphere:** Implement a dark mode foundation (Deep Obsidian/Carbon) contrasted with sharp, glowing action elements (Neon Orange/Cyber Yellow). 
- **Component Styling:** Use sharp or subtly rounded borders (`6px` to `8px` max) to maintain an aggressive, athletic edge. Incorporate sophisticated depth using subtle linear gradients on cards rather than flat fills.

### 2. State Management & Calculators
- **BMI Calculator:** Implement a real-time reactive component using local component state. Ensure dynamic classification readouts (Underweight, Normal, Overweight) with matching color states.
- **Calorie Calculator:** Process user metrics (Age, Weight, Activity Level) using the Mifflin-St Jeor equation to instantly output calculated Total Daily Energy Expenditure (TDEE).
- **Smooth Interaction:** Ensure all calculator state changes happen instantly without full-page re-renders.

### 3. Conversion Mechanics
- **Sticky Navigation:** Persistent top navigation bar featuring a high-visibility, pulsing or glowing "Free Trial" CTA.
- **Floating Actions:** Persistent, bottom-right anchored WhatsApp floating action button with an active pulse indicator to simulate live chat availability.
- **Form Handling:** Intercept form submissions locally, providing immediate micro-interactions (e.g., "Securing your pass...") followed by crisp success states.