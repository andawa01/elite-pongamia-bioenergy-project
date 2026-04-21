import React from "react";
import { ArrowRight, GraduationCap, Flame, TrendingUp } from "lucide-react";
import "./ImpactFlow.css";
import { Link } from "react-router-dom";

const ImpactFlow = () => {
  const steps = [
    {
      icon: <GraduationCap size={32} />,
      title: "Better Education",
      desc: "Promoting awareness on sustainable land use and renewable bioenergy.",
      color: "bronze",
    },
    {
      icon: <Flame size={32} />,
      title: "Healthy Cooking",
      desc: "Expanding access to clean biogas solutions and efficient decentralized systems.",
      color: "orange",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Economic Empowerment",
      desc: "Creating green jobs and enhancing local livelihoods through sustainable agriculture.",
      color: "green",
    },
  ];

  return (
    <section className="impact-flow-section">
      <div className="impact-container">
        {/* Header from Screenshot 1 */}
        <div className="impact-header">
          <h2>Ready to invest in Africa's energy future?</h2>
          <p>
            Join our growing network of investors, partners, and stakeholders
            driving real change across the continent.
          </p>
        </div>

        {/* Flow Chart from Screenshot 2 */}
        <div className="flow-wrapper">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={`flow-node ${step.color}`}>
                <div className="node-icon">{step.icon}</div>
                <div className="node-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flow-arrow">
                  <ArrowRight size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="impact-cta">
          <Link to="/contact-us">
            <button className="get-in-touch-btn">
              Get in Touch <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactFlow;
