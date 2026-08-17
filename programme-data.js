const PIN='<svg viewBox="0 0 10 12" fill="currentColor" aria-hidden="true"><path d="M7.78454 1.33567C6.92323 0.474371 5.77809 0 4.56011 0C3.34212 0 2.19698 0.474371 1.33567 1.33567C0.474371 2.19698 0 3.34212 0 4.56011C0 7.32943 2.77173 10.5081 3.96353 11.7463C4.1211 11.91 4.33285 12 4.55995 12H4.56011C4.78721 12 4.99911 11.9097 5.15668 11.746C5.52826 11.3596 6.09459 10.7406 6.68259 9.98558C6.68364 9.98422 6.68469 9.98287 6.68575 9.98151L7.214 9.27086C7.21505 9.26951 7.2161 9.268 7.21716 9.2665C8.47984 7.48023 9.12021 5.89668 9.12021 4.56011C9.12021 3.34212 8.64584 2.19698 7.78454 1.33567ZM4.56011 5.98984C3.77179 5.98984 3.13037 5.34842 3.13037 4.56011C3.13037 3.77179 3.77179 3.13037 4.56011 3.13037C5.34842 3.13037 5.98984 3.77179 5.98984 4.56011C5.98984 5.34842 5.34842 5.98984 4.56011 5.98984Z"/></svg>';
const MEMBERS=[["David Abraham, PhD","University College London, UK"],["Christopher Denton, MD, PhD","University College London, UK"],["Carol Feghali-Bostwick, PhD","Medical University of South Carolina, USA"],["Maureen Mayes, MD","UTHealth Houston, USA"]];
const DAYS=[
 {date:"July 26",sessions:[
  {n:"",title:"Registration and Welcome",groups:[
   {chairs:[["Carol Black","London"],["Robert Lafyatis","Pittsburgh"]],talks:[
    {time:"13:00",title:"Registration"},
    {time:"18:00",title:"Welcome and Introduction"}]}]},
  {n:"Keynote",title:"The Edith Busch Foundation Lecture",groups:[
   {heading:"Introduction | Thomas Krieg (Cologne) and Martin B\u00e4ppler (EBF)",talks:[
    {time:"18:05",title:"Organ fibrosis and the search for antifibrotic agents",speaker:"Massimo Pinzani",loc:"London"},
    {time:"19:00",title:"Edith Busch Foundation Lifetime Achievement Award",speaker:"Prof. John Varga",loc:"Michigan"},
    {time:"19:15",title:"Welcome Reception \u2014 Cloisters"}]}]}]},
 {date:"July 27",sessions:[
  {n:"Session 1",title:"Cell Based Therapies",groups:[
   {heading:"Part 1 | Emerging immune cell therapies",chairs:[["Yannick Allanore","Paris"],["Cristina Padilla","Pittsburgh"]],talks:[
    {time:"08:30",title:"Introduction"},
    {time:"08:40",title:"CAR-T cells",speaker:"Max Konig",loc:"Baltimore"},
    {time:"09:10",title:"Natural killer cells as novel therapeutics in organ fibrosis",speaker:"Christian Stockmann",loc:"Zurich"},
    {time:"09:40",title:"Dendritic cell / APC therapy",speaker:"Franck Barrat",loc:"New York"},
    {time:"10:10",title:"Comfort break"}]},
   {heading:"Part 2 | B cell therapy and HSCT",chairs:[["Ariane Herrick","Manchester"],["Voon Ong","London"]],talks:[
    {time:"10:20",title:"Introduction"},
    {time:"10:30",title:"Regulatory B cells",speaker:"Claudia Mauri",loc:"London"},
    {time:"11:00",title:"Update on HSCT",speaker:"Julia Spierings",loc:"Utrecht"},
    {time:"11:20",title:"Discussion"},
    {time:"11:30",title:"Morning coffee"}]},
   {heading:"Part 3 | Exploiting dendritic cells and macrophages to identify novel pathways in disease",chairs:[["Clayton Yates","Baltimore"],["Patricia Pioli","Dartmouth"]],talks:[
    {time:"11:50",title:"Introduction"},
    {time:"12:00",title:"TAM receptors in chronic inflammation and autoimmune disease",speaker:"Sourav Ghosh",loc:"New Haven"},
    {time:"12:20",title:"Mechano-sensing and peptide-based therapies",speaker:"Richard Stratton",loc:"London"},
    {time:"12:40",title:"Role of monocytes in SSc disease progression: preliminary data from the SYSMIC consortium",speaker:"Jacques Behmoaras",loc:"Singapore"},
    {time:"1:00",title:"Discussion"},
    {time:"1:20",title:"Lunch"}]}]},
  {n:"Session 2",title:"Interstitial Lung Disease",groups:[
   {chairs:[["Maureen Mayes","Houston"],["Maria Trojanoska","Boston"]],talks:[
    {time:"2:20",title:"Introduction"},
    {time:"2:30",title:"Identification of key fibrogenic signalling nodes in pulmonary fibrosis",speaker:"Rachel Chambers",loc:"London"},
    {time:"3:00",title:"Endothelial dysfunction and vascular permeability in pulmonary fibrosis",speaker:"Rachel Knipe",loc:"Boston"},
    {time:"3:30",title:"Clinical trials in SSc-ILD",speaker:"Elizabeth Renzoni",loc:"London"},
    {time:"4:00",title:"Discussion"},
    {time:"4:10",title:"Afternoon tea"}]}]},
  {n:"Session 3",title:"Gastrointestinal Disease in SSc",groups:[
   {chairs:[["Charles Murray","London"],["Elizabeth Volkmann","Los Angeles"]],talks:[
    {time:"4:40",title:"Introduction"},
    {time:"4:50",title:"Intestinal pathology in Crohn's disease and scleroderma",speaker:"Matthias Friedrich",loc:"Oxford"},
    {time:"5:20",title:"Causes and contributors of GI disease in SSc",speaker:"Zsuzsanna McMahan",loc:"Texas"},
    {time:"5:40",title:"Discussion"},
    {time:"6:00",title:"End of session"},
    {time:"6:30",title:"Poster viewing"}]}]}]},
 {date:"July 28",sessions:[
  {n:"Session 4",title:"Young and Emerging Investigators \u2014 Selected Abstracts",groups:[
   {heading:"Part I",chairs:[["Armando Gabrielli","D\u00fcsseldorf"],["Masataka Kuwana","Tokyo"]],talks:[
    {time:"08:45",title:"Introduction"},
    {time:"08:50",title:"Presentations"}]},
   {heading:"Part II",chairs:[["Alain Lescoat","Rennes"],["Yukie Yamaguchi","Yokohama"]],talks:[
    {time:"09:40",title:"Presentations"},
    {time:"10:40",title:"Morning coffee"}]}]},
  {n:"Session 5",title:"Understanding Disease Pathogenesis Through Organoids and Self-Assembled Tissues",groups:[
   {chairs:[["Michael Whitfield","Dartmouth"],["Markella Ponticos","London"]],talks:[
    {time:"11:00",title:"Introduction"},
    {time:"11:05",title:"Harnessing organoids to study cardiometabolic diseases",speaker:"TBA"},
    {time:"11:35",title:"Translating bioengineered organoid technology: a path to translation",speaker:"Eirini Velliou",loc:"London"},
    {time:"12:05",title:"Discussion"},
    {time:"12:30",title:"Lunch"}]}]},
  {n:"Session 6",title:"B Cells and Autoantibodies",groups:[
   {chairs:[["Claire Beesley","London"],["Yannick Allanore","Paris"]],talks:[
    {time:"1:50",title:"Introduction"},
    {time:"2:00",title:"Transitional B cell sub-sets in SSc",speaker:"Rigzar Mageed",loc:"London"},
    {time:"2:30",title:"Autoantibodies in SSc: drivers, markers or bystanders",speaker:"Luc Mouthon",loc:"Paris"},
    {time:"3:00",title:"Discussion"},
    {time:"3:30",title:"Afternoon tea"}]}]},
  {n:"Session 7",title:"Fibroblast Heterogeneity and Sub-Sets",groups:[
   {heading:"Implications for pathogenesis and cell therapy",chairs:[["John Varga","Michigan"],["Thomas Krieg","Cologne"]],talks:[
    {time:"3:50",title:"Introduction"},
    {time:"4:00",title:"Immune regulation of skin development",speaker:"Elena Winheim",loc:"Newcastle"},
    {time:"4:30",title:"New insights into the pathogenesis of skin inflammation",speaker:"Johann E Gudjonsson",loc:"Michigan"},
    {time:"5:00",title:"Targeting of disease fibroblast populations in SSc",speaker:"J\u00f6rg Distler",loc:"D\u00fcsseldorf"},
    {time:"5:30",title:"Discussion"},
    {time:"6:00",title:"End of session"},
    {time:"6:10",title:"World Scleroderma Foundation"},
    {time:"6:40",title:"European Scleroderma Trials and Research Group (EUSTAR); poster viewing"},
    {time:"7:30",title:"Banquet \u2014 Great Hall, St. John's College. Dinner speaker: Prof. Sir Leszek Borysiewicz GBE FRS"}]}]}]},
 {date:"July 29",sessions:[
  {n:"Session 8",title:"Regeneration, Repair, Metabolism and Fibrosis",groups:[
   {chairs:[["Stinne Ravn Greisen","Aarhus"],["George Bou-Gharios","Liverpool"]],talks:[
    {time:"08:50",title:"Introduction"},
    {time:"09:00",title:"Cancer-associated fibroblasts control of the tumour environment",speaker:"Sara Zanivan",loc:"Houston"},
    {time:"09:30",title:"Circadian control of collagen homeostasis: new paradigms",speaker:"Joan Chang",loc:"Manchester"},
    {time:"10:00",title:"Lessons from keloid and hypotrophic scars",speaker:"Tanya Shaw",loc:"London"},
    {time:"10:30",title:"Regeneration at the single cell level",speaker:"Daniela Pan\u00e1kov\u00e1",loc:"Berlin"},
    {time:"11:00",title:"Discussion"},
    {time:"11:10",title:"Morning coffee"}]}]},
  {n:"Session 9",title:"Scleroderma Clinical Trials Consortium (I)",groups:[
   {heading:"Moderator | Tracy Frech",talks:[
    {time:"11:40",title:"EULAR 2023 updated skin recommendations vs British Society of Rheumatology",speaker:"Francesco Del Galdo",loc:"Leeds"},
    {time:"11:50",title:"EULAR 2023 ILD vs ACR / CHEST SSc-ILD",speaker:"Sherwin Assassi",loc:"Texas"},
    {time:"12:00",title:"Regional practice patterns: a comparative discussion based on recent surveys and literature",speaker:"Kimberly Lakin",loc:"New York"},
    {time:"12:10",title:"Discussion"},
    {time:"12:20",title:"How do background standard-of-care disparities impact trial design? Perspectives from academia",speaker:"Robyn Domsic",loc:"Pittsburgh"},
    {time:"12:35",title:"How do background standard-of-care disparities impact trial design? Perspectives from industry",speaker:"Barbara White",loc:"Maryland"},
    {time:"12:45",title:"Discussion"},
    {time:"12:50",title:"Putting it together / wrap up",speaker:"Tracy Frech",loc:"Tennessee"},
    {time:"1:00",title:"Lunch"}]}]},
  {n:"Session 10",title:"Scleroderma Clinical Trials Consortium (II)",groups:[
   {talks:[
    {time:"2:00",title:"Introduction and session (chairs TBA)"},
    {time:"3:30",title:"Afternoon tea"}]}]},
  {n:"Session 11",title:"Clinical Trials and Industry Collaboration",groups:[
   {heading:"A forum for industry and charity partners to present aspects of academic interactions",chairs:[["Maya Buch","Manchester"],["Oliver Distler","Zurich"]],talks:[
    {time:"4:00",title:"Introduction"},
    {time:"4:05",title:"CONQUEST platform study",speaker:"Gregory Gordon",loc:"San Francisco"},
    {time:"4:25",title:"Engitix Therapeutics",speaker:"TBA"},
    {time:"4:45",title:"Development of an ex vivo model of systemic sclerosis skin fibrosis",speaker:"Steven O'Reilly",loc:"Newcastle"},
    {time:"5:05",title:"Mestag Therapeutics",speaker:"Tim Johnson",loc:"Oxford"},
    {time:"5:25",title:"Servier",speaker:"Selena Bouffette",loc:"Paris"},
    {time:"5:40",title:"Comfort break"}]}]},
  {n:"Session 12",title:"Genomics and Epigenomics",groups:[
   {chairs:[["Javier Martin","Granada"],["Carol Feghali-Bostwick","Charleston"]],talks:[
    {time:"5:50",title:"Introduction"},
    {time:"6:00",title:"Genomics and epigenomics of phenotypic plasticity in health and disease",speaker:"Andrew Feinberg",loc:"Baltimore"},
    {time:"6:20",title:"Perturb-seq and scleroderma risk variants",speaker:"Pravitt Gourh",loc:"Bethesda"},
    {time:"6:40",title:"Discussion; end of session"},
    {time:"6:50",title:"Poster session"}]}]}]},
 {date:"July 30",sessions:[
  {n:"Session 13",title:"Advances and Applications of Omics Technologies",groups:[
   {chairs:[["Kristina Clark","London"],["Shervin Assassi","Texas"]],talks:[
    {time:"08:50",title:"Introduction"},
    {time:"09:00",title:"Molecular tools to monitor health and disease",speaker:"Ulf Landegren",loc:"Uppsala"},
    {time:"09:30",title:"Advances in the technological landscape and applications of single-cell multi-omics",speaker:"Jishnu Das",loc:"Pittsburgh"},
    {time:"10:00",title:"Combining proteomics and other omics technologies to unravel disease-specific networks",speaker:"Manuel Mayr",loc:"London"},
    {time:"10:30",title:"Discussion"},
    {time:"11:00",title:"Morning coffee"}]}]},
  {n:"Session 14",title:"Mechanisms of Pulmonary Vascular Disease",groups:[
   {chairs:[["Gerry Coghlan","London"],["Marco Matucci Cerinic","Milan"]],talks:[
    {time:"11:30",title:"Introduction"},
    {time:"11:40",title:"Emerging therapies in PAH",speaker:"Marlene Rabinovitch",loc:"Stanford"},
    {time:"12:10",title:"Metabolic profiling in PAH",speaker:"Rachel Damico",loc:"Miami"},
    {time:"12:40",title:"DNMT3A mutations as a risk factor for pulmonary hypertension in patients with connective tissue disease",speaker:"Stephen Archer",loc:"Kingston"},
    {time:"1:10",title:"Discussion"},
    {time:"1:20",title:"Lunch; end of workshop"}]}]}]}
];
