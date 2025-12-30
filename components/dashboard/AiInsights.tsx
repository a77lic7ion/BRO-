import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Card from '../ui/Card';
import { Kpi, ChartDataPoint } from '../../types';

interface AiInsightsProps {
  kpis: Kpi[];
  chartData: ChartDataPoint[];
}

const AiInsights: React.FC<AiInsightsProps> = ({ kpis, chartData }) => {
  const [insight, setInsight] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateInsight = async () => {
      setLoading(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const dataSummary = `
          KPIs: ${kpis.map(k => `${k.title}: ${k.value} (${k.change} change)`).join(', ')}
          Trend Data: ${chartData.map(d => `${d.name}: ${d.value}`).join(', ')}
        `;

        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `Analyze this South African BPO dashboard data and provide one actionable executive summary (2-3 sentences) focused on productivity and growth: ${dataSummary}`,
          config: {
            systemInstruction: "You are a senior AI business consultant for ZA-BPO. Be professional, data-driven, and concise. Your audience are business owners looking for growth levers.",
          }
        });

        setInsight(response.text || 'Performance analysis complete.');
      } catch (err) {
        console.error('AI Insight Error:', err);
        setError('Intelligent strategy automation currently unavailable.');
      } finally {
        setLoading(false);
      }
    };

    if (kpis.length > 0) {
      generateInsight();
    }
  }, [kpis, chartData]);

  return (
    <Card className="col-span-1 lg:col-span-3 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 bg-primary/20 rounded-lg">
            <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h3 className="text-lg font-bold text-foreground">AI Strategy Insights</h3>
        </div>
        {!loading && !error && (
           <span className="text-[10px] text-primary uppercase font-black tracking-widest bg-primary/10 px-2 py-0.5 rounded">Live Analysis</span>
        )}
      </div>
      
      {loading ? (
        <div className="space-y-2 animate-pulse">
          <div className="h-3 bg-border rounded w-full"></div>
          <div className="h-3 bg-border rounded w-3/4"></div>
        </div>
      ) : error ? (
        <p className="text-sm text-red-400/80 italic">{error}</p>
      ) : (
        <div className="relative">
          <p className="text-sm leading-relaxed text-foreground/90 font-medium italic pr-12">
            "{insight}"
          </p>
        </div>
      )}
    </Card>
  );
};

export default AiInsights;