export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: "web-maps" | "printed-maps" | "agriculture" | "storytelling" | "research";
  img: string;
  images?: string[]; // Multiple images for gallery
  liveUrl?: string; // Link to live web app
  pdfUrl?: string; // Link to PDF
  videoUrl?: string; // Link to video
  alt: string;
  overlayColor: string;
  overlayText: string;
  description?: string;
  details?: {
    location?: string;
    tools?: string[];
    collaborators?: string[];
    context?: string;
  };
}

export const projects: Project[] = [
{
  id: "current-research-agroforestry",
  title: "From Data to Interventions: Visual Analytics Framework for Agroforestry",
  client: "Eurac Research · TU Munich · Horizon Europe · TRANS-SAHARA",
  year: "2026",
  category: "research",
  img: "/src/imports/Screenshot_2026-05-10_at_15.36.37.png",
  images: [
    "/src/imports/Screenshot_2026-05-10_at_15.36.37.png",
    "/src/imports/Screenshot_2026-05-10_at_15.37.40.png",
    "/src/imports/Screenshot_2026-05-10_at_15.38.34.png",
    "/src/imports/Screenshot_2026-05-10_at_15.40.23.png",
  ],
  alt: "Visual analytics framework for agroforestry management",
  overlayColor: "#7A9B5F",
  overlayText: "WEFE-Nexus · North Africa · SDG",
  description: "Cartographic decision-support platform that visualises trade-offs and synergies between water, energy, food, and ecosystem (WEFE-Nexus) indicators across spatial scales — supporting evidence-based sustainability transitions in North African Living Labs. Developing through iterative design with domain experts and field stakeholders. Suitability map based on multi-criteria suitability modelling with interactive web interfaces.",
  details: {
    location: "Bolzano, Italy",
    tools: ["React", "JavaScript", "MapLibre", "Python", "MCDA / Weighted Linear Combination", "Multi-Criteria Suitability Modelling", "Visual Analytics", "WEFE-Nexus Modelling", "Stakeholder Co-design"],
    collaborators: ["Eurac Research · Center for Sensing Solutions", "TU Munich", "EU Horizon Europe TRANS-SAHARA · Grant #101182176"],
    context: "Ongoing Master's thesis research at Eurac Research (Bolzano) within the EU Horizon Europe project TRANS-SAHARA (Grant #101182176). The project develops a cartographic visual analytics framework to support SDG-aligned land management decisions in North African Living Labs. The platform integrates soil, climate, and land-use datasets to communicate trade-offs and synergies between WEFE-Nexus indicators — translating complex environmental data into actionable spatial information for policymakers and field practitioners. The interface developing through iterative design cycles including stakeholder surveys and co-design sessions with domain experts, ensuring the visualisation of uncertainty and complexity remains operationally meaningful. Built with React and JavaScript, the web-based platform applies cartographic theory and user-centred design principles to bridge spatial analysis with real-world decision-support needs.",
  },
},
  {
    id: "biomass-estimation-gabon-2026",
    title: "Above-Ground Biomass Estimation",
    client: "TU Dresden · GEOLab",
    year: "2026",
    category: "research",
    img: "/src/imports/Screenshot_2026-05-10_at_18.24.48.png",
    images: [
      "/src/imports/Screenshot_2026-05-10_at_18.24.48.png",
      "/src/imports/Screenshot_2026-05-10_at_18.25.03.png",
      "/src/imports/Screenshot_2026-05-10_at_18.25.20.png",
      "/src/imports/Screenshot_2026-05-10_at_18.25.37.png",
      "/src/imports/Screenshot_2026-05-10_at_18.25.47.png",
      "/src/imports/Screenshot_2026-05-10_at_18.25.58.png",
      "/src/imports/Screenshot_2026-05-10_at_18.26.09.png",
      "/src/imports/Screenshot_2026-05-10_at_18.26.25.png",
      "/src/imports/Screenshot_2026-05-10_at_18.27.06.png",
      "/src/imports/Screenshot_2026-05-10_at_18.27.20.png",
      "/src/imports/Screenshot_2026-05-10_at_18.27.31.png",
    ],
    alt: "Above-ground biomass estimation using multi-frequency SAR",
    overlayColor: "#4A7C59",
    overlayText: "Remote Sensing · Tropical Forests",
      description: "Course research project for the Environmental & Climate Remote Sensing module at TU Dresden (GEOLab, 2026). Evaluated the capability of multi-frequency SAR observations (C-, L-, and P-band) to estimate forest aboveground biomass (AGB) in Lopé National Park, Gabon. The Random Forest approach explained 73% of AGB variability at footprint level and 63% spatially, demonstrating that L- and P-band SAR provides a viable basis for tropical forest monitoring.",    details: {
      location: "Dresden, Germany",
      tools: ["SAR (C-, L-, P-band)", "GEDI LiDAR", "LVIS LiDAR", "Random Forest", "Remote Sensing"],
      collaborators: ["Remote Sensing for Environmental Asessment", "TU Dresden"],
      context: "Evaluation of multi-frequency SAR observations (C-, L-, and P-band) to estimate forest aboveground biomass (AGB) in Gabon, using GEDI LiDAR footprints as reference data and LVIS LiDAR for spatial validation. The Random Forest approach explained 73% of AGB variability at footprint level and 63% spatially, demonstrating that multi-frequency SAR, particularly at L- and P-band, provides a viable basis for tropical AGB estimation.",
    },
  },
  {
    id: "atmospheric-microparticles-2023",
    title: "Analysis of Atmospheric Microparticles Reflecting Ecological Conditions",
    client: "Lomonosov Moscow State University",
    year: "2023",
    category: "research",
    img: "/src/imports/Screenshot_2026-05-10_at_16.29.09.png",
    alt: "Atmospheric microparticles research at Moscow State University",
    overlayColor: "#2A4A7C",
    overlayText: "Environmental Science · Urban Ecology",
    description: "Atmospheric microparticles pose environmental and health risks in urban areas. This research investigates the morphological and mineralogical characteristics of atmospheric microparticles to assess ecological risks associated with their transport and deposition in Russian cities.",
    details: {
      location: "Russian Cities",
      tools: ["X-ray Microscopy", "Mineralogical Analysis", "Spatial Analysis", "Environmental Risk Assessment"],
      collaborators: ["Faculty of Soil Science, MSU"],
      context: "Comprehensive morphological and mineralogical studies of atmospheric microparticles sampled on the roof of the museum complex and near roads in the town of Istra, Moscow region, have been carried out. Morphological research at different hierarchical levels revealed the multicomponent composition of microparticles and made it possible to identify the most characteristic groups of microparticles of natural and anthropogenic origin. The composition of the studied atmospheric microparticles is dominated by mineral grains of quartz and feldspars; biotite and calcite are singly noted, which reflects the ecological and geographical conditions of their formation, namely the Central Russian mineralogical province. A small share of technogenic particles in the composition of aerosol fallout indicates a low level of technogenic load and a favorable environmental situation in the study area, largely due to the protective functions of the forest park zone. The results of determining the material composition and calculating the enrichment factors also indicate a low level of technogenic impact on the natural environment."
  },
  },
  {
    id: "soil-mineralogy-bachelor-2021",
    title: "Mineralogical Composition of Soils on Various Parent Materials in Moscow Region",
    client: "Moscow State University",
    year: "2021",
    category: "research",
    img: "/src/imports/Screenshot_2026-05-10_at_17.47.44.png",
    alt: "Soil mineralogy and microscopy research",
    overlayColor: "#8B7355",
    overlayText: "Soil Science · Mineralogy",
    description: "Investigation of the mineralogical composition of soils formed on different parent materials in the Istra River valley, combined with morphological and mineralogical analysis of atmospheric microparticles in park areas. The study employs polarization microscopy and X-ray dispersion analysis to characterize soil properties and environmental conditions.",
    details: {
      location: "Istra River Valley, Moscow Region",
      tools: ["Polarization Microscopy", "X-ray Dispersion Analysis", "Thermal Analysis", "Morphological Analysis"],
      collaborators: ["Faculty of Soil Science, MSU"],
      context: "This bachelor's thesis investigates the mineralogical composition of soils as a key indicator of their physical, chemical, and agronomic properties. The research examines how soil formation processes influence mineral composition across different parent materials in the Moscow Region, while also analyzing atmospheric microparticles to assess the ecological state of the territory.",
    },
  },
  {
    id: "borders-separation",
    title: "Borders: Separation Architecture",
    client: "TU Wien · Webmapping Course",
    year: "2025",
    category: "storytelling",
    img: "/src/imports/Screenshot_2026-05-08_at_18.08.23.png",
    liveUrl: "https://annashelegina808.github.io/Borders/",
    alt: "Visual storytelling about borders and separation through cartography",
    overlayColor: "#C84B31",
    overlayText: "Separation Architecture",
    description: "An interactive visual narrative exploring borders as architectural and social constructs. Through four chapters—Line, Landscape, Silence, and Cartography—the project examines how borders shape space, identity, and human experience.",
    details: {
      location: "Vienna, Austria",
      tools: ["HTML", "CSS",  "Visual Narrative", "Photography"],
      context: "This scrolling narrative combines cartographic analysis with visual storytelling to explore the multifaceted nature of borders. From the physical line to the psychological silence it creates, the project investigates how separation is designed, constructed, and experienced across different scales.",
    },
  },
  {
    id: "territory-five-frames",
    title: "Territory: Five Frames to the System",
    client: "TU Wien · Webmapping Course",
    year: "2025",
    category: "storytelling",
    img: "/src/imports/Screenshot_2026-05-08_at_18.14.09.png",
    liveUrl: "https://annashelegina808.github.io/Territory/",
    alt: "Interactive narrative mapping the birth of totalitarianism",
    overlayColor: "#1a1a1a",
    overlayText: "Territory",
    description: "A spatial narrative exploring how totalitarianism emerges through five critical events: shooting, silence, light, window, and screen. Each chapter maps a step from freedom to submission across a conceptual territory.",
    details: {
      location: "Vienna, Austria",
      tools: ["HTML", "CSS", "Interactive Mapping", "Spatial Narrative"],
      context: "This web-based storytelling project uses cartographic language to narrate the gradual emergence of totalitarian control. Five events are mapped across a territory, each representing a different mechanism of surveillance and control—from violence against dissent to the construction of perfect images that mask reality.",
    },
  },
  {
    id: "democracy-game-prototype",
    title: "Democracy Game — Interactive Web Cartography Project",
    client: "TU Wien · Webmapping Course",
    year: "2025",
    category: "web-maps",
    img: "/src/imports/Screenshot_2026-05-10_at_18.59.48.png",
    liveUrl: "https://rasscrom.github.io/democracy-game/src/pages/home",
    alt: "Interactive educational game about democracy and political regimes",
    overlayColor: "#5C6AC4",
    overlayText: "State of Mind · Democracy",
    description: "State of Mind is an interactive educational game developed for the Web Mapping course in the Cartography Master's program at TU Wien (2025). Centered around the theme of democracy, the game explores different political regimes around the world through engaging gameplay. Developed the interactive web map component and designed the Figure Mode — a quiz-style gameplay module in which players associate historical figures (Stalin, Churchill, and others) with their countries of origin, visualized on an interactive map.",
    details: {
      location: "TU Wien",
      tools: ["Interactive Mapping", "Web Cartography", "Game Design", "JavaScript"],
      collaborators: ["TU Wien Webmapping Course"],
      context: "This educational game challenges users' geographical knowledge, requiring them to identify countries by location and recognize their shapes in specific modes. Players can dive into various modes, some featuring influential historical figures, to explore how different political regimes shape democracy worldwide.",
    },
  },
{
  id: "moscow-parking",
  title: "Salzburg Parking Interactive Map",
  client: "Group Project",
  year: "2025",
  category: "web-maps",
  img: "/src/imports/Screenshot_2026-05-08_at_15.38.10.png",
  liveUrl: "https://parking-ecru-iota.vercel.app",
  alt: "Interactive web map showing parking locations in Salzburg",
  overlayColor: "#4A90E2",
  overlayText: "Salzburg Parking Map",
  description: "An interactive web-based map visualising parking infrastructure across Salzburg, Austria. Built with React and Mapbox GL, the map provides spatial navigation and analysis of parking availability and accessibility across the city.",
  details: {
    location: "Salzburg, Austria",
    tools: ["React", "Mapbox GL", "TypeScript", "Vercel"],
    context: "Group roject exploring interactive web cartography for urban mobility. The map visualises parking locations across Salzburg with spatial filtering and navigation features, combining cartographic design with functional web development.",
  },
},
  {
    id: "tourism-future-schladming",
    title: "Tourism of the Future in Schladming",
    client: "TU Dresden",
    year: "2025",
    category: "printed-maps",
    img: "/src/imports/Layout_aff_2.jpg",

    alt: "Futuristic tourism map of Schladming with neon routes",
    overlayColor: "#E91E8C",
    overlayText: "Tourism of the Future",
    description: "A cartographic exploration of future tourism in Schladming, Austria. The map visualizes potential tourism scenarios through dynamic routes, policies, and infrastructures in a cyberpunk-inspired aesthetic.",
    details: {
      location: "Schladming, Austria",
      tools: ["QGIS", "Adobe Illustrator", "Blender", "Cartographic Design"],
      collaborators: ["Group Project · Cartography M.Sc."],
      context: "This project explores how tourism might evolve in alpine regions under climate change, technological advancement, and shifting travel patterns. Using speculative design and futuristic visualization, the map presents alternative tourism futures through neon-lit routes and data-driven scenarios.",
    },
  },
  {
    id: "ski-resorts-spain-andorra",
    title: "Ski Resorts in Spain and Andorra",
    client: "TU Wien",
    year: "2025",
    category: "printed-maps",
    img: "/src/imports/Spain.pdf",
    alt: "Watercolor-style map of ski resorts across Spain and Andorra with elevation visualization",
    overlayColor: "#4A6FA5",
    overlayText: "Winter Tourism Map",
    description: "A thematic map visualizing ski resort distribution across Spain and Andorra using watercolor-style elevation rendering. The map categorizes resorts by altitude and regional systems including the Pyrenees, Cantabrian Mountains, and Sierra Nevada.",
    details: {
      location: "Spain & Andorra",
      tools: ["QGIS", "Adobe Illustrator", "Cartographic Design", "Terrain Visualization"],
      context: "This university project maps the diverse landscape of winter tourism infrastructure across the Iberian Peninsula and Andorra. Using artistic watercolor techniques to represent elevation, the map highlights three major mountain systems that support skiing, from the high Pyrenees to Sierra Nevada in the south.",
    },
  },
  {
    id: "lugano-contours",
    title: "Contours of Lugano",
    client: "TU Wien",
    year: "2025",
    category: "printed-maps",
    img: "/src/imports/Screenshot_2026-05-10_at_15.29.06.png",
    alt: "Topographic map of Lugano showing contour lines and lakes",
    overlayColor: "#D4A5A5",
    overlayText: "Where the Hills Embrace the Lake",
    description: "A topographic visualization exploring the relationship between terrain and water bodies in Lugano, Switzerland. The map uses traditional cartographic techniques with contour lines to reveal how the Alpine hills embrace the lakes.",
    details: {
      location: "Vienna, Austria",
      tools: ["QGIS", "Adobe Illustrator", "Python"],
      context: "This map represents the unique topography of Lugano, where steep Alpine terrain meets serene lake waters. The contour lines tell a story of elevation, creating a visual narrative of the landscape's embrace of water.",
    },
  },
{
  id: "moscow-visual-taxonomy",
  title: "W.exe Moscow — Visual Taxonomy: From Imitation to Spectacle",
  client: "TU Wien · Cartographic Design Course",
  year: "2025",
  category: "printed-maps",
  img: "/src/imports/Screenshot_2026-05-08_at_12.05.46.png",
  images: [
    "/src/imports/Screenshot_2026-05-08_at_12.05.46.png",
    "/src/imports/Screenshot_2026-05-08_at_12.05.53.png",
  ],
  alt: "Visual taxonomy map of Moscow — simulation, simulacrum, hyperreality",
  overlayColor: "#2A2A2A",
  overlayText: "Simulation · Simulacrum · Hyperreality",
  description: "A printed cartographic research project investigating Moscow's architectural fabric through the lens of Baudrillard's theory of simulation. Twenty buildings across the city are classified into three categories — Simulation, Simulacrum, and Hyperreality — based on their relationship to authenticity, reference, and spectacle. The map asks: when does architecture cease to reflect reality and begin to generate it?",
  details: {
    location: "Vienna, Austria",
    tools: ["QGIS", "Adobe Illustrator", "Python", "Spatial Analysis", "Cartographic Design"],
    context: "Developed for the Cartographic Design course at TU Wien (M.Sc. Cartography, 2025). The project applies Baudrillard's philosophical framework — True Existence → Doubts → Simulation → Simulacrum → Hyperreality — as a spatial classification system. Each of 20 selected Moscow buildings is analysed through photographic evidence, historical research, and morphological observation to determine its position in the simulation taxonomy. The map integrates satellite imagery, architectural photography, a decision-tree classification system, and dense analytical text, creating a document that functions simultaneously as a map, a critical essay, and a visual argument about post-Soviet urban identity.",
  },
},
{
  id: "agricultural-land-analysis-georgia",
  title: "Agricultural Land Analysis & Web Mapping",
  client: "ATIS Services · Georgia · Tbilisi",
  year: "2023",
  category: "agriculture",
  img: "",
  alt: "Agricultural land with irrigation and soil analysis",
  overlayColor: "#6B8F71",
  overlayText: "ATIS Services · Georgia · Tbilisi",
description: "Commercial web mapping project for ATIS Services (Georgia, 2023). Delivered an interactive web map on satellite imagery visualising irrigation polygons, tree point objects, and agrochemical soil analysis attributes. The project included terrain, soil and runoff analysis with a written consultation report, and was packaged as a hosted web map with full attribute data and a project archive (HTML, SHP, JPEG).",
  details: {
    location: "Georgia, Tbilisi",
    tools: ["QGIS", "NextGIS", "GIS Cloud", "Python", "Leaflet", "Folium", "Choropleth"],
    context: "Commercial project under NDA. The scope covered three main deliverables: (1) Interactive visualisation of irrigation polygons and tree point objects — a web map built on satellite imagery with polygon attribute data including agrochemical analysis results, delivered as a hosted link and a ZIP archive (HTML, SHP, JPEG, CS files); (2) Terrain, soil and runoff analysis — spatial analysis of relief characteristics, soil properties and runoff volumes based on provided field data, delivered as a PDF/Word report with commentary on each parameter; (3) Cartographic design of all spatial outputs following professional cartographic standards. Tools used: QGIS, NextGIS, Python (Choropleth maps, Leaflet, Folium, PlotlyMap). Additional cloud-based delivery via NextGIS platform.",
},
},


{
  id: "apple-orchard-logistics",
  title: "Orchard Digital Twin — Agricultural Web Platform",
  client: "Agronom-sad · Commercial Project",
  year: "2025",
  category: "agriculture",
  img: "",
  alt: "Apple orchard aerial view",
  overlayColor: "#C4917A",
  overlayText: "Digital Twin · Orchard",
  description: "Commercial full-stack web platform — a Digital Twin of an agricultural enterprise built with React and MapLibre. Delivered as a complete geospatial decision-support system for orchard management, combining spatial data infrastructure with interactive visualisation and user-centred interface design.",
  details: {
    location: "Remote",
    tools: ["React", "MapLibre", "TypeScript", "Python", "Vercel", "Spatial Data Infrastructure", "Cadastral Data Integration"],
    context: "Commercial project under NDA. The platform integrates two interactive map modes: an agronomic map visualising orchard zones by variety and condition with harvest planning by period, and an infrastructure map covering irrigation lines, filtration zones, road networks, and CCTV surveillance cameras. The geodata pipeline included spatial preprocessing of cadastral land registry data, GeoJSON layer integration, attribute filtering, and UI/UX design for map interaction. The platform enables field teams and orchard managers to make spatially-informed operational decisions in real time. Full project details and screenshots available upon request. More information upon request",
  },
},

];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(category: "web-maps" | "printed-maps" | "agriculture" | "storytelling" | "research"): Project[] {
  return projects.filter((p) => p.category === category);
}
