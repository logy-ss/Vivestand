// This page explains one injury. Which one? The Home page tells us in the
// address, like injuries.html?injury=knee

// Everything we know about each injury. The name before each { is what the
// Home page puts in the address.
const INJURIES = {
    shoulder: {
        title: "Shoulder Injury Recovery",
        description: "A comprehensive recovery plan for shoulder injuries to help you regain strength and mobility.",
        symptoms: [
            "Pain and stiffness in the shoulder",
            "Limited range of motion",
            "Weakness in arm movement",
            "Swelling or inflammation",
            "Difficulty lifting objects"
        ],
        recovery: [
            "Week 1-2: Rest and ice. Avoid strenuous activities. Take prescribed anti-inflammatory medication.",
            "Week 3-4: Gentle range of motion exercises. Physical therapy 2-3 times per week.",
            "Week 5-8: Gradually increase strength exercises. Continue physical therapy.",
            "Week 9+: Return to light activities. Full recovery typically takes 8-12 weeks."
        ],
        prevention: [
            "Warm up before exercise",
            "Maintain good posture",
            "Strengthen shoulder muscles regularly",
            "Avoid repetitive overhead movements",
            "Use proper technique during sports"
        ]
    },
    elbow: {
        title: "Elbow Pain Recovery",
        description: "Treatment plan for elbow pain and Tennis/Golfer's elbow injuries.",
        symptoms: [
            "Sharp pain on the outside or inside of elbow",
            "Weak grip strength",
            "Difficulty extending arm",
            "Stiffness and swelling",
            "Pain when lifting or gripping"
        ],
        recovery: [
            "Week 1-2: Rest and apply ice. Use an elbow strap or brace.",
            "Week 3-4: Gentle stretching exercises. Avoid repetitive motions.",
            "Week 5-8: Strengthening exercises with light weights.",
            "Week 9+: Gradual return to normal activities. Recovery: 6-12 weeks."
        ],
        prevention: [
            "Take regular breaks during repetitive tasks",
            "Use ergonomic equipment",
            "Warm up before activity",
            "Strengthen forearm muscles",
            "Avoid sudden jerky movements"
        ]
    },
    wrist: {
        title: "Wrist & Hand Injury Recovery",
        description: "Recovery plan for wrist sprains, strains, and hand injuries.",
        symptoms: [
            "Wrist pain and swelling",
            "Limited wrist movement",
            "Weakness in grip",
            "Bruising around wrist",
            "Numbness or tingling"
        ],
        recovery: [
            "Week 1-2: Immobilize with wrist brace. Apply ice therapy.",
            "Week 3-4: Gentle range of motion exercises. Remove brace for short periods.",
            "Week 5-8: Progressive strengthening exercises.",
            "Week 9+: Return to normal activities. Full recovery: 4-12 weeks."
        ],
        prevention: [
            "Wear protective wrist guards during sports",
            "Stretch wrists daily",
            "Maintain strong forearm muscles",
            "Avoid falling on outstretched hands",
            "Use proper ergonomic positions"
        ]
    },
    collarbone: {
        title: "Collarbone Fracture Recovery",
        description: "Complete recovery guide for collarbone (clavicle) fractures.",
        symptoms: [
            "Severe pain at collarbone",
            "Visible bump or deformity",
            "Swelling and bruising",
            "Limited shoulder movement",
            "Difficulty lifting arm"
        ],
        recovery: [
            "Week 1-2: Immobilize with sling. Take pain medication as prescribed.",
            "Week 3-6: Begin gentle pendulum exercises. Continue sling use.",
            "Week 7-12: Increase range of motion exercises. Remove sling gradually.",
            "Week 13+: Strengthening exercises. Full healing: 8-12 weeks."
        ],
        prevention: [
            "Wear protective gear in contact sports",
            "Improve balance and coordination",
            "Use proper technique in sports",
            "Avoid high-risk activities during injury",
            "Maintain overall fitness"
        ]
    },
    "lower-back": {
        title: "Lower Back Pain Recovery",
        description: "Comprehensive treatment plan for lower back pain and strain injuries.",
        symptoms: [
            "Sharp or dull lower back pain",
            "Muscle stiffness",
            "Limited flexibility",
            "Pain radiating to legs",
            "Difficulty bending or sitting"
        ],
        recovery: [
            "Week 1-2: Rest on firm surface. Apply heat therapy. Take anti-inflammatory medication.",
            "Week 3-4: Gentle stretching and walking. Begin core exercises.",
            "Week 5-8: Progressive strengthening. Physical therapy sessions.",
            "Week 9+: Return to normal activities. Full recovery: 4-12 weeks."
        ],
        prevention: [
            "Maintain proper posture",
            "Lift with legs, not back",
            "Strengthen core muscles",
            "Stretch regularly",
            "Avoid prolonged sitting"
        ]
    },
    abdominal: {
        title: "Abdominal Strain Recovery",
        description: "Recovery plan for abdominal muscle strains and tears.",
        symptoms: [
            "Sharp abdominal pain",
            "Muscle tightness",
            "Weakness in core",
            "Bruising or swelling",
            "Pain during movement"
        ],
        recovery: [
            "Week 1-2: Rest and avoid heavy lifting. Apply ice therapy.",
            "Week 3-4: Gentle core stretches. Avoid twisting movements.",
            "Week 5-8: Progressive core strengthening exercises.",
            "Week 9+: Return to sports. Recovery time: 2-8 weeks."
        ],
        prevention: [
            "Warm up before exercise",
            "Strengthen core regularly",
            "Use proper technique in sports",
            "Increase activity gradually",
            "Maintain flexibility"
        ]
    },
    rib: {
        title: "Rib Injury Recovery",
        description: "Treatment plan for rib fractures, sprains, and injuries.",
        symptoms: [
            "Sharp chest or rib pain",
            "Pain when breathing deeply",
            "Swelling or bruising",
            "Difficulty coughing",
            "Pain during movement"
        ],
        recovery: [
            "Week 1-2: Rest and apply ice. Take pain medication. Avoid heavy lifting.",
            "Week 3-4: Gentle breathing exercises. Avoid strenuous activities.",
            "Week 5-8: Light activity and stretching. Continue breathing exercises.",
            "Week 9+: Return to normal activities. Recovery: 3-8 weeks."
        ],
        prevention: [
            "Wear protective padding in contact sports",
            "Maintain proper posture",
            "Strengthen core muscles",
            "Practice proper breathing techniques",
            "Use safety equipment"
        ]
    },
    knee: {
        title: "Knee Injury Recovery",
        description: "Comprehensive recovery guide for knee injuries and sprains.",
        symptoms: [
            "Knee pain and swelling",
            "Reduced range of motion",
            "Instability or buckling",
            "Stiffness and difficulty walking",
            "Clicking or popping sounds"
        ],
        recovery: [
            "Week 1-2: Rest, ice, compression. Elevate leg. Use knee brace.",
            "Week 3-4: Begin gentle range of motion exercises. Reduce swelling.",
            "Week 5-8: Progressive strengthening exercises. Increase activity.",
            "Week 9+: Return to sports with bracing if needed. Recovery: 4-12 weeks."
        ],
        prevention: [
            "Wear proper footwear",
            "Warm up before exercise",
            "Strengthen leg muscles",
            "Maintain flexibility",
            "Use proper technique in sports"
        ]
    },
    ankle: {
        title: "Ankle Sprain Recovery",
        description: "Complete recovery plan for ankle sprains and ligament injuries.",
        symptoms: [
            "Ankle pain and swelling",
            "Bruising around ankle",
            "Difficulty walking",
            "Reduced range of motion",
            "Instability or giving way"
        ],
        recovery: [
            "Week 1-2: RICE protocol (Rest, Ice, Compression, Elevation). Wear ankle brace.",
            "Week 3-4: Range of motion exercises. Gradual weight bearing.",
            "Week 5-8: Strengthening and balance exercises.",
            "Week 9+: Return to activity. Recovery: 2-12 weeks depending on severity."
        ],
        prevention: [
            "Wear supportive footwear",
            "Strengthen ankle muscles",
            "Improve balance and coordination",
            "Warm up before activities",
            "Avoid uneven surfaces"
        ]
    },
    "stress-fracture": {
        title: "Stress Fracture Recovery",
        description: "Recovery guide for stress fractures in bones.",
        symptoms: [
            "Localized pain in bone",
            "Gradual onset of pain",
            "Swelling in affected area",
            "Pain increases with activity",
            "Pain decreases with rest"
        ],
        recovery: [
            "Week 1-4: Complete rest from impact activities. Protect with brace.",
            "Week 5-8: Gentle exercises. Begin walking as tolerated.",
            "Week 9-12: Gradual return to regular activities.",
            "Week 13+: Full return to sports. Recovery: 6-12 weeks."
        ],
        prevention: [
            "Avoid sudden increase in activity",
            "Increase training gradually",
            "Wear proper athletic shoes",
            "Eat calcium-rich foods",
            "Cross-train to avoid overuse"
        ]
    },
    shin: {
        title: "Shin Splint Recovery",
        description: "Treatment plan for shin splints and tibial stress.",
        symptoms: [
            "Pain along shin bone",
            "Tenderness to touch",
            "Pain during or after running",
            "Mild swelling",
            "Pain that decreases with rest"
        ],
        recovery: [
            "Week 1-2: Rest from running. Apply ice therapy. Wear compression sleeve.",
            "Week 3-4: Light walking. Gentle stretching exercises.",
            "Week 5-8: Gradual return to running. Strengthening exercises.",
            "Week 9+: Full training. Recovery: 3-6 weeks."
        ],
        prevention: [
            "Gradually increase running distance",
            "Wear proper running shoes",
            "Run on soft surfaces",
            "Stretch calves and shins regularly",
            "Strengthen leg muscles"
        ]
    },
    plantar: {
        title: "Plantar Fasciitis Recovery",
        description: "Complete recovery plan for plantar fasciitis foot pain.",
        symptoms: [
            "Heel pain especially in morning",
            "Pain along bottom of foot",
            "Stiffness in arch",
            "Pain after long periods of standing",
            "Increased pain with activity"
        ],
        recovery: [
            "Week 1-2: Rest and ice therapy. Use heel pain relief methods.",
            "Week 3-4: Stretching exercises for calf and plantar fascia.",
            "Week 5-8: Strengthening exercises. Use supportive footwear.",
            "Week 9+: Return to normal activity. Recovery: 3-12 months."
        ],
        prevention: [
            "Perform calf stretches daily",
            "Wear supportive shoes",
            "Maintain healthy weight",
            "Avoid running on hard surfaces",
            "Strengthen arch muscles"
        ]
    },
    hamstring: {
        title: "Hamstring Strain Recovery",
        description: "Recovery plan for hamstring muscle strains and injuries.",
        symptoms: [
            "Sudden sharp pain in back of leg",
            "Muscle stiffness",
            "Swelling in hamstring area",
            "Limited leg movement",
            "Difficulty walking or running"
        ],
        recovery: [
            "Week 1-2: Rest and ice therapy. Avoid stretching. Use compression.",
            "Week 3-4: Gentle range of motion exercises. Gradual stretching.",
            "Week 5-8: Progressive strengthening exercises.",
            "Week 9+: Return to sports. Recovery: 4-12 weeks."
        ],
        prevention: [
            "Warm up thoroughly before exercise",
            "Stretch hamstrings daily",
            "Strengthen hamstring muscles",
            "Increase activity gradually",
            "Use proper form in sports"
        ]
    },
    quadriceps: {
        title: "Quadriceps Strain Recovery",
        description: "Treatment plan for quadriceps muscle strains and tears.",
        symptoms: [
            "Sharp pain in front of thigh",
            "Muscle weakness",
            "Swelling or bruising",
            "Stiffness in leg",
            "Difficulty extending leg"
        ],
        recovery: [
            "Week 1-2: Rest, ice, and compression. Avoid heavy activity.",
            "Week 3-4: Gentle range of motion. Gradual stretching.",
            "Week 5-8: Progressive strengthening exercises.",
            "Week 9+: Return to sports. Recovery: 4-12 weeks."
        ],
        prevention: [
            "Warm up before exercise",
            "Stretch quads and hamstrings",
            "Strengthen leg muscles",
            "Increase training gradually",
            "Use proper technique"
        ]
    },
    tendonitis: {
        title: "Tendonitis Recovery",
        description: "Complete recovery guide for tendonitis inflammation and irritation.",
        symptoms: [
            "Pain and stiffness in tendon area",
            "Mild swelling",
            "Pain during movement",
            "Weakness in affected area",
            "Gradual onset of symptoms"
        ],
        recovery: [
            "Week 1-2: Rest and ice therapy. Reduce activity. Use anti-inflammatory medication.",
            "Week 3-4: Gentle stretching exercises. Avoid repetitive motions.",
            "Week 5-8: Progressive strengthening exercises. Gradual return to activity.",
            "Week 9+: Full return to sport. Recovery: 4-12 weeks."
        ],
        prevention: [
            "Maintain proper form during activities",
            "Strengthen muscles around tendon",
            "Take regular breaks during repetitive tasks",
            "Warm up and cool down properly",
            "Gradually increase training intensity"
        ]
    },
    concussion: {
        title: "Concussion Recovery",
        description: "Treatment and recovery plan for sports-related concussions.",
        symptoms: [
            "Headache",
            "Dizziness or confusion",
            "Memory or concentration problems",
            "Sensitivity to light or noise",
            "Nausea or balance issues"
        ],
        recovery: [
            "Day 1-3: Complete physical and mental rest. Avoid all activities.",
            "Day 4-7: Gradual return to light activities. Continue rest if symptoms persist.",
            "Week 2-3: Light aerobic exercise if symptom-free. No contact sports.",
            "Week 4+: Gradual progression to full activity. Must be cleared by doctor."
        ],
        prevention: [
            "Wear proper protective headgear",
            "Follow sport safety rules",
            "Strengthen neck muscles",
            "Maintain awareness of surroundings",
            "Avoid risky situations"
        ]
    },
    bruise: {
        title: "Bruise & Contusion Recovery",
        description: "Recovery plan for bruises and tissue contusions from sports injuries.",
        symptoms: [
            "Pain and tenderness",
            "Discoloration of skin",
            "Swelling in the area",
            "Stiffness in the affected region",
            "Sensitivity to touch"
        ],
        recovery: [
            "Day 1-2: Apply ice for 15 minutes several times daily. Elevate if possible.",
            "Day 3-7: Continue ice therapy. Switch to heat if swelling reduces.",
            "Week 2-3: Gentle massage and stretching. Gradual return to activity.",
            "Week 4+: Full recovery. Apply heat and gentle exercise as tolerated."
        ],
        prevention: [
            "Wear protective padding during sports",
            "Maintain awareness of surroundings",
            "Use proper protective equipment",
            "Follow sport safety guidelines",
            "Improve coordination and balance"
        ]
    },
    contusion: {
        title: "Contusion (Muscle Bruise) Recovery",
        description: "Treatment plan for muscle contusions and deep tissue bruising.",
        symptoms: [
            "Severe pain at impact site",
            "Noticeable bruising and swelling",
            "Limited movement or mobility",
            "Muscle weakness in area",
            "Pain that worsens over 24 hours"
        ],
        recovery: [
            "Day 1: Apply RICE protocol immediately. Immobilize the area.",
            "Day 2-7: Continue ice therapy. Gradually reduce immobilization.",
            "Week 2-3: Gentle stretching and light movement. Increase activity gradually.",
            "Week 4+: Return to normal activities. Full recovery: 3-6 weeks."
        ],
        prevention: [
            "Wear protective gear and padding",
            "Avoid contact with hard surfaces",
            "Maintain proper technique",
            "Stay aware during activities",
            "Use proper cushioning for impact"
        ]
    },
    dislocation: {
        title: "Dislocation Recovery",
        description: "Recovery guide for joint dislocations and subluxations.",
        symptoms: [
            "Severe pain at joint",
            "Visible deformity",
            "Swelling and bruising",
            "Inability to move joint",
            "Numbness or tingling"
        ],
        recovery: [
            "Immediate: Get medical attention. Do not attempt self-reduction.",
            "Week 1-2: Immobilize with sling or brace. Pain management.",
            "Week 3-6: Begin gentle range of motion. Physical therapy starts.",
            "Week 7+: Progressive strengthening. Recovery varies; consult doctor."
        ],
        prevention: [
            "Strengthen muscles around joints",
            "Improve flexibility and balance",
            "Wear protective devices when needed",
            "Use proper technique in sports",
            "Avoid high-risk movements"
        ]
    },
    acl: {
        title: "ACL (Anterior Cruciate Ligament) Recovery",
        description: "Complete recovery guide for ACL tears and injuries.",
        symptoms: [
            "Sudden sharp pain in knee",
            "Loud popping sound",
            "Knee swelling within hours",
            "Knee instability or giving way",
            "Inability to bear weight"
        ],
        recovery: [
            "Week 1-2: RICE protocol. Medical evaluation. Possible surgery consultation.",
            "Week 3-8: Physical therapy. Controlled range of motion. Strengthening begins.",
            "Month 3-6: Progressive rehabilitation. May return to light activities.",
            "Month 6-12: Full recovery with surgery. Intensive rehabilitation required."
        ],
        prevention: [
            "Strengthen leg and core muscles",
            "Improve balance and proprioception",
            "Wear knee bracing when needed",
            "Use proper landing technique",
            "Avoid sudden pivoting or cutting movements"
        ]
    }
};

// Fill a list on the page (like the symptoms list) with one <li> per line.
function fillList(listId, lines) {
    const list = document.getElementById(listId);
    for (let i = 0; i < lines.length; i++) {
        const item = document.createElement("li");
        item.textContent = lines[i];
        list.appendChild(item);
    }
}

function showInjury() {
    const address = new URLSearchParams(window.location.search);
    const injuryName = address.get("injury");
    const injury = INJURIES[injuryName];

    // Remove the "Loading..." placeholders before we fill anything in.
    document.getElementById("recovery-steps").textContent = "";
    document.getElementById("symptoms-list").textContent = "";
    document.getElementById("prevention-list").textContent = "";

    // Came here without picking an injury, or with a name we don't know.
    if (injury === undefined) {
        document.getElementById("injury-title").textContent = "Injury Not Found";
        document.getElementById("injury-description").textContent = "Please select an injury from the home page.";
        return;
    }

    document.getElementById("injury-title").textContent = injury.title;
    document.getElementById("injury-description").textContent = injury.description;

    // Each recovery week gets its own box.
    const stepsBox = document.getElementById("recovery-steps");
    for (let i = 0; i < injury.recovery.length; i++) {
        const step = document.createElement("div");
        step.className = "recovery-step";
        step.textContent = injury.recovery[i];
        stepsBox.appendChild(step);
    }

    fillList("symptoms-list", injury.symptoms);
    fillList("prevention-list", injury.prevention);
}

showInjury();
