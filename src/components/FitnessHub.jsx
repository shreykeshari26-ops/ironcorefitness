import React, { useState, useEffect } from 'react';
import { Activity, Flame, Scale, TrendingUp } from 'lucide-react';
import './FitnessHub.css';

const FitnessHub = () => {
  // BMI State
  const [bmiHeight, setBmiHeight] = useState(175);
  const [bmiWeight, setBmiWeight] = useState(70);
  const [bmi, setBmi] = useState(0);
  const [bmiCategory, setBmiCategory] = useState('');

  // TDEE State
  const [tdeeAge, setTdeeAge] = useState(25);
  const [tdeeGender, setTdeeGender] = useState('male');
  const [tdeeHeight, setTdeeHeight] = useState(175);
  const [tdeeWeight, setTdeeWeight] = useState(70);
  const [tdeeActivity, setTdeeActivity] = useState(1.55);
  const [tdee, setTdee] = useState(0);

  // Calculate BMI
  useEffect(() => {
    if (bmiHeight > 0 && bmiWeight > 0) {
      const heightInMeters = bmiHeight / 100;
      const calculatedBmi = (bmiWeight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) setBmiCategory('Underweight');
      else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) setBmiCategory('Normal');
      else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) setBmiCategory('Overweight');
      else setBmiCategory('Obese');
    }
  }, [bmiHeight, bmiWeight]);

  // Calculate TDEE
  useEffect(() => {
    if (tdeeHeight > 0 && tdeeWeight > 0 && tdeeAge > 0) {
      let bmr = (10 * tdeeWeight) + (6.25 * tdeeHeight) - (5 * tdeeAge);
      bmr += tdeeGender === 'male' ? 5 : -161;
      const calculatedTdee = Math.round(bmr * tdeeActivity);
      setTdee(calculatedTdee);
    }
  }, [tdeeAge, tdeeGender, tdeeHeight, tdeeWeight, tdeeActivity]);

  const getBmiColor = () => {
    switch(bmiCategory) {
      case 'Normal': return '#25D366';
      case 'Underweight': return '#FFB300';
      case 'Overweight': return '#FF5722';
      case 'Obese': return '#D32F2F';
      default: return '#FFF';
    }
  };

  return (
    <section className="fitness-hub" id="hub">
      <div className="container">
        <div className="hub-header">
          <h2>DIGITAL <span className="text-accent">FITNESS HUB</span></h2>
          <p>Instantly calculate your baseline metrics. Precision leads to progress.</p>
        </div>

        <div className="bento-grid">
          {/* BMI Calculator */}
          <div className="bento-card glass-card bmi-card">
            <div className="card-header">
              <Scale className="icon-accent" size={24} />
              <h3>BMI Calculator</h3>
            </div>
            
            <div className="calculator-layout">
              <div className="inputs">
                <div className="input-group">
                  <label>Height (cm): {bmiHeight}</label>
                  <input type="range" min="100" max="250" value={bmiHeight} onChange={(e) => setBmiHeight(Number(e.target.value))} />
                </div>
                <div className="input-group">
                  <label>Weight (kg): {bmiWeight}</label>
                  <input type="range" min="30" max="200" value={bmiWeight} onChange={(e) => setBmiWeight(Number(e.target.value))} />
                </div>
              </div>
              
              <div className="result-display">
                <div className="result-value" style={{ color: getBmiColor() }}>{bmi}</div>
                <div className="result-label" style={{ color: getBmiColor() }}>{bmiCategory}</div>
              </div>
            </div>
          </div>

          {/* TDEE Calculator */}
          <div className="bento-card glass-card tdee-card">
            <div className="card-header">
              <Flame className="icon-accent" size={24} />
              <h3>Calorie Needs (TDEE)</h3>
            </div>
            
            <div className="calculator-layout tdee-layout">
              <div className="inputs tdee-inputs">
                <div className="input-row">
                  <div className="input-group">
                    <label>Gender</label>
                    <select value={tdeeGender} onChange={(e) => setTdeeGender(e.target.value)}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label>Age: {tdeeAge}</label>
                    <input type="range" min="15" max="100" value={tdeeAge} onChange={(e) => setTdeeAge(Number(e.target.value))} />
                  </div>
                </div>
                
                <div className="input-row">
                  <div className="input-group">
                    <label>Height (cm): {tdeeHeight}</label>
                    <input type="range" min="100" max="250" value={tdeeHeight} onChange={(e) => setTdeeHeight(Number(e.target.value))} />
                  </div>
                  <div className="input-group">
                    <label>Weight (kg): {tdeeWeight}</label>
                    <input type="range" min="30" max="200" value={tdeeWeight} onChange={(e) => setTdeeWeight(Number(e.target.value))} />
                  </div>
                </div>

                <div className="input-group full-width">
                  <label>Activity Level</label>
                  <select value={tdeeActivity} onChange={(e) => setTdeeActivity(Number(e.target.value))}>
                    <option value={1.2}>Sedentary (office job)</option>
                    <option value={1.375}>Light Exercise (1-2 days/week)</option>
                    <option value={1.55}>Moderate Exercise (3-5 days/week)</option>
                    <option value={1.725}>Heavy Exercise (6-7 days/week)</option>
                    <option value={1.9}>Athlete (2x per day)</option>
                  </select>
                </div>
              </div>

              <div className="result-display tdee-result">
                <div className="result-value text-accent">{tdee}</div>
                <div className="result-label">kcal / day</div>
              </div>
            </div>
          </div>
          
          {/* Info Card */}
          <div className="bento-card glass-card info-card">
            <TrendingUp className="icon-accent" size={32} />
            <h3>Your Next Step</h3>
            <p>Ready to put these numbers into action? Get a customized plan tailored to your metrics.</p>
            <button className="btn-primary" style={{marginTop: 'auto', maxWidth: '300px', width: '100%'}}>Start Free Trial</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitnessHub;
