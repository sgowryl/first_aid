import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const data = [
  {
    label: "Item 1",
    value: "AAA screening, see Abdominal aortic aneurysm screening",
  },
  {
    label: "Item 2",
    value: "AAA, see Abdominal aortic aneurysm",
  },
  {
    label: "Item 3",
    value: "Abdominal aortic aneurysm",
  },
  {
    label: "Item 4",
    value: "Abdominal aortic aneurysm screening",
  },
  {
    label: "Item 5",
    value: "Abortion",
  },
  {
    label: "Item 6",
    value: "Acanthosis nigricans",
  },
  {
    label: "Item 7",
    value: "Achalasia",
  },
  {
    label: "Item 8",
    value: "Acid and chemical burns",
  },
  {
    label: "Item 9",
    value: "Acid reflux in babies, see Reflux in babies",
  },
  {
    label: "Item 10",
    value: "Acne",
  },
  {
    label: "Item 11",
    value: "Acoustic neuroma",
  },
  {
    label: "Item 12",
    value: "Acromegaly",
  },
  {
    label: "Item 13",
    value: "Actinic keratoses",
  },
  {
    label: "Item 14",
    value: "Actinomycosis",
  },
  {
    label: "Item 15",
    value: "Acupuncture",
  },
  {
    label: "Item 16",
    value: "Acute cholecystitis",
  },
  {
    label: "Item 17",
    value: "Acute kidney injury",
  },
  {
    label: "Item 18",
    value: "Acute lymphoblastic leukaemia",
  },
  {
    label: "Item 19",
    value: "Acute myeloid leukaemia",
  },
  {
    label: "Item 20",
    value: "Acute pancreatitis",
  },
  {
    label: "Item 21",
    value: "Acute respiratory distress syndrome",
  },
  {
    label: "Item 22",
    value: "Addison's disease",
  },
  {
    label: "Item 23",
    value: "Adenoidectomy",
  },
  {
    label: "Item 24",
    value: "Adenomyosis",
  },
  {
    label: "Item 25",
    value: "Age-related cataracts",
  },
  {
    label: "Item 26",
    value: "Age-related macular degeneration",
  },
  {
    label: "Item 27",
    value: "Agoraphobia",
  },
  {
    label: "Item 28",
    value: "Albinism",
  },
  {
    label: "Item 29",
    value: "Alcohol misuse",
  },
  {
    label: "Item 30",
    value: "Alcohol poisoning",
  },
  {
    label: "Item 31",
    value: "Alcohol-related liver disease",
  },
  {
    label: "Item 32",
    value: "Alexander technique",
  },
  {
    label: "Item 33",
    value: "Alkaptonuria",
  },
  {
    label: "Item 34",
    value: "Allergic rhinitis",
  },
  {
    label: "Item 35",
    value: "Allergies",
  },
  {
    label: "Item 36",
    value: "Altitude sickness",
  },
  {
    label: "Item 37",
    value: "Alzheimer's disease",
  },
  {
    label: "Item 38",
    value: "Amblyopia, see Lazy eye",
  },
  {
    label: "Item 39",
    value: "Amnesia, see Memory loss",
  },
  {
    label: "Item 40",
    value: "Amniocentesis",
  },
  {
    label: "Item 41",
    value: "Amputation",
  },
  {
    label: "Item 42",
    value: "Amyloidosis",
  },
  {
    label: "Item 43",
    value: "Anabolic steroid misuse",
  },
  {
    label: "Item 44",
    value: "Anaemia , see Iron deficiency anaemia",
  },
  {
    label: "Item 45",
    value: "Anaemia , see Vitamin B12 or folate deficiency anaemia",
  },
  {
    label: "Item 46",
    value: "Anaesthesia",
  },
  {
    label: "Item 47",
    value: "Anal cancer",
  },
  {
    label: "Item 48",
    value: "Anal fissure",
  },
  {
    label: "Item 49",
    value: "Anal fistula",
  },
  {
    label: "Item 50",
    value: "Anal pain",
  },
  {
    label: "Item 51",
    value: "Anaphylaxis",
  },
  {
    label: "Item 52",
    value: "Androgen insensitivity syndrome",
  },
  {
    label: "Item 53",
    value: "Aneurysm , see Abdominal aortic aneurysm",
  },
  {
    label: "Item 54",
    value: "Aneurysm , see Brain aneurysm",
  },
  {
    label: "Item 55",
    value: "Angelman syndrome",
  },
  {
    label: "Item 56",
    value: "Angina",
  },
  {
    label: "Item 57",
    value: "Angioedema",
  },
  {
    label: "Item 58",
    value: "Angiography",
  },
  {
    label: "Item 59",
    value: "Angioplasty, see Coronary angioplasty and stent insertion",
  },
  {
    label: "Item 60",
    value: "Animal and human bites",
  },
  {
    label: "Item 61",
    value: "Ankle pain",
  },
  {
    label: "Item 62",
    value: "Ankylosing spondylitis",
  },
  {
    label: "Item 63",
    value: "Anorexia nervosa",
  },
  {
    label: "Item 64",
    value: "Anosmia, see Lost or changed sense of smell",
  },
  {
    label: "Item 65",
    value: "Antacids",
  },
  {
    label: "Item 66",
    value: "Antibiotics",
  },
  {
    label: "Item 67",
    value: "Anticoagulant medicines",
  },
  {
    label: "Item 68",
    value: "Antidepressants",
  },
  {
    label: "Item 69",
    value: "Antifungal medicines",
  },
  {
    label: "Item 70",
    value: "Antihistamines",
  },
  {
    label: "Item 71",
    value: "Antiphospholipid syndrome",
  },
  {
    label: "Item 72",
    value: "Antisocial personality disorder",
  },
  {
    label: "Item 73",
    value: "Anus , see Itchy bottom",
  },
  {
    label: "Item 74",
    value: "Anxiety disorders in children",
  },
  {
    label: "Item 75",
    value: "Aortic valve replacement",
  },
  {
    label: "Item 76",
    value: "Aphasia",
  },
  {
    label: "Item 77",
    value: "Appendicitis",
  },
  {
    label: "Item 78",
    value: "Arrhythmia",
  },
  {
    label: "Item 79",
    value: "Arthritis",
  },
  {
    label: "Item 80",
    value: "Arthroscopy",
  },
  {
    label: "Item 81",
    value: "Asbestosis",
  },
  {
    label: "Item 82",
    value: "Asperger's, see Autism",
  },
  {
    label: "Item 83",
    value: "Aspergillosis",
  },
  {
    label: "Item 84",
    value: "Asthma",
  },
  {
    label: "Item 85",
    value: "Astigmatism",
  },
  {
    label: "Item 86",
    value: "Ataxia",
  },
  {
    label: "Item 87",
    value: "Atherosclerosis",
  },
  {
    label: "Item 88",
    value: "Athlete's foot",
  },
  {
    label: "Item 89",
    value: "Atopic eczema",
  },
  {
    label: "Item 90",
    value: "Atrial fibrillation",
  },
  {
    label: "Item 91",
    value: "Attention deficit hyperactivity disorder",
  },
  {
    label: "Item 92",
    value: "Auditory processing disorder",
  },
  {
    label: "Item 93",
    value: "Autism",
  },
  {
    label: "Item 94",
    value: "Autosomal dominant polycystic kidney disease",
  },
  {
    label: "Item 95",
    value: "Autosomal recessive polycystic kidney disease",
  },
  {
    label: "Item 96",
    value: "Avian flu, see Bird flu",
  },
  {
    label: "Item 97",
    value: "Baby",
  },
  {
    label: "Item 98",
    value: "Back pain",
  },
  {
    label: "Item 99",
    value: "Bacterial vaginosis",
  },
  {
    label: "Item 100",
    value: "Bad breath",
  },
  {
    label: "Item 101",
    value: "Baker's cyst",
  },
  {
    label: "Item 102",
    value: "Balanitis",
  },
  {
    label: "Item 103",
    value: "Barium enema",
  },
  {
    label: "Item 104",
    value: "Bartholin's cyst",
  },
  {
    label: "Item 105",
    value: "BCG vaccine for tuberculosis",
  },
  {
    label: "Item 106",
    value: "Bedbugs",
  },
  {
    label: "Item 107",
    value: "Bedwetting in children",
  },
  {
    label: "Item 108",
    value: "Behçet's disease",
  },
  {
    label: "Item 109",
    value: "Being sick, see Diarrhoea and vomiting",
  },
  {
    label: "Item 110",
    value: "Bell's palsy",
  },
  {
    label: "Item 111",
    value: "Benign brain tumour",
  },
  {
    label: "Item 112",
    value: "Benign prostate enlargement",
  },
  {
    label: "Item 113",
    value: "Beta blockers",
  },
  {
    label: "Item 114",
    value: "Bile duct cancer",
  },
  {
    label: "Item 115",
    value: "Bilharzia, see Schistosomiasis",
  },
  {
    label: "Item 116",
    value: "Binge eating disorder",
  },
  {
    label: "Item 117",
    value: "Biopsy",
  },
  {
    label: "Item 118",
    value: "Bipolar disorder",
  },
  {
    label: "Item 119",
    value: "Bird flu",
  },
  {
    label: "Item 120",
    value: "Birthmarks",
  },
  {
    label: "Item 121",
    value: "Bite , see Animal and human bites",
  },
  {
    label: "Item 122",
    value: "Black eye",
  },
  {
    label: "Item 123",
    value: "Bladder cancer",
  },
  {
    label: "Item 124",
    value: "Bladder pain syndrome",
  },
  {
    label: "Item 125",
    value: "Bladder stones",
  },
  {
    label: "Item 126",
    value: "Bleeding after the menopause, see Postmenopausal bleeding",
  },
  {
    label: "Item 127",
    value: "Bleeding from the bottom",
  },
  {
    label: "Item 128",
    value: "Blepharitis",
  },
  {
    label: "Item 129",
    value: "Blindness and vision loss",
  },
  {
    label: "Item 130",
    value: "Blisters",
  },
  {
    label: "Item 131",
    value: "Bloating",
  },
  {
    label: "Item 132",
    value: "Blood clots",
  },
  {
    label: "Item 133",
    value: "Blood groups",
  },
  {
    label: "Item 134",
    value: "Blood in semen",
  },
  {
    label: "Item 135",
    value: "Blood in urine",
  },
  {
    label: "Item 136",
    value: "Blood poisoning, see Sepsis",
  },
  {
    label: "Item 137",
    value: "Blood pressure , see High blood pressure (hypertension)",
  },
  {
    label: "Item 138",
    value: "Blood pressure , see Low blood pressure (hypotension)",
  },
  {
    label: "Item 139",
    value: "Blood pressure test",
  },
  {
    label: "Item 140",
    value: "Blood tests",
  },
  {
    label: "Item 141",
    value: "Blood transfusion",
  },
  {
    label: "Item 142",
    value: "Blue or grey skin or lips",
  },
  {
    label: "Item 143",
    value: "Blushing",
  },
  {
    label: "Item 144",
    value: "Body dysmorphic disorder",
  },
  {
    label: "Item 145",
    value: "Body odour",
  },
  {
    label: "Item 146",
    value: "Boils",
  },
  {
    label: "Item 147",
    value: "Bone cancer",
  },
  {
    label: "Item 148",
    value: "Bone cyst",
  },
  {
    label: "Item 149",
    value: "Bone density scan",
  },
  {
    label: "Item 150",
    value: "Borderline personality disorder",
  },
  {
    label: "Item 151",
    value: "Botulism",
  },
  {
    label: "Item 152",
    value: "Bowel cancer",
  },
  {
    label: "Item 153",
    value: "Bowel cancer screening",
  },
  {
    label: "Item 154",
    value: "Bowel incontinence",
  },
  {
    label: "Item 155",
    value: "Bowel polyps",
  },
  {
    label: "Item 156",
    value: "Bowen's disease",
  },
  {
    label: "Item 157",
    value: "Braces and orthodontics",
  },
  {
    label: "Item 158",
    value:
      "Brachycephaly and plagiocephaly, see Plagiocephaly and brachycephaly",
  },
  {
    label: "Item 159",
    value: "Brain abscess",
  },
  {
    label: "Item 160",
    value: "Brain aneurysm",
  },
  {
    label: "Item 161",
    value: "Brain death",
  },
  {
    label: "Item 162",
    value: "Brain haemorrhage, see Subarachnoid haemorrhage",
  },
  {
    label: "Item 163",
    value: "Brain tumour , see Benign brain tumour (non-cancerous)",
  },
  {
    label: "Item 164",
    value: "Brain tumour , see Malignant brain tumour (brain cancer)",
  },
  {
    label: "Item 165",
    value: "Brain tumours",
  },
  {
    label: "Item 166",
    value: "Breast abscess",
  },
  {
    label: "Item 167",
    value: "Breast cancer in men",
  },
  {
    label: "Item 168",
    value: "Breast cancer in women",
  },
  {
    label: "Item 169",
    value: "Breast lumps",
  },
  {
    label: "Item 170",
    value: "Breast pain",
  },
  {
    label: "Item 171",
    value: "Breast reduction on the NHS",
  },
  {
    label: "Item 172",
    value: "Breast screening",
  },
  {
    label: "Item 173",
    value: "Breath-holding in babies and children",
  },
  {
    label: "Item 174",
    value: "Broken ankle",
  },
  {
    label: "Item 175",
    value: "Broken arm or wrist",
  },
  {
    label: "Item 176",
    value: "Broken collarbone",
  },
  {
    label: "Item 177",
    value: "Broken finger or thumb",
  },
  {
    label: "Item 178",
    value: "Broken hip",
  },
  {
    label: "Item 179",
    value: "Broken leg",
  },
  {
    label: "Item 180",
    value: "Broken nose",
  },
  {
    label: "Item 181",
    value: "Broken or bruised ribs",
  },
  {
    label: "Item 182",
    value: "Broken toe",
  },
  {
    label: "Item 183",
    value: "Bronchiectasis",
  },
  {
    label: "Item 184",
    value: "Bronchiolitis",
  },
  {
    label: "Item 185",
    value: "Bronchitis",
  },
  {
    label: "Item 186",
    value: "Bronchodilators",
  },
  {
    label: "Item 187",
    value: "Brucellosis",
  },
  {
    label: "Item 188",
    value: "Brugada syndrome",
  },
  {
    label: "Item 189",
    value: "Bruxism, see Teeth grinding",
  },
  {
    label: "Item 190",
    value: "Bulging eyes",
  },
  {
    label: "Item 191",
    value: "Bulimia",
  },
  {
    label: "Item 192",
    value: "Bullous pemphigoid",
  },
  {
    label: "Item 193",
    value: "Bunions",
  },
  {
    label: "Item 194",
    value: "Burns and scalds",
  },
  {
    label: "Item 195",
    value: "Bursitis",
  },
  {
    label: "Item 196",
    value: "Buttock pain, see Sciatica",
  },
  {
    label: "Item 197",
    value: "CABG, see Coronary artery bypass graft",
  },
  {
    label: "Item 198",
    value: "Caesarean section",
  },
  {
    label: "Item 199",
    value: "Cancer",
  },
  {
    label: "Item 200",
    value: "Cannabis oil , see Medical cannabis (and cannabis oils)",
  },
  {
    label: "Item 201",
    value: "Carbon monoxide poisoning",
  },
  {
    label: "Item 202",
    value: "Carcinoembryonic antigen  test",
  },
  {
    label: "Item 203",
    value: "Cardiac catheterisation and coronary angiography",
  },
  {
    label: "Item 204",
    value: "Cardiomyopathy",
  },
  {
    label: "Item 205",
    value: "Cardiovascular disease",
  },
  {
    label: "Item 206",
    value: "Carotid endarterectomy",
  },
  {
    label: "Item 207",
    value: "Carpal tunnel syndrome",
  },
  {
    label: "Item 208",
    value: "Cat bites, see Animal and human bites",
  },
  {
    label: "Item 209",
    value: "Cataract surgery",
  },
  {
    label: "Item 210",
    value: "Cataracts , see Age-related cataracts",
  },
  {
    label: "Item 211",
    value: "Cataracts , see Childhood cataracts",
  },
  {
    label: "Item 212",
    value: "Catarrh",
  },
  {
    label: "Item 213",
    value: "Cavernoma",
  },
  {
    label: "Item 214",
    value: "Cavernous sinus thrombosis",
  },
  {
    label: "Item 215",
    value: "Cellulitis",
  },
  {
    label: "Item 216",
    value: "Cerebral palsy",
  },
  {
    label: "Item 217",
    value: "Cervical cancer",
  },
  {
    label: "Item 218",
    value: "Cervical screening",
  },
  {
    label: "Item 219",
    value: "Cervical spondylosis",
  },
  {
    label: "Item 220",
    value: "Charcot-Marie-Tooth disease",
  },
  {
    label: "Item 221",
    value: "Charles Bonnet syndrome",
  },
  {
    label: "Item 222",
    value: "Chemotherapy",
  },
  {
    label: "Item 223",
    value: "Chest infection",
  },
  {
    label: "Item 224",
    value: "Chest pain",
  },
  {
    label: "Item 225",
    value: "Chiari malformation",
  },
  {
    label: "Item 226",
    value: "Chickenpox",
  },
  {
    label: "Item 227",
    value: "Chickenpox vaccine",
  },
  {
    label: "Item 228",
    value: "Chilblains",
  },
  {
    label: "Item 229",
    value: "Childhood cataracts",
  },
  {
    label: "Item 230",
    value: "Children's flu vaccine",
  },
  {
    label: "Item 231",
    value: "Chipped, broken or cracked tooth",
  },
  {
    label: "Item 232",
    value: "Chiropractic",
  },
  {
    label: "Item 233",
    value: "Chlamydia",
  },
  {
    label: "Item 234",
    value: "Cholecystitis , see Acute cholecystitis",
  },
  {
    label: "Item 235",
    value: "Cholera",
  },
  {
    label: "Item 236",
    value: "Cholesteatoma",
  },
  {
    label: "Item 237",
    value: "Cholesterol , see High cholesterol",
  },
  {
    label: "Item 238",
    value: "Chorionic villus sampling",
  },
  {
    label: "Item 239",
    value:
      "Chronic fatigue syndrome , see Myalgic encephalomyelitis or chronic fatigue syndrome (ME/CFS)",
  },
  {
    label: "Item 240",
    value: "Chronic kidney disease",
  },
  {
    label: "Item 241",
    value: "Chronic lymphocytic leukaemia",
  },
  {
    label: "Item 242",
    value: "Chronic myeloid leukaemia",
  },
  {
    label: "Item 243",
    value: "Chronic obstructive pulmonary disease",
  },
  {
    label: "Item 244",
    value: "Chronic pancreatitis",
  },
  {
    label: "Item 245",
    value: "Chronic traumatic encephalopathy",
  },
  {
    label: "Item 246",
    value: "Circumcision in boys",
  },
  {
    label: "Item 247",
    value: "Circumcision in men",
  },
  {
    label: "Item 248",
    value: "Cirrhosis",
  },
  {
    label: "Item 249",
    value: "CJD, see Creutzfeldt-Jakob disease",
  },
  {
    label: "Item 250",
    value: "Claustrophobia",
  },
  {
    label: "Item 251",
    value: "Cleft lip and palate",
  },
  {
    label: "Item 252",
    value: "Clinical trials",
  },
  {
    label: "Item 253",
    value: "Clostridium difficile  infection",
  },
  {
    label: "Item 254",
    value: "Club foot",
  },
  {
    label: "Item 255",
    value: "Cluster headaches",
  },
  {
    label: "Item 256",
    value: "Coccyx pain, see Tailbone  pain",
  },
  {
    label: "Item 257",
    value: "Coeliac disease",
  },
  {
    label: "Item 258",
    value: "Cognitive behavioural therapy",
  },
  {
    label: "Item 259",
    value: "Cold sores",
  },
  {
    label: "Item 260",
    value: "Colic",
  },
  {
    label: "Item 261",
    value: "Colon cancer, see Bowel cancer",
  },
  {
    label: "Item 262",
    value: "Colonoscopy",
  },
  {
    label: "Item 263",
    value: "Colostomy",
  },
  {
    label: "Item 264",
    value: "Colour blindness, see Colour vision deficiency",
  },
  {
    label: "Item 265",
    value: "Colour vision deficiency",
  },
  {
    label: "Item 266",
    value: "Colposcopy",
  },
  {
    label: "Item 267",
    value: "Coma",
  },
  {
    label: "Item 268",
    value: "Combined pill",
  },
  {
    label: "Item 269",
    value: "Common cold",
  },
  {
    label: "Item 270",
    value: "Compartment syndrome",
  },
  {
    label: "Item 271",
    value: "Complementary and alternative medicine",
  },
  {
    label: "Item 272",
    value: "Complex regional pain syndrome",
  },
  {
    label: "Item 273",
    value: "Concussion, see Head injury and concussion",
  },
  {
    label: "Item 274",
    value: "Condoms",
  },
  {
    label: "Item 275",
    value: "Confusion , see Sudden confusion (delirium)",
  },
  {
    label: "Item 276",
    value: "Congenital heart disease",
  },
  {
    label: "Item 277",
    value: "Congenital hip dislocation, see Developmental dysplasia of the hip",
  },
  {
    label: "Item 278",
    value: "Conjunctivitis",
  },
  {
    label: "Item 279",
    value: "Consent to treatment",
  },
  {
    label: "Item 280",
    value: "Constipation",
  },
  {
    label: "Item 281",
    value: "Contact dermatitis",
  },
  {
    label: "Item 282",
    value: "Contraception",
  },
  {
    label: "Item 283",
    value: "Contraceptive implant",
  },
  {
    label: "Item 284",
    value: "Contraceptive injection",
  },
  {
    label: "Item 285",
    value: "Contraceptive patch",
  },
  {
    label: "Item 286",
    value: "Cornea transplant",
  },
  {
    label: "Item 287",
    value: "Corns and calluses",
  },
  {
    label: "Item 288",
    value: "Coronary angioplasty and stent insertion",
  },
  {
    label: "Item 289",
    value: "Coronary artery bypass graft",
  },
  {
    label: "Item 290",
    value: "Coronary heart disease",
  },
  {
    label: "Item 291",
    value: "Coronavirus, see COVID-19",
  },
  {
    label: "Item 292",
    value: "Corticobasal degeneration",
  },
  {
    label: "Item 293",
    value: "Corticosteroid cream, see Topical corticosteroids",
  },
  {
    label: "Item 294",
    value: "Corticosteroids, see Steroids",
  },
  {
    label: "Item 295",
    value: "Cosmetic procedures",
  },
  {
    label: "Item 296",
    value: "Costochondritis",
  },
  {
    label: "Item 297",
    value: "Cough",
  },
  {
    label: "Item 298",
    value: "Coughing up blood",
  },
  {
    label: "Item 299",
    value: "Counselling",
  },
  {
    label: "Item 300",
    value: "COVID-19",
  },
  {
    label: "Item 301",
    value: "Cradle cap",
  },
  {
    label: "Item 302",
    value: "Craniosynostosis",
  },
  {
    label: "Item 303",
    value: "Creutzfeldt-Jakob disease",
  },
  {
    label: "Item 304",
    value: "Crohn's disease",
  },
  {
    label: "Item 305",
    value: "Croup",
  },
  {
    label: "Item 306",
    value: "CT scan",
  },
  {
    label: "Item 307",
    value: "Cushing's syndrome",
  },
  {
    label: "Item 308",
    value: "Cuts and grazes",
  },
  {
    label: "Item 309",
    value: "Cyanosis, see Blue or grey skin or lips",
  },
  {
    label: "Item 310",
    value: "Cyclical vomiting syndrome",
  },
  {
    label: "Item 311",
    value: "Cyclospora",
  },
  {
    label: "Item 312",
    value: "Cystic fibrosis",
  },
  {
    label: "Item 313",
    value: "Cystitis",
  },
  {
    label: "Item 314",
    value: "Cystoscopy",
  },
  {
    label: "Item 315",
    value: "Cytomegalovirus",
  },
  {
    label: "Item 316",
    value: "Dandruff",
  },
  {
    label: "Item 317",
    value: "Deafblindness",
  },
  {
    label: "Item 318",
    value: "Deafness, see Hearing loss",
  },
  {
    label: "Item 319",
    value: "Decongestants",
  },
  {
    label: "Item 320",
    value: "Dehydration",
  },
  {
    label: "Item 321",
    value: "Delirium, see Sudden confusion",
  },
  {
    label: "Item 322",
    value: "Dementia , see Frontotemporal dementia",
  },
  {
    label: "Item 323",
    value: "Dementia , see Vascular dementia",
  },
  {
    label: "Item 324",
    value: "Dementia with Lewy bodies",
  },
  {
    label: "Item 325",
    value: "Dengue",
  },
  {
    label: "Item 326",
    value: "Dental abscess",
  },
  {
    label: "Item 327",
    value: "Dental pain, see Toothache",
  },
  {
    label: "Item 328",
    value: "Dentures",
  },
  {
    label: "Item 329",
    value: "Depression",
  },
  {
    label: "Item 330",
    value: "Depression in adults",
  },
  {
    label: "Item 331",
    value: "Detached retina",
  },
  {
    label: "Item 332",
    value: "Developmental co-ordination disorder  in children",
  },
  {
    label: "Item 333",
    value: "Developmental dysplasia of the hip",
  },
  {
    label: "Item 334",
    value: "DEXA scan, see Bone density scan",
  },
  {
    label: "Item 335",
    value: "Diabetes",
  },
  {
    label: "Item 336",
    value: "Diabetes , see Type 1 diabetes",
  },
  {
    label: "Item 337",
    value: "Diabetes , see Type 2 diabetes",
  },
  {
    label: "Item 338",
    value: "Diabetes in pregnancy, see Gestational diabetes",
  },
  {
    label: "Item 339",
    value: "Diabetes insipidus",
  },
  {
    label: "Item 340",
    value: "Diabetic eye screening",
  },
  {
    label: "Item 341",
    value: "Diabetic ketoacidosis",
  },
  {
    label: "Item 342",
    value: "Diabetic retinopathy",
  },
  {
    label: "Item 343",
    value: "Dialysis",
  },
  {
    label: "Item 344",
    value: "Diaphragm or cap",
  },
  {
    label: "Item 345",
    value: "Diarrhoea and vomiting",
  },
  {
    label: "Item 346",
    value: "Diarrhoea, see Diarrhoea and vomiting",
  },
  {
    label: "Item 347",
    value: "Differences in sex development",
  },
  {
    label: "Item 348",
    value: "DiGeorge syndrome",
  },
  {
    label: "Item 349",
    value: "Diphtheria",
  },
  {
    label: "Item 350",
    value: "Discoid eczema",
  },
  {
    label: "Item 351",
    value: "Dislocated kneecap",
  },
  {
    label: "Item 352",
    value: "Dislocated shoulder",
  },
  {
    label: "Item 353",
    value: "Disorders of consciousness",
  },
  {
    label: "Item 354",
    value: "Dissociative disorders",
  },
  {
    label: "Item 355",
    value: "Diverticular disease and diverticulitis",
  },
  {
    label: "Item 356",
    value: "Dizziness",
  },
  {
    label: "Item 357",
    value: "Do not attempt cardiopulmonary resuscitation  decisions",
  },
  {
    label: "Item 358",
    value: "Dog bites, see Animal and human bites",
  },
  {
    label: "Item 359",
    value: "Double vision",
  },
  {
    label: "Item 360",
    value: "Down's syndrome",
  },
  {
    label: "Item 361",
    value: "Dry eyes",
  },
  {
    label: "Item 362",
    value: "Dry lips, see Sore or dry lips",
  },
  {
    label: "Item 363",
    value: "Dry mouth",
  },
  {
    label: "Item 364",
    value: "Dupuytren's contracture",
  },
  {
    label: "Item 365",
    value: "DVT",
  },
  {
    label: "Item 366",
    value: "Dwarfism, see Restricted growth",
  },
  {
    label: "Item 367",
    value: "Dysarthria",
  },
  {
    label: "Item 368",
    value: "Dysentery",
  },
  {
    label: "Item 369",
    value: "Dyslexia",
  },
  {
    label: "Item 370",
    value: "Dysphagia",
  },
  {
    label: "Item 371",
    value: "Dyspraxia  in adults",
  },
  {
    label: "Item 372",
    value:
      "Dyspraxia in children, see Developmental co-ordination disorder  in children",
  },
  {
    label: "Item 373",
    value: "Dystonia",
  },
  {
    label: "Item 374",
    value: "Ear infections",
  },
  {
    label: "Item 375",
    value: "Earache",
  },
  {
    label: "Item 376",
    value: "Eardrum , see Perforated eardrum",
  },
  {
    label: "Item 377",
    value: "Early menopause",
  },
  {
    label: "Item 378",
    value: "Early or delayed puberty",
  },
  {
    label: "Item 379",
    value: "Earwax build-up",
  },
  {
    label: "Item 380",
    value: "Eating disorders",
  },
  {
    label: "Item 381",
    value: "Ebola virus disease",
  },
  {
    label: "Item 382",
    value: "Echocardiogram",
  },
  {
    label: "Item 383",
    value: "Ectopic beats, see Heart palpitations",
  },
  {
    label: "Item 384",
    value: "Ectopic pregnancy",
  },
  {
    label: "Item 385",
    value: "Ectropion",
  },
  {
    label: "Item 386",
    value: "Eczema , see Atopic eczema",
  },
  {
    label: "Item 387",
    value: "Eczema , see Contact dermatitis",
  },
  {
    label: "Item 388",
    value: "Eczema , see Discoid eczema",
  },
  {
    label: "Item 389",
    value: "Eczema , see Varicose eczema",
  },
  {
    label: "Item 390",
    value: "Edwards' syndrome",
  },
  {
    label: "Item 391",
    value: "Ehlers-Danlos syndromes",
  },
  {
    label: "Item 392",
    value: "Ejaculation problems",
  },
  {
    label: "Item 393",
    value: "Elbow and arm pain",
  },
  {
    label: "Item 394",
    value: "Electrocardiogram",
  },
  {
    label: "Item 395",
    value: "Electroencephalogram",
  },
  {
    label: "Item 396",
    value: "Electrolyte test",
  },
  {
    label: "Item 397",
    value: "Emergency contraceptive pill",
  },
  {
    label: "Item 398",
    value: "Emollients",
  },
  {
    label: "Item 399",
    value: "Empyema",
  },
  {
    label: "Item 400",
    value: "Encephalitis",
  },
  {
    label: "Item 401",
    value: "Endocarditis",
  },
  {
    label: "Item 402",
    value: "Endometrial cancer, see Womb  cancer",
  },
  {
    label: "Item 403",
    value: "Endometriosis",
  },
  {
    label: "Item 404",
    value: "Endoscopy",
  },
  {
    label: "Item 405",
    value: "Enhanced recovery",
  },
  {
    label: "Item 406",
    value: "Epidermolysis bullosa",
  },
  {
    label: "Item 407",
    value: "Epididymitis",
  },
  {
    label: "Item 408",
    value: "Epidural",
  },
  {
    label: "Item 409",
    value: "Epiglottitis",
  },
  {
    label: "Item 410",
    value: "Epilepsy",
  },
  {
    label: "Item 411",
    value: "Erectile dysfunction",
  },
  {
    label: "Item 412",
    value: "Erythema multiforme",
  },
  {
    label: "Item 413",
    value: "Erythema nodosum",
  },
  {
    label: "Item 414",
    value: "Erythrocytosis",
  },
  {
    label: "Item 415",
    value: "Erythromelalgia",
  },
  {
    label: "Item 416",
    value: "Essential tremor, see Tremor or shaking hands",
  },
  {
    label: "Item 417",
    value: "Euthanasia and assisted suicide",
  },
  {
    label: "Item 418",
    value: "Excessive daytime sleepiness",
  },
  {
    label: "Item 419",
    value: "Excessive hair growth",
  },
  {
    label: "Item 420",
    value: "Excessive sweating",
  },
  {
    label: "Item 421",
    value: "Excessive thirst",
  },
  {
    label: "Item 422",
    value: "Eye cancer",
  },
  {
    label: "Item 423",
    value: "Eye cancer in children, see Retinoblastoma",
  },
  {
    label: "Item 424",
    value: "Eye flashes, see Floaters and flashes in the eyes",
  },
  {
    label: "Item 425",
    value: "Eye floaters, see Floaters and flashes in the eyes",
  },
  {
    label: "Item 426",
    value: "Eye infection , see Herpes simplex eye infections",
  },
  {
    label: "Item 427",
    value: "Eye injuries",
  },
  {
    label: "Item 428",
    value: "Eye tests for children",
  },
  {
    label: "Item 429",
    value: "Eyelid problems",
  },
  {
    label: "Item 430",
    value: "Fabricated or induced illness",
  },
  {
    label: "Item 431",
    value: "Face blindness, see Prosopagnosia",
  },
  {
    label: "Item 432",
    value: "Fainting",
  },
  {
    label: "Item 433",
    value: "Falls",
  },
  {
    label: "Item 434",
    value: "Farting",
  },
  {
    label: "Item 435",
    value: "Febrile seizures",
  },
  {
    label: "Item 436",
    value: "Feeling sick",
  },
  {
    label: "Item 437",
    value: "Female genital mutilation",
  },
  {
    label: "Item 438",
    value: "Female sterilisation",
  },
  {
    label: "Item 439",
    value: "Femoral hernia repair",
  },
  {
    label: "Item 440",
    value: "Fever in adults, see High temperature  in adults",
  },
  {
    label: "Item 441",
    value: "Fever in children, see High temperature  in children",
  },
  {
    label: "Item 442",
    value: "Fibroids",
  },
  {
    label: "Item 443",
    value: "Fibromyalgia",
  },
  {
    label: "Item 444",
    value: "Finger pain",
  },
  {
    label: "Item 445",
    value: "First aid",
  },
  {
    label: "Item 446",
    value: "Fits , see Febrile seizures",
  },
  {
    label: "Item 447",
    value: "Fits , see What to do if someone has a seizure (fit)",
  },
  {
    label: "Item 448",
    value: "Flat feet",
  },
  {
    label: "Item 449",
    value: "Flat head syndrome, see Plagiocephaly and brachycephaly",
  },
  {
    label: "Item 450",
    value: "Flatulence, see Farting",
  },
  {
    label: "Item 451",
    value: "Floaters and flashes in the eyes",
  },
  {
    label: "Item 452",
    value: "Flu",
  },
  {
    label: "Item 453",
    value: "Flu vaccine",
  },
  {
    label: "Item 454",
    value: "Fluoride",
  },
  {
    label: "Item 455",
    value: "Foetal alcohol spectrum disorder",
  },
  {
    label: "Item 456",
    value: "Food allergy",
  },
  {
    label: "Item 457",
    value: "Food colours and hyperactivity",
  },
  {
    label: "Item 458",
    value: "Food intolerance",
  },
  {
    label: "Item 459",
    value: "Food poisoning",
  },
  {
    label: "Item 460",
    value: "Foot drop",
  },
  {
    label: "Item 461",
    value: "Foot pain",
  },
  {
    label: "Item 462",
    value: "Foreskin problems, see Tight foreskin",
  },
  {
    label: "Item 463",
    value: "Frontotemporal dementia",
  },
  {
    label: "Item 464",
    value: "Frostbite",
  },
  {
    label: "Item 465",
    value: "Frozen shoulder",
  },
  {
    label: "Item 466",
    value:
      "Functional neurological disorder, see Medically unexplained symptoms",
  },
  {
    label: "Item 467",
    value: "Fungal nail infection",
  },
  {
    label: "Item 468",
    value: "G",
  },
  {
    label: "Item 469",
    value: "Gallbladder cancer",
  },
  {
    label: "Item 470",
    value: "Gallbladder pain, see Acute cholecystitis",
  },
  {
    label: "Item 471",
    value: "Gallbladder removal",
  },
  {
    label: "Item 472",
    value: "Gallstones",
  },
  {
    label: "Item 473",
    value: "Ganglion cyst",
  },
  {
    label: "Item 474",
    value: "Gangrene",
  },
  {
    label: "Item 475",
    value: "Gastrectomy",
  },
  {
    label: "Item 476",
    value: "Gastritis",
  },
  {
    label: "Item 477",
    value: "Gastro-oesophageal reflux disease , see Heartburn and acid reflux",
  },
  {
    label: "Item 478",
    value: "Gastroenteritis, see Diarrhoea and vomiting",
  },
  {
    label: "Item 479",
    value: "Gastroparesis",
  },
  {
    label: "Item 480",
    value: "Gastroscopy",
  },
  {
    label: "Item 481",
    value: "Gender dysphoria",
  },
  {
    label: "Item 482",
    value: "General anaesthesia",
  },
  {
    label: "Item 483",
    value: "Generalised anxiety disorder in adults",
  },
  {
    label: "Item 484",
    value: "Genetic and genomic testing",
  },
  {
    label: "Item 485",
    value:
      "Genetic test for cancer gene, see Predictive genetic tests for cancer risk genes",
  },
  {
    label: "Item 486",
    value: "Genital herpes",
  },
  {
    label: "Item 487",
    value: "Genital warts",
  },
  {
    label: "Item 488",
    value: "German measles, see Rubella",
  },
  {
    label: "Item 489",
    value: "Gestational diabetes",
  },
  {
    label: "Item 490",
    value: "Giant cell arteritis, see Temporal arteritis",
  },
  {
    label: "Item 491",
    value: "Giardiasis",
  },
  {
    label: "Item 492",
    value: "Gigantism, see Acromegaly",
  },
  {
    label: "Item 493",
    value: "Gilbert's syndrome",
  },
  {
    label: "Item 494",
    value: "Glandular fever",
  },
  {
    label: "Item 495",
    value: "Glaucoma",
  },
  {
    label: "Item 496",
    value: "Glomerulonephritis",
  },
  {
    label: "Item 497",
    value: "Glue ear",
  },
  {
    label: "Item 498",
    value: "Glutaric aciduria type 1",
  },
  {
    label: "Item 499",
    value: "Goitre",
  },
  {
    label: "Item 500",
    value: "Gonorrhoea",
  },
  {
    label: "Item 501",
    value: "Gout",
  },
  {
    label: "Item 502",
    value: "Granuloma annulare",
  },
  {
    label: "Item 503",
    value: "Granulomatosis with polyangiitis",
  },
  {
    label: "Item 504",
    value: "Group B strep",
  },
  {
    label: "Item 505",
    value: "Growing pains",
  },
  {
    label: "Item 506",
    value: "Guillain-Barré syndrome",
  },
  {
    label: "Item 507",
    value: "Gum disease",
  },
  {
    label: "Item 508",
    value: "H",
  },
  {
    label: "Item 509",
    value: "Haemochromatosis",
  },
  {
    label: "Item 510",
    value: "Haemophilia",
  },
  {
    label: "Item 511",
    value: "Haemophilus influenzae type b",
  },
  {
    label: "Item 512",
    value: "Haemorrhoids, see Piles",
  },
  {
    label: "Item 513",
    value: "Hair dye reactions",
  },
  {
    label: "Item 514",
    value: "Hair loss",
  },
  {
    label: "Item 515",
    value: "Halitosis, see Bad breath",
  },
  {
    label: "Item 516",
    value: "Hallucinations and hearing voices",
  },
  {
    label: "Item 517",
    value: "Hamstring injury",
  },
  {
    label: "Item 518",
    value: "Hand pain",
  },
  {
    label: "Item 519",
    value: "Hand tendon repair",
  },
  {
    label: "Item 520",
    value: "Hand, foot and mouth disease",
  },
  {
    label: "Item 521",
    value: "Having an operation",
  },
  {
    label: "Item 522",
    value: "Hay fever",
  },
  {
    label: "Item 523",
    value: "Head and neck cancer",
  },
  {
    label: "Item 524",
    value: "Head injury and concussion",
  },
  {
    label: "Item 525",
    value: "Head lice and nits",
  },
  {
    label: "Item 526",
    value: "Headaches",
  },
  {
    label: "Item 527",
    value: "Headaches , see Hormone headaches",
  },
  {
    label: "Item 528",
    value: "Headaches , see Tension headaches",
  },
  {
    label: "Item 529",
    value: "Health anxiety",
  },
  {
    label: "Item 530",
    value: "Hearing aids and implants",
  },
  {
    label: "Item 531",
    value: "Hearing loss",
  },
  {
    label: "Item 532",
    value: "Hearing tests",
  },
  {
    label: "Item 533",
    value: "Hearing tests for children",
  },
  {
    label: "Item 534",
    value: "Hearing voices, see Hallucinations and hearing voices",
  },
  {
    label: "Item 535",
    value: "Heart attack",
  },
  {
    label: "Item 536",
    value: "Heart block",
  },
  {
    label: "Item 537",
    value: "Heart bypass, see Coronary artery bypass graft",
  },
  {
    label: "Item 538",
    value: "Heart disease , see Coronary heart disease",
  },
  {
    label: "Item 539",
    value: "Heart failure",
  },
  {
    label: "Item 540",
    value: "Heart pain, see Chest pain",
  },
  {
    label: "Item 541",
    value: "Heart palpitations",
  },
  {
    label: "Item 542",
    value: "Heart rhythm problems, see Arrhythmia",
  },
  {
    label: "Item 543",
    value: "Heart valve problems, see Mitral valve problems",
  },
  {
    label: "Item 544",
    value: "Heart valve replacement, see Aortic valve replacement",
  },
  {
    label: "Item 545",
    value: "Heartburn and acid reflux",
  },
  {
    label: "Item 546",
    value: "Heat exhaustion and heatstroke",
  },
  {
    label: "Item 547",
    value: "Heat rash",
  },
  {
    label: "Item 548",
    value: "Heavy periods",
  },
  {
    label: "Item 549",
    value: "Heel pain",
  },
  {
    label: "Item 550",
    value: "Help for suicidal thoughts",
  },
  {
    label: "Item 551",
    value: "Henoch-Schönlein purpura",
  },
  {
    label: "Item 552",
    value: "Hepatitis",
  },
  {
    label: "Item 553",
    value: "Hepatitis A",
  },
  {
    label: "Item 554",
    value: "Hepatitis B",
  },
  {
    label: "Item 555",
    value: "Hepatitis B vaccine",
  },
  {
    label: "Item 556",
    value: "Hepatitis C",
  },
  {
    label: "Item 557",
    value: "Herbal medicines",
  },
  {
    label: "Item 558",
    value: "Hereditary haemorrhagic telangiectasia",
  },
  {
    label: "Item 559",
    value: "Hereditary neuropathy with pressure palsies",
  },
  {
    label: "Item 560",
    value: "Hereditary spastic paraplegia",
  },
  {
    label: "Item 561",
    value: "Hernia",
  },
  {
    label: "Item 562",
    value: "Hernia , see Femoral hernia repair",
  },
  {
    label: "Item 563",
    value: "Hernia , see Hiatus hernia",
  },
  {
    label: "Item 564",
    value: "Hernia , see Inguinal hernia repair",
  },
  {
    label: "Item 565",
    value: "Hernia , see Umbilical hernia repair",
  },
  {
    label: "Item 566",
    value: "Herpes , see Genital herpes",
  },
  {
    label: "Item 567",
    value: "Herpes in babies, see Neonatal herpes",
  },
  {
    label: "Item 568",
    value: "Herpes simplex eye infections",
  },
  {
    label: "Item 569",
    value: "Herpetic whitlow",
  },
  {
    label: "Item 570",
    value: "Hiatus hernia",
  },
  {
    label: "Item 571",
    value: "Hib, see Haemophilus influenzae type b",
  },
  {
    label: "Item 572",
    value: "Hib/MenC vaccine",
  },
  {
    label: "Item 573",
    value: "Hiccups",
  },
  {
    label: "Item 574",
    value: "Hidradenitis suppurativa",
  },
  {
    label: "Item 575",
    value: "High blood pressure",
  },
  {
    label: "Item 576",
    value: "High blood sugar",
  },
  {
    label: "Item 577",
    value: "High cholesterol",
  },
  {
    label: "Item 578",
    value: "High temperature  in adults",
  },
  {
    label: "Item 579",
    value: "High temperature  in children",
  },
  {
    label: "Item 580",
    value: "Hip dysplasia, see Developmental dysplasia of the hip",
  },
  {
    label: "Item 581",
    value: "Hip pain in adults",
  },
  {
    label: "Item 582",
    value: "Hip pain in children",
  },
  {
    label: "Item 583",
    value: "Hip replacement",
  },
  {
    label: "Item 584",
    value: "Hirschsprung's disease",
  },
  {
    label: "Item 585",
    value: "Hirsutism, see Excessive hair growth",
  },
  {
    label: "Item 586",
    value: "HIV and AIDS",
  },
  {
    label: "Item 587",
    value: "Hives",
  },
  {
    label: "Item 588",
    value: "Hoarding disorder",
  },
  {
    label: "Item 589",
    value: "Hodgkin lymphoma",
  },
  {
    label: "Item 590",
    value: "Home oxygen therapy",
  },
  {
    label: "Item 591",
    value: "Homeopathy",
  },
  {
    label: "Item 592",
    value: "Homocystinuria",
  },
  {
    label: "Item 593",
    value: "Hookworm, see Worms in humans",
  },
  {
    label: "Item 594",
    value: "Hormone headaches",
  },
  {
    label: "Item 595",
    value: "HPV vaccine",
  },
  {
    label: "Item 596",
    value: "Hughes syndrome, see Antiphospholipid syndrome",
  },
  {
    label: "Item 597",
    value: "Human bites, see Animal and human bites",
  },
  {
    label: "Item 598",
    value: "Human papillomavirus",
  },
  {
    label: "Item 599",
    value: "Huntington's disease",
  },
  {
    label: "Item 600",
    value: "Hydrocephalus",
  },
  {
    label: "Item 601",
    value: "Hydronephrosis",
  },
  {
    label: "Item 602",
    value: "Hyperacusis, see Noise sensitivity",
  },
  {
    label: "Item 603",
    value: "Hyperhidrosis, see Excessive sweating",
  },
  {
    label: "Item 604",
    value: "Hyperparathyroidism",
  },
  {
    label: "Item 605",
    value: "Hypersomnia, see Excessive daytime sleepiness",
  },
  {
    label: "Item 606",
    value: "Hypertension, see High blood pressure",
  },
  {
    label: "Item 607",
    value: "Hyperthyroidism, see Overactive thyroid",
  },
  {
    label: "Item 608",
    value: "Hypnotherapy",
  },
  {
    label: "Item 609",
    value: "Hypoglycaemia, see Low blood sugar",
  },
  {
    label: "Item 610",
    value: "Hypoparathyroidism",
  },
  {
    label: "Item 611",
    value: "Hypotension, see Low blood pressure",
  },
  {
    label: "Item 612",
    value: "Hypothermia",
  },
  {
    label: "Item 613",
    value: "Hypothyroidism, see Underactive thyroid",
  },
  {
    label: "Item 614",
    value: "Hysterectomy",
  },
  {
    label: "Item 615",
    value: "Hysteroscopy",
  },
  {
    label: "Item 616",
    value: "I",
  },
  {
    label: "Item 617",
    value: "IBD, see Inflammatory bowel disease",
  },
  {
    label: "Item 618",
    value: "IBS, see Irritable bowel syndrome",
  },
  {
    label: "Item 619",
    value: "Ichthyosis",
  },
  {
    label: "Item 620",
    value: "Idiopathic pulmonary fibrosis",
  },
  {
    label: "Item 621",
    value: "Ileostomy",
  },
  {
    label: "Item 622",
    value: "Impetigo",
  },
  {
    label: "Item 623",
    value: "Impotence, see Erectile dysfunction",
  },
  {
    label: "Item 624",
    value: "Incontinence , see Urinary incontinence",
  },
  {
    label: "Item 625",
    value: "Indigestion",
  },
  {
    label: "Item 626",
    value: "Infected piercings",
  },
  {
    label: "Item 627",
    value: "Infertility",
  },
  {
    label: "Item 628",
    value: "Inflammatory bowel disease",
  },
  {
    label: "Item 629",
    value: "Influenza, see Flu",
  },
  {
    label: "Item 630",
    value: "Ingrown hairs",
  },
  {
    label: "Item 631",
    value: "Ingrown toenail",
  },
  {
    label: "Item 632",
    value: "Inguinal hernia repair",
  },
  {
    label: "Item 633",
    value: "Insect bites and stings",
  },
  {
    label: "Item 634",
    value: "Insomnia",
  },
  {
    label: "Item 635",
    value: "Intensive care",
  },
  {
    label: "Item 636",
    value: "Internal  condoms",
  },
  {
    label: "Item 637",
    value: "Intersex, see Differences in sex development",
  },
  {
    label: "Item 638",
    value: "Interstitial cystitis, see Bladder pain syndrome",
  },
  {
    label: "Item 639",
    value: "Intracranial hypertension",
  },
  {
    label: "Item 640",
    value: "Intrauterine insemination",
  },
  {
    label: "Item 641",
    value: "Iron deficiency anaemia",
  },
  {
    label: "Item 642",
    value: "Irregular periods",
  },
  {
    label: "Item 643",
    value: "Irritable bowel syndrome",
  },
  {
    label: "Item 644",
    value: "Irritable hip, see Hip pain in children",
  },
  {
    label: "Item 645",
    value: "Isovaleric acidaemia",
  },
  {
    label: "Item 646",
    value: "Itchy bottom",
  },
  {
    label: "Item 647",
    value: "Itchy skin",
  },
  {
    label: "Item 648",
    value: "IUD  or copper coil",
  },
  {
    label: "Item 649",
    value: "IUS  or hormonal coil",
  },
  {
    label: "Item 650",
    value: "IVF",
  },
  {
    label: "Item 651",
    value: "J",
  },
  {
    label: "Item 652",
    value: "Japanese encephalitis",
  },
  {
    label: "Item 653",
    value: "Jaundice",
  },
  {
    label: "Item 654",
    value: "Jaundice in newborns, see Newborn jaundice",
  },
  {
    label: "Item 655",
    value: "Jaw pain, see Temporomandibular disorder",
  },
  {
    label: "Item 656",
    value: "Jellyfish and other sea creature stings",
  },
  {
    label: "Item 657",
    value: "Jet lag",
  },
  {
    label: "Item 658",
    value: "Joint hypermobility syndrome",
  },
  {
    label: "Item 659",
    value: "Joint pain",
  },
  {
    label: "Item 660",
    value: "K",
  },
  {
    label: "Item 661",
    value: "Kawasaki disease",
  },
  {
    label: "Item 662",
    value: "Keloid scars",
  },
  {
    label: "Item 663",
    value: "Keratosis pilaris",
  },
  {
    label: "Item 664",
    value: "Kidney cancer",
  },
  {
    label: "Item 665",
    value: "Kidney failure, see Chronic kidney disease",
  },
  {
    label: "Item 666",
    value: "Kidney infection",
  },
  {
    label: "Item 667",
    value: "Kidney stones",
  },
  {
    label: "Item 668",
    value: "Klinefelter syndrome",
  },
  {
    label: "Item 669",
    value: "Knee cartilage damage, see Meniscus tear",
  },
  {
    label: "Item 670",
    value: "Knee ligament surgery",
  },
  {
    label: "Item 671",
    value: "Knee pain",
  },
  {
    label: "Item 672",
    value: "Knee replacement",
  },
  {
    label: "Item 673",
    value: "Knock knees",
  },
  {
    label: "Item 674",
    value: "Knocked-out tooth",
  },
  {
    label: "Item 675",
    value: "Kyphosis",
  },
  {
    label: "Item 676",
    value: "L",
  },
  {
    label: "Item 677",
    value: "Labial fusion",
  },
  {
    label: "Item 678",
    value: "Labyrinthitis and vestibular neuritis",
  },
  {
    label: "Item 679",
    value: "Lactate dehydrogenase  test",
  },
  {
    label: "Item 680",
    value: "Lactose intolerance",
  },
  {
    label: "Item 681",
    value: "Lambert-Eaton myasthenic syndrome",
  },
  {
    label: "Item 682",
    value: "Laparoscopy",
  },
  {
    label: "Item 683",
    value: "Laryngeal  cancer",
  },
  {
    label: "Item 684",
    value: "Laryngitis",
  },
  {
    label: "Item 685",
    value: "Laser eye surgery and lens surgery",
  },
  {
    label: "Item 686",
    value: "Laxatives",
  },
  {
    label: "Item 687",
    value: "Lazy eye",
  },
  {
    label: "Item 688",
    value: "Learning disabilities",
  },
  {
    label: "Item 689",
    value: "Leg cramps",
  },
  {
    label: "Item 690",
    value: "Leg ulcer, see Venous leg ulcer",
  },
  {
    label: "Item 691",
    value: "Legionnaires' disease",
  },
  {
    label: "Item 692",
    value: "Leptospirosis",
  },
  {
    label: "Item 693",
    value: "Leukaemia , see Acute lymphoblastic leukaemia",
  },
  {
    label: "Item 694",
    value: "Leukaemia , see Acute myeloid leukaemia",
  },
  {
    label: "Item 695",
    value: "Leukaemia , see Chronic lymphocytic leukaemia",
  },
  {
    label: "Item 696",
    value: "Leukoplakia",
  },
  {
    label: "Item 697",
    value: "Lichen planus",
  },
  {
    label: "Item 698",
    value: "Lichen sclerosus",
  },
  {
    label: "Item 699",
    value: "Limping in children",
  },
  {
    label: "Item 700",
    value: "Lipoedema",
  },
  {
    label: "Item 701",
    value: "Lipoma",
  },
  {
    label: "Item 702",
    value: "Lips , see Sore or dry lips",
  },
  {
    label: "Item 703",
    value: "Listeriosis",
  },
  {
    label: "Item 704",
    value: "Liver cancer",
  },
  {
    label: "Item 705",
    value: "Liver disease",
  },
  {
    label: "Item 706",
    value: "Liver disease , see Alcohol-related liver disease",
  },
  {
    label: "Item 707",
    value: "Local anaesthesia",
  },
  {
    label: "Item 708",
    value: "Long QT syndrome",
  },
  {
    label: "Item 709",
    value: "Long-sightedness",
  },
  {
    label: "Item 710",
    value: "Lost or changed sense of smell",
  },
  {
    label: "Item 711",
    value: "Low blood pressure",
  },
  {
    label: "Item 712",
    value: "Low blood sugar",
  },
  {
    label: "Item 713",
    value: "Low sex drive",
  },
  {
    label: "Item 714",
    value: "Low sperm count",
  },
  {
    label: "Item 715",
    value: "Low white blood cell count",
  },
  {
    label: "Item 716",
    value: "Lower back pain, see Back pain",
  },
  {
    label: "Item 717",
    value: "Lumbago, see Back pain",
  },
  {
    label: "Item 718",
    value: "Lumbar decompression surgery",
  },
  {
    label: "Item 719",
    value: "Lumbar puncture",
  },
  {
    label: "Item 720",
    value: "Lumps",
  },
  {
    label: "Item 721",
    value: "Lung cancer",
  },
  {
    label: "Item 722",
    value: "Lung health checks",
  },
  {
    label: "Item 723",
    value: "Lupus",
  },
  {
    label: "Item 724",
    value: "Lyme disease",
  },
  {
    label: "Item 725",
    value: "Lymphoedema",
  },
  {
    label: "Item 726",
    value: "M",
  },
  {
    label: "Item 727",
    value: "Macular degeneration , see Age-related macular degeneration (AMD)",
  },
  {
    label: "Item 728",
    value: "Macular hole",
  },
  {
    label: "Item 729",
    value: "Magnesium test",
  },
  {
    label: "Item 730",
    value: "Malaria",
  },
  {
    label: "Item 731",
    value: "Male menopause, see The 'male menopause'",
  },
  {
    label: "Item 732",
    value: "Male sterilisation, see Vasectomy",
  },
  {
    label: "Item 733",
    value: "Malignant brain tumour",
  },
  {
    label: "Item 734",
    value: "Mallet finger",
  },
  {
    label: "Item 735",
    value: "Malnutrition",
  },
  {
    label: "Item 736",
    value: "Mammogram, see Breast screening",
  },
  {
    label: "Item 737",
    value: "Maple syrup urine disease",
  },
  {
    label: "Item 738",
    value: "Marfan syndrome",
  },
  {
    label: "Item 739",
    value: "Mastectomy",
  },
  {
    label: "Item 740",
    value: "Mastitis",
  },
  {
    label: "Item 741",
    value: "Mastocytosis",
  },
  {
    label: "Item 742",
    value: "Mastoiditis",
  },
  {
    label: "Item 743",
    value: "MCADD",
  },
  {
    label: "Item 744",
    value: "Measles",
  },
  {
    label: "Item 745",
    value: "Medical cannabis",
  },
  {
    label: "Item 746",
    value: "Medically unexplained symptoms",
  },
  {
    label: "Item 747",
    value: "Medicines information",
  },
  {
    label: "Item 748",
    value: "Melanoma skin cancer",
  },
  {
    label: "Item 749",
    value: "Memory loss",
  },
  {
    label: "Item 750",
    value: "MenACWY vaccine",
  },
  {
    label: "Item 751",
    value: "MenB vaccine",
  },
  {
    label: "Item 752",
    value: "Meningitis",
  },
  {
    label: "Item 753",
    value: "Meniscus tear",
  },
  {
    label: "Item 754",
    value: "Menopause",
  },
  {
    label: "Item 755",
    value: "Menopause , see Early menopause",
  },
  {
    label: "Item 756",
    value: "Menstrual pain, see Period pain",
  },
  {
    label: "Item 757",
    value: "Mesothelioma",
  },
  {
    label: "Item 758",
    value: "Metabolic syndrome",
  },
  {
    label: "Item 759",
    value: "Metallic taste",
  },
  {
    label: "Item 760",
    value: "Metatarsalgia, see Pain in the ball of the foot",
  },
  {
    label: "Item 761",
    value: "Middle East respiratory syndrome",
  },
  {
    label: "Item 762",
    value: "Migraine",
  },
  {
    label: "Item 763",
    value: "Miscarriage",
  },
  {
    label: "Item 764",
    value: "Missed or late periods",
  },
  {
    label: "Item 765",
    value: "Mitral valve problems",
  },
  {
    label: "Item 766",
    value: "MMR  vaccine",
  },
  {
    label: "Item 767",
    value: "Molar pregnancy",
  },
  {
    label: "Item 768",
    value: "Moles",
  },
  {
    label: "Item 769",
    value: "Molluscum contagiosum",
  },
  {
    label: "Item 770",
    value: "Morton's neuroma",
  },
  {
    label: "Item 771",
    value: "Motion sickness",
  },
  {
    label: "Item 772",
    value: "Motor neurone disease",
  },
  {
    label: "Item 773",
    value: "Mouth cancer",
  },
  {
    label: "Item 774",
    value: "Mouth thrush, see Oral thrush",
  },
  {
    label: "Item 775",
    value: "Mouth ulcers",
  },
  {
    label: "Item 776",
    value: "Mpox",
  },
  {
    label: "Item 777",
    value: "MRI scan",
  },
  {
    label: "Item 778",
    value: "MRSA",
  },
  {
    label: "Item 779",
    value: "Mucositis",
  },
  {
    label: "Item 780",
    value: "Multiple myeloma",
  },
  {
    label: "Item 781",
    value: "Multiple sclerosis",
  },
  {
    label: "Item 782",
    value: "Multiple system atrophy",
  },
  {
    label: "Item 783",
    value: "Mumps",
  },
  {
    label: "Item 784",
    value: "Munchausen syndrome",
  },
  {
    label: "Item 785",
    value: "Muscular dystrophy",
  },
  {
    label: "Item 786",
    value: "Myalgic encephalomyelitis or chronic fatigue syndrome",
  },
  {
    label: "Item 787",
    value: "Myasthenia gravis",
  },
  {
    label: "Item 788",
    value: "Myelodysplastic syndrome",
  },
  {
    label: "Item 789",
    value: "Myeloma, see Multiple myeloma",
  },
  {
    label: "Item 790",
    value: "Myopia, see Short-sightedness",
  },
  {
    label: "Item 791",
    value: "Myositis",
  },
  {
    label: "Item 792",
    value: "Ménière's disease",
  },
  {
    label: "Item 793",
    value: "N",
  },
  {
    label: "Item 794",
    value: "Nail fungal infection, see Fungal nail infection",
  },
  {
    label: "Item 795",
    value: "Nail patella syndrome",
  },
  {
    label: "Item 796",
    value: "Nail problems",
  },
  {
    label: "Item 797",
    value: "Nappy rash",
  },
  {
    label: "Item 798",
    value: "Narcolepsy",
  },
  {
    label: "Item 799",
    value: "Nasal and sinus cancer",
  },
  {
    label: "Item 800",
    value: "Nasal polyps",
  },
  {
    label: "Item 801",
    value: "Nasopharyngeal cancer",
  },
  {
    label: "Item 802",
    value: "Natural family planning",
  },
  {
    label: "Item 803",
    value: "Nausea, see Feeling sick",
  },
  {
    label: "Item 804",
    value: "Neck pain",
  },
  {
    label: "Item 805",
    value: "Necrotising fasciitis",
  },
  {
    label: "Item 806",
    value: "Neonatal herpes",
  },
  {
    label: "Item 807",
    value: "Nephrotic syndrome in children",
  },
  {
    label: "Item 808",
    value: "Neuroendocrine tumours",
  },
  {
    label: "Item 809",
    value: "Neuroendocrine tumours and carcinoid syndrome",
  },
  {
    label: "Item 810",
    value: "Neurofibromatosis type 1",
  },
  {
    label: "Item 811",
    value: "Neurofibromatosis type 2",
  },
  {
    label: "Item 812",
    value: "Neuromyelitis optica",
  },
  {
    label: "Item 813",
    value: "Newborn jaundice",
  },
  {
    label: "Item 814",
    value: "Newborn respiratory distress syndrome",
  },
  {
    label: "Item 815",
    value: "NHS screening",
  },
  {
    label: "Item 816",
    value: "Night sweats",
  },
  {
    label: "Item 817",
    value: "Night terrors and nightmares",
  },
  {
    label: "Item 818",
    value: "Nipple discharge",
  },
  {
    label: "Item 819",
    value: "Noise sensitivity",
  },
  {
    label: "Item 820",
    value: "Non-alcoholic fatty liver disease",
  },
  {
    label: "Item 821",
    value: "Non-allergic rhinitis",
  },
  {
    label: "Item 822",
    value: "Non-gonococcal urethritis, see Urethritis",
  },
  {
    label: "Item 823",
    value: "Non-Hodgkin lymphoma",
  },
  {
    label: "Item 824",
    value: "Non-melanoma skin cancer",
  },
  {
    label: "Item 825",
    value: "Noonan syndrome",
  },
  {
    label: "Item 826",
    value: "Norovirus",
  },
  {
    label: "Item 827",
    value: "Nose cancer, see Nasal and sinus cancer",
  },
  {
    label: "Item 828",
    value: "Nosebleed",
  },
  {
    label: "Item 829",
    value: "NSAIDs",
  },
  {
    label: "Item 830",
    value: "O",
  },
  {
    label: "Item 831",
    value: "Obesity",
  },
  {
    label: "Item 832",
    value: "Obsessive compulsive disorder",
  },
  {
    label: "Item 833",
    value: "Obstructive sleep apnoea, see Sleep apnoea",
  },
  {
    label: "Item 834",
    value: "Occupational therapy",
  },
  {
    label: "Item 835",
    value: "Oesophageal atresia and tracheo-oesophageal fistula",
  },
  {
    label: "Item 836",
    value: "Oesophageal cancer",
  },
  {
    label: "Item 837",
    value: "Oral thrush",
  },
  {
    label: "Item 838",
    value: "Orf",
  },
  {
    label: "Item 839",
    value: "Orthodontics",
  },
  {
    label: "Item 840",
    value: "Osteoarthritis",
  },
  {
    label: "Item 841",
    value: "Osteomalacia, see Rickets and osteomalacia",
  },
  {
    label: "Item 842",
    value: "Osteomyelitis",
  },
  {
    label: "Item 843",
    value: "Osteopathy",
  },
  {
    label: "Item 844",
    value: "Osteophyte",
  },
  {
    label: "Item 845",
    value: "Osteoporosis",
  },
  {
    label: "Item 846",
    value: "Otosclerosis",
  },
  {
    label: "Item 847",
    value: "Ovarian cancer",
  },
  {
    label: "Item 848",
    value: "Ovarian cyst",
  },
  {
    label: "Item 849",
    value: "Overactive thyroid",
  },
  {
    label: "Item 850",
    value: "Ovulation pain",
  },
  {
    label: "Item 851",
    value: "Oxygen therapy, see Home oxygen therapy",
  },
  {
    label: "Item 852",
    value: "P",
  },
  {
    label: "Item 853",
    value: "Pacemaker implantation",
  },
  {
    label: "Item 854",
    value: "Paget's disease of bone",
  },
  {
    label: "Item 855",
    value: "Paget's disease of the nipple",
  },
  {
    label: "Item 856",
    value: "Pain in testicles, see Testicle pain",
  },
  {
    label: "Item 857",
    value: "Pain in the back of the hand",
  },
  {
    label: "Item 858",
    value: "Pain in the ball of the foot",
  },
  {
    label: "Item 859",
    value: "Pain in the bottom of the foot",
  },
  {
    label: "Item 860",
    value: "Pain in the palm of the hand",
  },
  {
    label: "Item 861",
    value: "Pain in the top of the foot",
  },
  {
    label: "Item 862",
    value: "Painful bladder syndrome, see Bladder pain syndrome",
  },
  {
    label: "Item 863",
    value: "Painful periods, see Period pain",
  },
  {
    label: "Item 864",
    value: "Palpitations, see Heart palpitations",
  },
  {
    label: "Item 865",
    value: "Pancreatic cancer",
  },
  {
    label: "Item 866",
    value: "Pancreatitis , see Acute pancreatitis",
  },
  {
    label: "Item 867",
    value: "Pancreatitis , see Chronic pancreatitis",
  },
  {
    label: "Item 868",
    value: "Panic disorder",
  },
  {
    label: "Item 869",
    value: "Paralysis",
  },
  {
    label: "Item 870",
    value: "Parkinson's disease",
  },
  {
    label: "Item 871",
    value: "Patau's syndrome",
  },
  {
    label: "Item 872",
    value: "Peak flow test",
  },
  {
    label: "Item 873",
    value: "Pelvic inflammatory disease",
  },
  {
    label: "Item 874",
    value: "Pelvic organ prolapse",
  },
  {
    label: "Item 875",
    value: "Pelvic pain",
  },
  {
    label: "Item 876",
    value: "Pemphigus vulgaris",
  },
  {
    label: "Item 877",
    value: "Penile cancer",
  },
  {
    label: "Item 878",
    value: "Perforated eardrum",
  },
  {
    label: "Item 879",
    value: "Pericarditis",
  },
  {
    label: "Item 880",
    value: "Perimenopause, see Menopause",
  },
  {
    label: "Item 881",
    value: "Period pain",
  },
  {
    label: "Item 882",
    value: "Periods",
  },
  {
    label: "Item 883",
    value: "Periods , see Heavy periods",
  },
  {
    label: "Item 884",
    value: "Periods , see Irregular periods",
  },
  {
    label: "Item 885",
    value: "Periods , see Missed or late periods",
  },
  {
    label: "Item 886",
    value: "Peripheral arterial disease",
  },
  {
    label: "Item 887",
    value: "Peripheral neuropathy",
  },
  {
    label: "Item 888",
    value: "Peritonitis",
  },
  {
    label: "Item 889",
    value: "Persistent trophoblastic disease and choriocarcinoma",
  },
  {
    label: "Item 890",
    value: "Personality disorders",
  },
  {
    label: "Item 891",
    value: "PET scan",
  },
  {
    label: "Item 892",
    value: "Phaeochromocytoma",
  },
  {
    label: "Item 893",
    value: "Phenylketonuria",
  },
  {
    label: "Item 894",
    value: "Phimosis, see Tight foreskin",
  },
  {
    label: "Item 895",
    value: "Phlebitis",
  },
  {
    label: "Item 896",
    value: "Phobias",
  },
  {
    label: "Item 897",
    value: "Phosphate test",
  },
  {
    label: "Item 898",
    value: "Photodynamic therapy",
  },
  {
    label: "Item 899",
    value: "Physiotherapy",
  },
  {
    label: "Item 900",
    value: "Piles",
  },
  {
    label: "Item 901",
    value: "Pilonidal sinus",
  },
  {
    label: "Item 902",
    value: "Pins and needles",
  },
  {
    label: "Item 903",
    value: "PIP breast implants",
  },
  {
    label: "Item 904",
    value: "Pityriasis rosea",
  },
  {
    label: "Item 905",
    value: "Pityriasis versicolor",
  },
  {
    label: "Item 906",
    value: "Plagiocephaly and brachycephaly",
  },
  {
    label: "Item 907",
    value: "Plantar fasciitis",
  },
  {
    label: "Item 908",
    value: "Plastic surgery",
  },
  {
    label: "Item 909",
    value: "Pleurisy",
  },
  {
    label: "Item 910",
    value: "PMS",
  },
  {
    label: "Item 911",
    value: "Pneumococcal vaccine",
  },
  {
    label: "Item 912",
    value: "Pneumonia",
  },
  {
    label: "Item 913",
    value: "Poisoning",
  },
  {
    label: "Item 914",
    value: "Polio",
  },
  {
    label: "Item 915",
    value:
      "Polycystic kidney disease , see Autosomal dominant polycystic kidney disease",
  },
  {
    label: "Item 916",
    value:
      "Polycystic kidney disease , see Autosomal recessive polycystic kidney disease",
  },
  {
    label: "Item 917",
    value: "Polycystic ovary syndrome",
  },
  {
    label: "Item 918",
    value: "Polyhydramnios",
  },
  {
    label: "Item 919",
    value: "Polymorphic light eruption",
  },
  {
    label: "Item 920",
    value: "Polymyalgia rheumatica",
  },
  {
    label: "Item 921",
    value: "Pompholyx",
  },
  {
    label: "Item 922",
    value: "Popliteal cyst, see Baker's cyst",
  },
  {
    label: "Item 923",
    value: "Post-herpetic neuralgia",
  },
  {
    label: "Item 924",
    value: "Post-mortem",
  },
  {
    label: "Item 925",
    value: "Post-polio syndrome",
  },
  {
    label: "Item 926",
    value: "Post-traumatic stress disorder",
  },
  {
    label: "Item 927",
    value: "Postmenopausal bleeding",
  },
  {
    label: "Item 928",
    value: "Postnatal depression",
  },
  {
    label: "Item 929",
    value: "Postpartum psychosis",
  },
  {
    label: "Item 930",
    value: "Postural tachycardia syndrome",
  },
  {
    label: "Item 931",
    value: "Potassium test",
  },
  {
    label: "Item 932",
    value: "Prader-Willi syndrome",
  },
  {
    label: "Item 933",
    value: "Pre-eclampsia",
  },
  {
    label: "Item 934",
    value: "Predictive genetic tests for cancer risk genes",
  },
  {
    label: "Item 935",
    value: "Pregnancy",
  },
  {
    label: "Item 936",
    value: "Premature ejaculation, see Ejaculation problems",
  },
  {
    label: "Item 937",
    value: "Pressure ulcers",
  },
  {
    label: "Item 938",
    value: "Priapism",
  },
  {
    label: "Item 939",
    value: "Prickly heat, see Heat rash",
  },
  {
    label: "Item 940",
    value: "Primary biliary cholangitis",
  },
  {
    label: "Item 941",
    value: "Probiotics",
  },
  {
    label: "Item 942",
    value: "Problems swallowing pills",
  },
  {
    label: "Item 943",
    value: "Proctalgia, see Anal pain",
  },
  {
    label: "Item 944",
    value: "Progestogen-only pill",
  },
  {
    label: "Item 945",
    value: "Progressive supranuclear palsy",
  },
  {
    label: "Item 946",
    value: "Prolapse , see Pelvic organ prolapse",
  },
  {
    label: "Item 947",
    value: "Prosopagnosia",
  },
  {
    label: "Item 948",
    value: "Prostate cancer",
  },
  {
    label: "Item 949",
    value: "Prostate enlargement, see Benign prostate enlargement",
  },
  {
    label: "Item 950",
    value: "Prostate problems",
  },
  {
    label: "Item 951",
    value: "Prostatitis",
  },
  {
    label: "Item 952",
    value: "Psoriasis",
  },
  {
    label: "Item 953",
    value: "Psoriatic arthritis",
  },
  {
    label: "Item 954",
    value: "Psychiatry",
  },
  {
    label: "Item 955",
    value: "Psychosis",
  },
  {
    label: "Item 956",
    value: "Psychotic depression",
  },
  {
    label: "Item 957",
    value: "Puberty , see Early or delayed puberty",
  },
  {
    label: "Item 958",
    value: "Pubic lice",
  },
  {
    label: "Item 959",
    value: "Pudendal neuralgia",
  },
  {
    label: "Item 960",
    value: "Pulmonary embolism",
  },
  {
    label: "Item 961",
    value: "Pulmonary fibrosis, see Idiopathic pulmonary fibrosis",
  },
  {
    label: "Item 962",
    value: "Pulmonary hypertension",
  },
  {
    label: "Item 963",
    value: "Pyoderma gangrenosum",
  },
  {
    label: "Item 964",
    value: "Q",
  },
  {
    label: "Item 965",
    value: "Q fever",
  },
  {
    label: "Item 966",
    value: "Quinsy, see Tonsillitis",
  },
  {
    label: "Item 967",
    value: "R",
  },
  {
    label: "Item 968",
    value: "Rabies",
  },
  {
    label: "Item 969",
    value: "Radiotherapy",
  },
  {
    label: "Item 970",
    value: "Rashes in babies and children",
  },
  {
    label: "Item 971",
    value: "Raynaud's",
  },
  {
    label: "Item 972",
    value: "Reactive arthritis",
  },
  {
    label: "Item 973",
    value: "Rectal bleeding, see Bleeding from the bottom",
  },
  {
    label: "Item 974",
    value: "Rectal cancer, see Bowel cancer",
  },
  {
    label: "Item 975",
    value: "Rectal examination",
  },
  {
    label: "Item 976",
    value: "Red blood cell count",
  },
  {
    label: "Item 977",
    value: "Red eye",
  },
  {
    label: "Item 978",
    value: "Reflux in babies",
  },
  {
    label: "Item 979",
    value: "Renal cancer, see Kidney cancer",
  },
  {
    label: "Item 980",
    value: "Repetitive strain injury",
  },
  {
    label: "Item 981",
    value: "Respiratory tract infections",
  },
  {
    label: "Item 982",
    value: "Restless legs syndrome",
  },
  {
    label: "Item 983",
    value: "Restricted growth",
  },
  {
    label: "Item 984",
    value: "Retinal detachment, see Detached retina",
  },
  {
    label: "Item 985",
    value: "Retinal migraine",
  },
  {
    label: "Item 986",
    value: "Retinoblastoma",
  },
  {
    label: "Item 987",
    value: "Rett syndrome",
  },
  {
    label: "Item 988",
    value: "Reye's syndrome",
  },
  {
    label: "Item 989",
    value: "Rhesus disease",
  },
  {
    label: "Item 990",
    value: "Rheumatic fever",
  },
  {
    label: "Item 991",
    value: "Rheumatoid arthritis",
  },
  {
    label: "Item 992",
    value: "Rhinitis , see Allergic rhinitis",
  },
  {
    label: "Item 993",
    value: "Rickets and osteomalacia",
  },
  {
    label: "Item 994",
    value: "Ringworm",
  },
  {
    label: "Item 995",
    value: "Root canal treatment",
  },
  {
    label: "Item 996",
    value: "Rosacea",
  },
  {
    label: "Item 997",
    value: "Roseola",
  },
  {
    label: "Item 998",
    value: "Rotavirus vaccine",
  },
  {
    label: "Item 999",
    value: "Roundworm, see Worms in humans",
  },
  {
    label: "Item 1000",
    value: "Rubella",
  },
  {
    label: "Item 1001",
    value: "Back to top",
  },
  {
    label: "Item 1002",
    value: "S",
  },
  {
    label: "Item 1003",
    value: "Salivary gland stones",
  },
  {
    label: "Item 1004",
    value: "Sarcoidosis",
  },
  {
    label: "Item 1005",
    value: "Scabies",
  },
  {
    label: "Item 1006",
    value: "Scarlet fever",
  },
  {
    label: "Item 1007",
    value: "Scars",
  },
  {
    label: "Item 1008",
    value: "Schistosomiasis",
  },
  {
    label: "Item 1009",
    value: "Schizophrenia",
  },
  {
    label: "Item 1010",
    value: "Sciatica",
  },
  {
    label: "Item 1011",
    value: "Scleroderma",
  },
  {
    label: "Item 1012",
    value: "Scoliosis",
  },
  {
    label: "Item 1013",
    value: "Scurvy",
  },
  {
    label: "Item 1014",
    value: "Seasonal affective disorder",
  },
  {
    label: "Item 1015",
    value: "Seizures , see Febrile seizures",
  },
  {
    label: "Item 1016",
    value: "Seizures , see What to do if someone has a seizure (fit)",
  },
  {
    label: "Item 1017",
    value: "Selective mutism",
  },
  {
    label: "Item 1018",
    value: "Self-harm",
  },
  {
    label: "Item 1019",
    value: "Sense of smell , see Lost or changed sense of smell",
  },
  {
    label: "Item 1020",
    value: "Sepsis",
  },
  {
    label: "Item 1021",
    value: "Septic arthritis",
  },
  {
    label: "Item 1022",
    value: "Septicaemia, see Sepsis",
  },
  {
    label: "Item 1023",
    value: "Sexually transmitted infections",
  },
  {
    label: "Item 1024",
    value: "Shaking, see Tremor or shaking hands",
  },
  {
    label: "Item 1025",
    value: "Shin pain , see Shin splints",
  },
  {
    label: "Item 1026",
    value: "Shin splints",
  },
  {
    label: "Item 1027",
    value: "Shingles",
  },
  {
    label: "Item 1028",
    value: "Shingles vaccine",
  },
  {
    label: "Item 1029",
    value: "Short-sightedness",
  },
  {
    label: "Item 1030",
    value: "Shortness of breath",
  },
  {
    label: "Item 1031",
    value: "Shoulder impingement",
  },
  {
    label: "Item 1032",
    value: "Shoulder pain",
  },
  {
    label: "Item 1033",
    value: "Sick building syndrome",
  },
  {
    label: "Item 1034",
    value: "Sickle cell disease",
  },
  {
    label: "Item 1035",
    value: "Silicosis",
  },
  {
    label: "Item 1036",
    value: "Sinus cancer, see Nasal and sinus cancer",
  },
  {
    label: "Item 1037",
    value: "Sinusitis",
  },
  {
    label: "Item 1038",
    value: "Sinusitis, see Sinusitis",
  },
  {
    label: "Item 1039",
    value: "Sjögren's syndrome",
  },
  {
    label: "Item 1040",
    value: "Skin abscess",
  },
  {
    label: "Item 1041",
    value: "Skin cancer , see Melanoma skin cancer",
  },
  {
    label: "Item 1042",
    value: "Skin cyst",
  },
  {
    label: "Item 1043",
    value: "Skin picking disorder",
  },
  {
    label: "Item 1044",
    value: "Skin tags",
  },
  {
    label: "Item 1045",
    value: "Slapped cheek syndrome",
  },
  {
    label: "Item 1046",
    value: "Sleep apnoea",
  },
  {
    label: "Item 1047",
    value: "Sleep paralysis",
  },
  {
    label: "Item 1048",
    value: "Sleepwalking",
  },
  {
    label: "Item 1049",
    value: "Slipped disc",
  },
  {
    label: "Item 1050",
    value: "Smelly feet",
  },
  {
    label: "Item 1051",
    value: "Smelly urine",
  },
  {
    label: "Item 1052",
    value: "Smoking , see Stop smoking treatments",
  },
  {
    label: "Item 1053",
    value: "Snake bites",
  },
  {
    label: "Item 1054",
    value: "Snoring",
  },
  {
    label: "Item 1055",
    value: "Social anxiety",
  },
  {
    label: "Item 1056",
    value: "Soft tissue sarcoma",
  },
  {
    label: "Item 1057",
    value: "Soft tissue sarcomas-old",
  },
  {
    label: "Item 1058",
    value: "Soiling",
  },
  {
    label: "Item 1059",
    value: "Solar keratoses, see Actinic keratoses",
  },
  {
    label: "Item 1060",
    value: "Sore lips, see Sore or dry lips",
  },
  {
    label: "Item 1061",
    value: "Sore or dry lips",
  },
  {
    label: "Item 1062",
    value: "Sore or white tongue",
  },
  {
    label: "Item 1063",
    value: "Sore throat",
  },
  {
    label: "Item 1064",
    value: "Sperm count , see Low sperm count",
  },
  {
    label: "Item 1065",
    value: "Spina bifida",
  },
  {
    label: "Item 1066",
    value: "Spinal muscular atrophy",
  },
  {
    label: "Item 1067",
    value: "Spirometry",
  },
  {
    label: "Item 1068",
    value: "Spleen problems and spleen removal",
  },
  {
    label: "Item 1069",
    value: "Spondylolisthesis",
  },
  {
    label: "Item 1070",
    value: "Sprains and strains",
  },
  {
    label: "Item 1071",
    value: "Squint",
  },
  {
    label: "Item 1072",
    value: "Stammering",
  },
  {
    label: "Item 1073",
    value: "Staph infection",
  },
  {
    label: "Item 1074",
    value: "Statins",
  },
  {
    label: "Item 1075",
    value: "Stem cell and bone marrow transplants",
  },
  {
    label: "Item 1076",
    value: "Stent insertion, see Coronary angioplasty and stent insertion",
  },
  {
    label: "Item 1077",
    value: "Sterilisation , see Female sterilisation",
  },
  {
    label: "Item 1078",
    value: "Sterlisation , see Vasectomy",
  },
  {
    label: "Item 1079",
    value: "Steroid cream, see Topical corticosteroids",
  },
  {
    label: "Item 1080",
    value: "Steroid inhalers",
  },
  {
    label: "Item 1081",
    value: "Steroid injections",
  },
  {
    label: "Item 1082",
    value: "Steroid misuse, see Anabolic steroid misuse",
  },
  {
    label: "Item 1083",
    value: "Steroid nasal sprays",
  },
  {
    label: "Item 1084",
    value: "Steroid tablets",
  },
  {
    label: "Item 1085",
    value: "Steroids",
  },
  {
    label: "Item 1086",
    value: "Stevens-Johnson syndrome",
  },
  {
    label: "Item 1087",
    value: "Stillbirth",
  },
  {
    label: "Item 1088",
    value: "Sting or bite , see Insect bites and stings",
  },
  {
    label: "Item 1089",
    value: "Stomach ache",
  },
  {
    label: "Item 1090",
    value: "Stomach bug, see Diarrhoea and vomiting",
  },
  {
    label: "Item 1091",
    value: "Stomach cancer",
  },
  {
    label: "Item 1092",
    value: "Stomach ulcer",
  },
  {
    label: "Item 1093",
    value: "Stop smoking treatments",
  },
  {
    label: "Item 1094",
    value: "Strep A",
  },
  {
    label: "Item 1095",
    value: "Stretch marks",
  },
  {
    label: "Item 1096",
    value: "Stroke",
  },
  {
    label: "Item 1097",
    value: "Stuttering, see Stammering",
  },
  {
    label: "Item 1098",
    value: "Stye",
  },
  {
    label: "Item 1099",
    value: "Subarachnoid haemorrhage",
  },
  {
    label: "Item 1100",
    value: "Subdural haematoma",
  },
  {
    label: "Item 1101",
    value: "Sudden confusion",
  },
  {
    label: "Item 1102",
    value: "Sudden infant death syndrome",
  },
  {
    label: "Item 1103",
    value: "Sunburn",
  },
  {
    label: "Item 1104",
    value: "Superficial thrombophlebitis, see Phlebitis",
  },
  {
    label: "Item 1105",
    value: "Supraventricular tachycardia",
  },
  {
    label: "Item 1106",
    value: "Surgery , see Having an operation (surgery)",
  },
  {
    label: "Item 1107",
    value: "Swallowing pills, see Problems swallowing pills",
  },
  {
    label: "Item 1108",
    value: "Swallowing problems, see Dysphagia",
  },
  {
    label: "Item 1109",
    value: "Sweat rash, see Heat rash",
  },
  {
    label: "Item 1110",
    value: "Sweating , see Excessive sweating (hyperhidrosis)",
  },
  {
    label: "Item 1111",
    value: "Sweating , see Heat rash (prickly heat)",
  },
  {
    label: "Item 1112",
    value: "Sweating at night, see Night sweats",
  },
  {
    label: "Item 1113",
    value: "Swollen ankles, feet and legs",
  },
  {
    label: "Item 1114",
    value: "Swollen arms and hands",
  },
  {
    label: "Item 1115",
    value: "Swollen glands",
  },
  {
    label: "Item 1116",
    value: "Syphilis",
  },
  {
    label: "Item 1117",
    value: "Back to top",
  },
  {
    label: "Item 1118",
    value: "T",
  },
  {
    label: "Item 1119",
    value: "Tailbone  pain",
  },
  {
    label: "Item 1120",
    value: "Tapeworm, see Worms in humans",
  },
  {
    label: "Item 1121",
    value: "Tay-Sachs disease",
  },
  {
    label: "Item 1122",
    value: "TB, see Tuberculosis",
  },
  {
    label: "Item 1123",
    value: "Td/IPV vaccine",
  },
  {
    label: "Item 1124",
    value: "Teeth grinding",
  },
  {
    label: "Item 1125",
    value: "Teeth whitening",
  },
  {
    label: "Item 1126",
    value: "Temporal arteritis",
  },
  {
    label: "Item 1127",
    value: "Temporomandibular disorder",
  },
  {
    label: "Item 1128",
    value: "Tendonitis",
  },
  {
    label: "Item 1129",
    value: "Tennis elbow",
  },
  {
    label: "Item 1130",
    value: "TENS",
  },
  {
    label: "Item 1131",
    value: "Tension headaches",
  },
  {
    label: "Item 1132",
    value: "Testicle lumps and swellings",
  },
  {
    label: "Item 1133",
    value: "Testicle pain",
  },
  {
    label: "Item 1134",
    value: "Testicular cancer",
  },
  {
    label: "Item 1135",
    value: "Tetanus",
  },
  {
    label: "Item 1136",
    value: "Thalassaemia",
  },
  {
    label: "Item 1137",
    value: "The 'male menopause'",
  },
  {
    label: "Item 1138",
    value: "Thirst , see Excessive thirst",
  },
  {
    label: "Item 1139",
    value: "Thoracic outlet syndrome",
  },
  {
    label: "Item 1140",
    value: "Threadworms",
  },
  {
    label: "Item 1141",
    value: "Throat , see Sore throat",
  },
  {
    label: "Item 1142",
    value: "Thrombophilia",
  },
  {
    label: "Item 1143",
    value: "Thrush in men and women",
  },
  {
    label: "Item 1144",
    value: "Thumb pain",
  },
  {
    label: "Item 1145",
    value: "Thyroid cancer",
  },
  {
    label: "Item 1146",
    value: "TIA, see Transient ischaemic attack",
  },
  {
    label: "Item 1147",
    value: "Tick-borne encephalitis",
  },
  {
    label: "Item 1148",
    value: "Tics",
  },
  {
    label: "Item 1149",
    value: "Tight foreskin",
  },
  {
    label: "Item 1150",
    value: "Tinnitus",
  },
  {
    label: "Item 1151",
    value: "Tiredness and fatigue",
  },
  {
    label: "Item 1152",
    value: "Toe pain",
  },
  {
    label: "Item 1153",
    value: "Tongue , see Sore or white tongue",
  },
  {
    label: "Item 1154",
    value: "Tongue-tie",
  },
  {
    label: "Item 1155",
    value: "Tonsillitis",
  },
  {
    label: "Item 1156",
    value: "Tooth , see Chipped, broken or cracked tooth",
  },
  {
    label: "Item 1157",
    value: "Tooth decay",
  },
  {
    label: "Item 1158",
    value: "Tooth knocked out, see Knocked-out tooth",
  },
  {
    label: "Item 1159",
    value: "Toothache",
  },
  {
    label: "Item 1160",
    value: "Topical corticosteroids",
  },
  {
    label: "Item 1161",
    value: "Total iron-binding capacity  and transferrin test",
  },
  {
    label: "Item 1162",
    value: "Total protein test",
  },
  {
    label: "Item 1163",
    value: "Tourette's syndrome",
  },
  {
    label: "Item 1164",
    value: "Toxic shock syndrome",
  },
  {
    label: "Item 1165",
    value: "Toxocariasis",
  },
  {
    label: "Item 1166",
    value: "Toxoplasmosis",
  },
  {
    label: "Item 1167",
    value: "Tracheostomy",
  },
  {
    label: "Item 1168",
    value: "Transient ischaemic attack",
  },
  {
    label: "Item 1169",
    value: "Transurethral resection of the prostate",
  },
  {
    label: "Item 1170",
    value: "Travel vaccinations",
  },
  {
    label: "Item 1171",
    value: "Tremor or shaking hands",
  },
  {
    label: "Item 1172",
    value: "Tremor, see Tremor or shaking hands",
  },
  {
    label: "Item 1173",
    value: "Trichomoniasis",
  },
  {
    label: "Item 1174",
    value: "Trichotillomania",
  },
  {
    label: "Item 1175",
    value: "Trigeminal neuralgia",
  },
  {
    label: "Item 1176",
    value: "Trigger finger",
  },
  {
    label: "Item 1177",
    value: "Trimethylaminuria",
  },
  {
    label: "Item 1178",
    value: "Tuberculosis",
  },
  {
    label: "Item 1179",
    value: "Tuberous sclerosis",
  },
  {
    label: "Item 1180",
    value: "Tummy ache, see Stomach ache",
  },
  {
    label: "Item 1181",
    value: "Tummy bug, see Diarrhoea and vomiting",
  },
  {
    label: "Item 1182",
    value: "Turner syndrome",
  },
  {
    label: "Item 1183",
    value: "Twitching eyes and muscles",
  },
  {
    label: "Item 1184",
    value: "Type 1 diabetes",
  },
  {
    label: "Item 1185",
    value: "Type 2 diabetes",
  },
  {
    label: "Item 1186",
    value: "Typhoid fever",
  },
  {
    label: "Item 1187",
    value: "Typhus",
  },
  {
    label: "Item 1188",
    value: "Back to top",
  },
  {
    label: "Item 1189",
    value: "U",
  },
  {
    label: "Item 1190",
    value: "Ulcerative colitis",
  },
  {
    label: "Item 1191",
    value: "Ultrasound scan",
  },
  {
    label: "Item 1192",
    value: "Umbilical hernia repair",
  },
  {
    label: "Item 1193",
    value: "Underactive thyroid",
  },
  {
    label: "Item 1194",
    value: "Undescended testicles",
  },
  {
    label: "Item 1195",
    value: "Unintentional weight loss",
  },
  {
    label: "Item 1196",
    value: "Upper back pain, see Back pain",
  },
  {
    label: "Item 1197",
    value: "Urethritis",
  },
  {
    label: "Item 1198",
    value: "Urinary catheter",
  },
  {
    label: "Item 1199",
    value: "Urinary incontinence",
  },
  {
    label: "Item 1200",
    value: "Urinary tract infections",
  },
  {
    label: "Item 1201",
    value: "Urine , see Smelly urine",
  },
  {
    label: "Item 1202",
    value: "Urine albumin to creatinine ratio",
  },
  {
    label: "Item 1203",
    value: "Uterine  cancer, see Womb (uterus) cancer",
  },
  {
    label: "Item 1204",
    value: "Uveitis",
  },
  {
    label: "Item 1205",
    value: "Back to top",
  },
  {
    label: "Item 1206",
    value: "V",
  },
  {
    label: "Item 1207",
    value: "Vaginal cancer",
  },
  {
    label: "Item 1208",
    value: "Vaginal discharge",
  },
  {
    label: "Item 1209",
    value: "Vaginal dryness",
  },
  {
    label: "Item 1210",
    value: "Vaginal pain, see Vulvodynia",
  },
  {
    label: "Item 1211",
    value: "Vaginal ring",
  },
  {
    label: "Item 1212",
    value: "Vaginismus",
  },
  {
    label: "Item 1213",
    value: "Vaginitis",
  },
  {
    label: "Item 1214",
    value: "Varicose eczema",
  },
  {
    label: "Item 1215",
    value: "Varicose veins",
  },
  {
    label: "Item 1216",
    value: "Vascular dementia",
  },
  {
    label: "Item 1217",
    value: "Vasculitis",
  },
  {
    label: "Item 1218",
    value: "Vasectomy",
  },
  {
    label: "Item 1219",
    value: "Vegetative state, see Disorders of consciousness",
  },
  {
    label: "Item 1220",
    value: "Venous leg ulcer",
  },
  {
    label: "Item 1221",
    value: "Vertigo",
  },
  {
    label: "Item 1222",
    value: "Vestibular neuritis, see Labyrinthitis and vestibular neuritis",
  },
  {
    label: "Item 1223",
    value: "Vestibular schwannoma, see Acoustic neuroma",
  },
  {
    label: "Item 1224",
    value: "Vitamin B12 or folate deficiency anaemia",
  },
  {
    label: "Item 1225",
    value: "Vitamins and minerals",
  },
  {
    label: "Item 1226",
    value: "Vitiligo",
  },
  {
    label: "Item 1227",
    value: "Vomiting blood",
  },
  {
    label: "Item 1228",
    value: "Vomiting bug, see Norovirus",
  },
  {
    label: "Item 1229",
    value: "Vomiting, see Diarrhoea and vomiting",
  },
  {
    label: "Item 1230",
    value: "Von Willebrand disease",
  },
  {
    label: "Item 1231",
    value: "Vulval cancer",
  },
  {
    label: "Item 1232",
    value: "Vulvodynia",
  },
  {
    label: "Item 1233",
    value: "Back to top",
  },
  {
    label: "Item 1234",
    value: "W",
  },
  {
    label: "Item 1235",
    value: "Warts and verrucas",
  },
  {
    label: "Item 1236",
    value: "Watering eyes",
  },
  {
    label: "Item 1237",
    value: "Weight loss , see Unintentional weight loss",
  },
  {
    label: "Item 1238",
    value: "Weight loss , see Unintentional weight loss",
  },
  {
    label: "Item 1239",
    value: "Weight loss surgery",
  },
  {
    label: "Item 1240",
    value: "Weil's disease, see Leptospirosis",
  },
  {
    label: "Item 1241",
    value: "What to do if someone has a seizure",
  },
  {
    label: "Item 1242",
    value: "Whiplash",
  },
  {
    label: "Item 1243",
    value: "White blood cell count , see Low white blood cell count",
  },
  {
    label: "Item 1244",
    value: "Whitlow finger, see Herpetic whitlow",
  },
  {
    label: "Item 1245",
    value: "Whooping cough",
  },
  {
    label: "Item 1246",
    value: "Wind, see Farting",
  },
  {
    label: "Item 1247",
    value: "Winter vomiting bug, see Norovirus",
  },
  {
    label: "Item 1248",
    value: "Wisdom tooth removal",
  },
  {
    label: "Item 1249",
    value: "Wolff-Parkinson-White syndrome",
  },
  {
    label: "Item 1250",
    value: "Womb  cancer",
  },
  {
    label: "Item 1251",
    value: "Women's health",
  },
  {
    label: "Item 1252",
    value: "Worms in humans",
  },
  {
    label: "Item 1253",
    value: "Wrist pain",
  },
  {
    label: "Item 1254",
    value: "Back to top",
  },
  {
    label: "Item 1255",
    value: "X",
  },
  {
    label: "Item 1256",
    value: "X-ray",
  },
  {
    label: "Item 1257",
    value: "Yellow fever",
  },
  {
    label: "Item 1258",
    value: "Zika virus",
  },
];

export default function DropDownComponent() {
  const [value, setValue] = useState(null);
  console.log(value);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.dropcontainer}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="value"
        valueField="label"
        placeholder={!isFocus ? "What is your Emergency?" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropcontainer: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
