import { useState, useEffect, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  useWindowDimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import HTML, { buildTREFromConfig } from "react-native-render-html";
import AntDesign from "@expo/vector-icons/AntDesign";

const data = [
  {
    label: "1",
    value: "AAA screening, see Abdominal aortic aneurysm screening",
  },
  {
    label: "2",
    value: "AAA, see Abdominal aortic aneurysm",
  },
  {
    label: "3",
    value: "Abdominal aortic aneurysm",
  },
  {
    label: "4",
    value: "Abdominal aortic aneurysm screening",
  },
  {
    label: "5",
    value: "Abortion",
  },
  {
    label: "6",
    value: "Acanthosis nigricans",
  },
  {
    label: "7",
    value: "Achalasia",
  },
  {
    label: "8",
    value: "Acid and chemical burns",
  },
  {
    label: "9",
    value: "Acid reflux in babies, see Reflux in babies",
  },
  {
    label: "10",
    value: "Acne",
  },
  {
    label: "11",
    value: "Acoustic neuroma",
  },
  {
    label: "12",
    value: "Acromegaly",
  },
  {
    label: "13",
    value: "Actinic keratoses",
  },
  {
    label: "14",
    value: "Actinomycosis",
  },
  {
    label: "15",
    value: "Acupuncture",
  },
  {
    label: "16",
    value: "Acute cholecystitis",
  },
  {
    label: "17",
    value: "Acute kidney injury",
  },
  {
    label: "18",
    value: "Acute lymphoblastic leukaemia",
  },
  {
    label: "19",
    value: "Acute myeloid leukaemia",
  },
  {
    label: "20",
    value: "Acute pancreatitis",
  },
  {
    label: "21",
    value: "Acute respiratory distress syndrome",
  },
  {
    label: "22",
    value: "Addison's disease",
  },
  {
    label: "23",
    value: "Adenoidectomy",
  },
  {
    label: "24",
    value: "Adenomyosis",
  },
  {
    label: "25",
    value: "Age-related cataracts",
  },
  {
    label: "26",
    value: "Age-related macular degeneration",
  },
  {
    label: "27",
    value: "Agoraphobia",
  },
  {
    label: "28",
    value: "Albinism",
  },
  {
    label: "29",
    value: "Alcohol misuse",
  },
  {
    label: "30",
    value: "Alcohol poisoning",
  },
  {
    label: "31",
    value: "Alcohol-related liver disease",
  },
  {
    label: "32",
    value: "Alexander technique",
  },
  {
    label: "33",
    value: "Alkaptonuria",
  },
  {
    label: "34",
    value: "Allergic rhinitis",
  },
  {
    label: "35",
    value: "Allergies",
  },
  {
    label: "36",
    value: "Altitude sickness",
  },
  {
    label: "37",
    value: "Alzheimer's disease",
  },
  {
    label: "38",
    value: "Amblyopia, see Lazy eye",
  },
  {
    label: "39",
    value: "Amnesia, see Memory loss",
  },
  {
    label: "40",
    value: "Amniocentesis",
  },
  {
    label: "41",
    value: "Amputation",
  },
  {
    label: "42",
    value: "Amyloidosis",
  },
  {
    label: "43",
    value: "Anabolic steroid misuse",
  },
  {
    label: "44",
    value: "Anaemia , see Iron deficiency anaemia",
  },
  {
    label: "45",
    value: "Anaemia , see Vitamin B12 or folate deficiency anaemia",
  },
  {
    label: "46",
    value: "Anaesthesia",
  },
  {
    label: "47",
    value: "Anal cancer",
  },
  {
    label: "48",
    value: "Anal fissure",
  },
  {
    label: "49",
    value: "Anal fistula",
  },
  {
    label: "50",
    value: "Anal pain",
  },
  {
    label: "51",
    value: "Anaphylaxis",
  },
  {
    label: "52",
    value: "Androgen insensitivity syndrome",
  },
  {
    label: "53",
    value: "Aneurysm , see Abdominal aortic aneurysm",
  },
  {
    label: "54",
    value: "Aneurysm , see Brain aneurysm",
  },
  {
    label: "55",
    value: "Angelman syndrome",
  },
  {
    label: "56",
    value: "Angina",
  },
  {
    label: "57",
    value: "Angioedema",
  },
  {
    label: "58",
    value: "Angiography",
  },
  {
    label: "59",
    value: "Angioplasty, see Coronary angioplasty and stent insertion",
  },
  {
    label: "60",
    value: "Animal and human bites",
  },
  {
    label: "61",
    value: "Ankle pain",
  },
  {
    label: "62",
    value: "Ankylosing spondylitis",
  },
  {
    label: "63",
    value: "Anorexia nervosa",
  },
  {
    label: "64",
    value: "Anosmia, see Lost or changed sense of smell",
  },
  {
    label: "65",
    value: "Antacids",
  },
  {
    label: "66",
    value: "Antibiotics",
  },
  {
    label: "67",
    value: "Anticoagulant medicines",
  },
  {
    label: "68",
    value: "Antidepressants",
  },
  {
    label: "69",
    value: "Antifungal medicines",
  },
  {
    label: "70",
    value: "Antihistamines",
  },
  {
    label: "71",
    value: "Antiphospholipid syndrome",
  },
  {
    label: "72",
    value: "Antisocial personality disorder",
  },
  {
    label: "73",
    value: "Anus , see Itchy bottom",
  },
  {
    label: "74",
    value: "Anxiety disorders in children",
  },
  {
    label: "75",
    value: "Aortic valve replacement",
  },
  {
    label: "76",
    value: "Aphasia",
  },
  {
    label: "77",
    value: "Appendicitis",
  },
  {
    label: "78",
    value: "Arrhythmia",
  },
  {
    label: "79",
    value: "Arthritis",
  },
  {
    label: "80",
    value: "Arthroscopy",
  },
  {
    label: "81",
    value: "Asbestosis",
  },
  {
    label: "82",
    value: "Asperger's, see Autism",
  },
  {
    label: "83",
    value: "Aspergillosis",
  },
  {
    label: "84",
    value: "Asthma",
  },
  {
    label: "85",
    value: "Astigmatism",
  },
  {
    label: "86",
    value: "Ataxia",
  },
  {
    label: "87",
    value: "Atherosclerosis",
  },
  {
    label: "88",
    value: "Athlete's foot",
  },
  {
    label: "89",
    value: "Atopic eczema",
  },
  {
    label: "90",
    value: "Atrial fibrillation",
  },
  {
    label: "91",
    value: "Attention deficit hyperactivity disorder",
  },
  {
    label: "92",
    value: "Auditory processing disorder",
  },
  {
    label: "93",
    value: "Autism",
  },
  {
    label: "94",
    value: "Autosomal dominant polycystic kidney disease",
  },
  {
    label: "95",
    value: "Autosomal recessive polycystic kidney disease",
  },
  {
    label: "96",
    value: "Avian flu, see Bird flu",
  },
  {
    label: "97",
    value: "Baby",
  },
  {
    label: "98",
    value: "Back pain",
  },
  {
    label: "99",
    value: "Bacterial vaginosis",
  },
  {
    label: "100",
    value: "Bad breath",
  },
  {
    label: "101",
    value: "Baker's cyst",
  },
  {
    label: "102",
    value: "Balanitis",
  },
  {
    label: "103",
    value: "Barium enema",
  },
  {
    label: "104",
    value: "Bartholin's cyst",
  },
  {
    label: "105",
    value: "BCG vaccine for tuberculosis",
  },
  {
    label: "106",
    value: "Bedbugs",
  },
  {
    label: "107",
    value: "Bedwetting in children",
  },
  {
    label: "108",
    value: "Behçet's disease",
  },
  {
    label: "109",
    value: "Being sick, see Diarrhoea and vomiting",
  },
  {
    label: "110",
    value: "Bell's palsy",
  },
  {
    label: "111",
    value: "Benign brain tumour",
  },
  {
    label: "112",
    value: "Benign prostate enlargement",
  },
  {
    label: "113",
    value: "Beta blockers",
  },
  {
    label: "114",
    value: "Bile duct cancer",
  },
  {
    label: "115",
    value: "Bilharzia, see Schistosomiasis",
  },
  {
    label: "116",
    value: "Binge eating disorder",
  },
  {
    label: "117",
    value: "Biopsy",
  },
  {
    label: "118",
    value: "Bipolar disorder",
  },
  {
    label: "119",
    value: "Bird flu",
  },
  {
    label: "120",
    value: "Birthmarks",
  },
  {
    label: "121",
    value: "Bite , see Animal and human bites",
  },
  {
    label: "122",
    value: "Black eye",
  },
  {
    label: "123",
    value: "Bladder cancer",
  },
  {
    label: "124",
    value: "Bladder pain syndrome",
  },
  {
    label: "125",
    value: "Bladder stones",
  },
  {
    label: "126",
    value: "Bleeding after the menopause, see Postmenopausal bleeding",
  },
  {
    label: "127",
    value: "Bleeding from the bottom",
  },
  {
    label: "128",
    value: "Blepharitis",
  },
  {
    label: "129",
    value: "Blindness and vision loss",
  },
  {
    label: "130",
    value: "Blisters",
  },
  {
    label: "131",
    value: "Bloating",
  },
  {
    label: "132",
    value: "Blood clots",
  },
  {
    label: "133",
    value: "Blood groups",
  },
  {
    label: "134",
    value: "Blood in semen",
  },
  {
    label: "135",
    value: "Blood in urine",
  },
  {
    label: "136",
    value: "Blood poisoning, see Sepsis",
  },
  {
    label: "137",
    value: "Blood pressure , see High blood pressure (hypertension)",
  },
  {
    label: "138",
    value: "Blood pressure , see Low blood pressure (hypotension)",
  },
  {
    label: "139",
    value: "Blood pressure test",
  },
  {
    label: "140",
    value: "Blood tests",
  },
  {
    label: "141",
    value: "Blood transfusion",
  },
  {
    label: "142",
    value: "Blue or grey skin or lips",
  },
  {
    label: "143",
    value: "Blushing",
  },
  {
    label: "144",
    value: "Body dysmorphic disorder",
  },
  {
    label: "145",
    value: "Body odour",
  },
  {
    label: "146",
    value: "Boils",
  },
  {
    label: "147",
    value: "Bone cancer",
  },
  {
    label: "148",
    value: "Bone cyst",
  },
  {
    label: "149",
    value: "Bone density scan",
  },
  {
    label: "150",
    value: "Borderline personality disorder",
  },
  {
    label: "151",
    value: "Botulism",
  },
  {
    label: "152",
    value: "Bowel cancer",
  },
  {
    label: "153",
    value: "Bowel cancer screening",
  },
  {
    label: "154",
    value: "Bowel incontinence",
  },
  {
    label: "155",
    value: "Bowel polyps",
  },
  {
    label: "156",
    value: "Bowen's disease",
  },
  {
    label: "157",
    value: "Braces and orthodontics",
  },
  {
    label: "158",
    value:
      "Brachycephaly and plagiocephaly, see Plagiocephaly and brachycephaly",
  },
  {
    label: "159",
    value: "Brain abscess",
  },
  {
    label: "160",
    value: "Brain aneurysm",
  },
  {
    label: "161",
    value: "Brain death",
  },
  {
    label: "162",
    value: "Brain haemorrhage, see Subarachnoid haemorrhage",
  },
  {
    label: "163",
    value: "Brain tumour , see Benign brain tumour (non-cancerous)",
  },
  {
    label: "164",
    value: "Brain tumour , see Malignant brain tumour (brain cancer)",
  },
  {
    label: "165",
    value: "Brain tumours",
  },
  {
    label: "166",
    value: "Breast abscess",
  },
  {
    label: "167",
    value: "Breast cancer in men",
  },
  {
    label: "168",
    value: "Breast cancer in women",
  },
  {
    label: "169",
    value: "Breast lumps",
  },
  {
    label: "170",
    value: "Breast pain",
  },
  {
    label: "171",
    value: "Breast reduction on the NHS",
  },
  {
    label: "172",
    value: "Breast screening",
  },
  {
    label: "173",
    value: "Breath-holding in babies and children",
  },
  {
    label: "174",
    value: "Broken ankle",
  },
  {
    label: "175",
    value: "Broken arm or wrist",
  },
  {
    label: "176",
    value: "Broken collarbone",
  },
  {
    label: "177",
    value: "Broken finger or thumb",
  },
  {
    label: "178",
    value: "Broken hip",
  },
  {
    label: "179",
    value: "Broken leg",
  },
  {
    label: "180",
    value: "Broken nose",
  },
  {
    label: "181",
    value: "Broken or bruised ribs",
  },
  {
    label: "182",
    value: "Broken toe",
  },
  {
    label: "183",
    value: "Bronchiectasis",
  },
  {
    label: "184",
    value: "Bronchiolitis",
  },
  {
    label: "185",
    value: "Bronchitis",
  },
  {
    label: "186",
    value: "Bronchodilators",
  },
  {
    label: "187",
    value: "Brucellosis",
  },
  {
    label: "188",
    value: "Brugada syndrome",
  },
  {
    label: "189",
    value: "Bruxism, see Teeth grinding",
  },
  {
    label: "190",
    value: "Bulging eyes",
  },
  {
    label: "191",
    value: "Bulimia",
  },
  {
    label: "192",
    value: "Bullous pemphigoid",
  },
  {
    label: "193",
    value: "Bunions",
  },
  {
    label: "194",
    value: "Burns and scalds",
  },
  {
    label: "195",
    value: "Bursitis",
  },
  {
    label: "196",
    value: "Buttock pain, see Sciatica",
  },
  {
    label: "197",
    value: "CABG, see Coronary artery bypass graft",
  },
  {
    label: "198",
    value: "Caesarean section",
  },
  {
    label: "199",
    value: "Cancer",
  },
  {
    label: "200",
    value: "Cannabis oil , see Medical cannabis (and cannabis oils)",
  },
  {
    label: "201",
    value: "Carbon monoxide poisoning",
  },
  {
    label: "202",
    value: "Carcinoembryonic antigen  test",
  },
  {
    label: "203",
    value: "Cardiac catheterisation and coronary angiography",
  },
  {
    label: "204",
    value: "Cardiomyopathy",
  },
  {
    label: "205",
    value: "Cardiovascular disease",
  },
  {
    label: "206",
    value: "Carotid endarterectomy",
  },
  {
    label: "207",
    value: "Carpal tunnel syndrome",
  },
  {
    label: "208",
    value: "Cat bites, see Animal and human bites",
  },
  {
    label: "209",
    value: "Cataract surgery",
  },
  {
    label: "210",
    value: "Cataracts , see Age-related cataracts",
  },
  {
    label: "211",
    value: "Cataracts , see Childhood cataracts",
  },
  {
    label: "212",
    value: "Catarrh",
  },
  {
    label: "213",
    value: "Cavernoma",
  },
  {
    label: "214",
    value: "Cavernous sinus thrombosis",
  },
  {
    label: "215",
    value: "Cellulitis",
  },
  {
    label: "216",
    value: "Cerebral palsy",
  },
  {
    label: "217",
    value: "Cervical cancer",
  },
  {
    label: "218",
    value: "Cervical screening",
  },
  {
    label: "219",
    value: "Cervical spondylosis",
  },
  {
    label: "220",
    value: "Charcot-Marie-Tooth disease",
  },
  {
    label: "221",
    value: "Charles Bonnet syndrome",
  },
  {
    label: "222",
    value: "Chemotherapy",
  },
  {
    label: "223",
    value: "Chest infection",
  },
  {
    label: "224",
    value: "Chest pain",
  },
  {
    label: "225",
    value: "Chiari malformation",
  },
  {
    label: "226",
    value: "Chickenpox",
  },
  {
    label: "227",
    value: "Chickenpox vaccine",
  },
  {
    label: "228",
    value: "Chilblains",
  },
  {
    label: "229",
    value: "Childhood cataracts",
  },
  {
    label: "230",
    value: "Children's flu vaccine",
  },
  {
    label: "231",
    value: "Chipped, broken or cracked tooth",
  },
  {
    label: "232",
    value: "Chiropractic",
  },
  {
    label: "233",
    value: "Chlamydia",
  },
  {
    label: "234",
    value: "Cholecystitis , see Acute cholecystitis",
  },
  {
    label: "235",
    value: "Cholera",
  },
  {
    label: "236",
    value: "Cholesteatoma",
  },
  {
    label: "237",
    value: "Cholesterol , see High cholesterol",
  },
  {
    label: "238",
    value: "Chorionic villus sampling",
  },
  {
    label: "239",
    value:
      "Chronic fatigue syndrome , see Myalgic encephalomyelitis or chronic fatigue syndrome (ME/CFS)",
  },
  {
    label: "240",
    value: "Chronic kidney disease",
  },
  {
    label: "241",
    value: "Chronic lymphocytic leukaemia",
  },
  {
    label: "242",
    value: "Chronic myeloid leukaemia",
  },
  {
    label: "243",
    value: "Chronic obstructive pulmonary disease",
  },
  {
    label: "244",
    value: "Chronic pancreatitis",
  },
  {
    label: "245",
    value: "Chronic traumatic encephalopathy",
  },
  {
    label: "246",
    value: "Circumcision in boys",
  },
  {
    label: "247",
    value: "Circumcision in men",
  },
  {
    label: "248",
    value: "Cirrhosis",
  },
  {
    label: "249",
    value: "CJD, see Creutzfeldt-Jakob disease",
  },
  {
    label: "250",
    value: "Claustrophobia",
  },
  {
    label: "251",
    value: "Cleft lip and palate",
  },
  {
    label: "252",
    value: "Clinical trials",
  },
  {
    label: "253",
    value: "Clostridium difficile  infection",
  },
  {
    label: "254",
    value: "Club foot",
  },
  {
    label: "255",
    value: "Cluster headaches",
  },
  {
    label: "256",
    value: "Coccyx pain, see Tailbone  pain",
  },
  {
    label: "257",
    value: "Coeliac disease",
  },
  {
    label: "258",
    value: "Cognitive behavioural therapy",
  },
  {
    label: "259",
    value: "Cold sores",
  },
  {
    label: "260",
    value: "Colic",
  },
  {
    label: "261",
    value: "Colon cancer, see Bowel cancer",
  },
  {
    label: "262",
    value: "Colonoscopy",
  },
  {
    label: "263",
    value: "Colostomy",
  },
  {
    label: "264",
    value: "Colour blindness, see Colour vision deficiency",
  },
  {
    label: "265",
    value: "Colour vision deficiency",
  },
  {
    label: "266",
    value: "Colposcopy",
  },
  {
    label: "267",
    value: "Coma",
  },
  {
    label: "268",
    value: "Combined pill",
  },
  {
    label: "269",
    value: "Common cold",
  },
  {
    label: "270",
    value: "Compartment syndrome",
  },
  {
    label: "271",
    value: "Complementary and alternative medicine",
  },
  {
    label: "272",
    value: "Complex regional pain syndrome",
  },
  {
    label: "273",
    value: "Concussion, see Head injury and concussion",
  },
  {
    label: "274",
    value: "Condoms",
  },
  {
    label: "275",
    value: "Confusion , see Sudden confusion (delirium)",
  },
  {
    label: "276",
    value: "Congenital heart disease",
  },
  {
    label: "277",
    value: "Congenital hip dislocation, see Developmental dysplasia of the hip",
  },
  {
    label: "278",
    value: "Conjunctivitis",
  },
  {
    label: "279",
    value: "Consent to treatment",
  },
  {
    label: "280",
    value: "Constipation",
  },
  {
    label: "281",
    value: "Contact dermatitis",
  },
  {
    label: "282",
    value: "Contraception",
  },
  {
    label: "283",
    value: "Contraceptive implant",
  },
  {
    label: "284",
    value: "Contraceptive injection",
  },
  {
    label: "285",
    value: "Contraceptive patch",
  },
  {
    label: "286",
    value: "Cornea transplant",
  },
  {
    label: "287",
    value: "Corns and calluses",
  },
  {
    label: "288",
    value: "Coronary angioplasty and stent insertion",
  },
  {
    label: "289",
    value: "Coronary artery bypass graft",
  },
  {
    label: "290",
    value: "Coronary heart disease",
  },
  {
    label: "291",
    value: "Coronavirus, see COVID-19",
  },
  {
    label: "292",
    value: "Corticobasal degeneration",
  },
  {
    label: "293",
    value: "Corticosteroid cream, see Topical corticosteroids",
  },
  {
    label: "294",
    value: "Corticosteroids, see Steroids",
  },
  {
    label: "295",
    value: "Cosmetic procedures",
  },
  {
    label: "296",
    value: "Costochondritis",
  },
  {
    label: "297",
    value: "Cough",
  },
  {
    label: "298",
    value: "Coughing up blood",
  },
  {
    label: "299",
    value: "Counselling",
  },
  {
    label: "300",
    value: "COVID-19",
  },
  {
    label: "301",
    value: "Cradle cap",
  },
  {
    label: "302",
    value: "Craniosynostosis",
  },
  {
    label: "303",
    value: "Creutzfeldt-Jakob disease",
  },
  {
    label: "304",
    value: "Crohn's disease",
  },
  {
    label: "305",
    value: "Croup",
  },
  {
    label: "306",
    value: "CT scan",
  },
  {
    label: "307",
    value: "Cushing's syndrome",
  },
  {
    label: "308",
    value: "Cuts and grazes",
  },
  {
    label: "309",
    value: "Cyanosis, see Blue or grey skin or lips",
  },
  {
    label: "310",
    value: "Cyclical vomiting syndrome",
  },
  {
    label: "311",
    value: "Cyclospora",
  },
  {
    label: "312",
    value: "Cystic fibrosis",
  },
  {
    label: "313",
    value: "Cystitis",
  },
  {
    label: "314",
    value: "Cystoscopy",
  },
  {
    label: "315",
    value: "Cytomegalovirus",
  },
  {
    label: "316",
    value: "Dandruff",
  },
  {
    label: "317",
    value: "Deafblindness",
  },
  {
    label: "318",
    value: "Deafness, see Hearing loss",
  },
  {
    label: "319",
    value: "Decongestants",
  },
  {
    label: "320",
    value: "Dehydration",
  },
  {
    label: "321",
    value: "Delirium, see Sudden confusion",
  },
  {
    label: "322",
    value: "Dementia , see Frontotemporal dementia",
  },
  {
    label: "323",
    value: "Dementia , see Vascular dementia",
  },
  {
    label: "324",
    value: "Dementia with Lewy bodies",
  },
  {
    label: "325",
    value: "Dengue",
  },
  {
    label: "326",
    value: "Dental abscess",
  },
  {
    label: "327",
    value: "Dental pain, see Toothache",
  },
  {
    label: "328",
    value: "Dentures",
  },
  {
    label: "329",
    value: "Depression",
  },
  {
    label: "330",
    value: "Depression in adults",
  },
  {
    label: "331",
    value: "Detached retina",
  },
  {
    label: "332",
    value: "Developmental co-ordination disorder  in children",
  },
  {
    label: "333",
    value: "Developmental dysplasia of the hip",
  },
  {
    label: "334",
    value: "DEXA scan, see Bone density scan",
  },
  {
    label: "335",
    value: "Diabetes",
  },
  {
    label: "336",
    value: "Diabetes , see Type 1 diabetes",
  },
  {
    label: "337",
    value: "Diabetes , see Type 2 diabetes",
  },
  {
    label: "338",
    value: "Diabetes in pregnancy, see Gestational diabetes",
  },
  {
    label: "339",
    value: "Diabetes insipidus",
  },
  {
    label: "340",
    value: "Diabetic eye screening",
  },
  {
    label: "341",
    value: "Diabetic ketoacidosis",
  },
  {
    label: "342",
    value: "Diabetic retinopathy",
  },
  {
    label: "343",
    value: "Dialysis",
  },
  {
    label: "344",
    value: "Diaphragm or cap",
  },
  {
    label: "345",
    value: "Diarrhoea and vomiting",
  },
  {
    label: "346",
    value: "Diarrhoea, see Diarrhoea and vomiting",
  },
  {
    label: "347",
    value: "Differences in sex development",
  },
  {
    label: "348",
    value: "DiGeorge syndrome",
  },
  {
    label: "349",
    value: "Diphtheria",
  },
  {
    label: "350",
    value: "Discoid eczema",
  },
  {
    label: "351",
    value: "Dislocated kneecap",
  },
  {
    label: "352",
    value: "Dislocated shoulder",
  },
  {
    label: "353",
    value: "Disorders of consciousness",
  },
  {
    label: "354",
    value: "Dissociative disorders",
  },
  {
    label: "355",
    value: "Diverticular disease and diverticulitis",
  },
  {
    label: "356",
    value: "Dizziness",
  },
  {
    label: "357",
    value: "Do not attempt cardiopulmonary resuscitation  decisions",
  },
  {
    label: "358",
    value: "Dog bites, see Animal and human bites",
  },
  {
    label: "359",
    value: "Double vision",
  },
  {
    label: "360",
    value: "Down's syndrome",
  },
  {
    label: "361",
    value: "Dry eyes",
  },
  {
    label: "362",
    value: "Dry lips, see Sore or dry lips",
  },
  {
    label: "363",
    value: "Dry mouth",
  },
  {
    label: "364",
    value: "Dupuytren's contracture",
  },
  {
    label: "365",
    value: "DVT",
  },
  {
    label: "366",
    value: "Dwarfism, see Restricted growth",
  },
  {
    label: "367",
    value: "Dysarthria",
  },
  {
    label: "368",
    value: "Dysentery",
  },
  {
    label: "369",
    value: "Dyslexia",
  },
  {
    label: "370",
    value: "Dysphagia",
  },
  {
    label: "371",
    value: "Dyspraxia  in adults",
  },
  {
    label: "372",
    value:
      "Dyspraxia in children, see Developmental co-ordination disorder  in children",
  },
  {
    label: "373",
    value: "Dystonia",
  },
  {
    label: "374",
    value: "Ear infections",
  },
  {
    label: "375",
    value: "Earache",
  },
  {
    label: "376",
    value: "Eardrum , see Perforated eardrum",
  },
  {
    label: "377",
    value: "Early menopause",
  },
  {
    label: "378",
    value: "Early or delayed puberty",
  },
  {
    label: "379",
    value: "Earwax build-up",
  },
  {
    label: "380",
    value: "Eating disorders",
  },
  {
    label: "381",
    value: "Ebola virus disease",
  },
  {
    label: "382",
    value: "Echocardiogram",
  },
  {
    label: "383",
    value: "Ectopic beats, see Heart palpitations",
  },
  {
    label: "384",
    value: "Ectopic pregnancy",
  },
  {
    label: "385",
    value: "Ectropion",
  },
  {
    label: "386",
    value: "Eczema , see Atopic eczema",
  },
  {
    label: "387",
    value: "Eczema , see Contact dermatitis",
  },
  {
    label: "388",
    value: "Eczema , see Discoid eczema",
  },
  {
    label: "389",
    value: "Eczema , see Varicose eczema",
  },
  {
    label: "390",
    value: "Edwards' syndrome",
  },
  {
    label: "391",
    value: "Ehlers-Danlos syndromes",
  },
  {
    label: "392",
    value: "Ejaculation problems",
  },
  {
    label: "393",
    value: "Elbow and arm pain",
  },
  {
    label: "394",
    value: "Electrocardiogram",
  },
  {
    label: "395",
    value: "Electroencephalogram",
  },
  {
    label: "396",
    value: "Electrolyte test",
  },
  {
    label: "397",
    value: "Emergency contraceptive pill",
  },
  {
    label: "398",
    value: "Emollients",
  },
  {
    label: "399",
    value: "Empyema",
  },
  {
    label: "400",
    value: "Encephalitis",
  },
  {
    label: "401",
    value: "Endocarditis",
  },
  {
    label: "402",
    value: "Endometrial cancer, see Womb  cancer",
  },
  {
    label: "403",
    value: "Endometriosis",
  },
  {
    label: "404",
    value: "Endoscopy",
  },
  {
    label: "405",
    value: "Enhanced recovery",
  },
  {
    label: "406",
    value: "Epidermolysis bullosa",
  },
  {
    label: "407",
    value: "Epididymitis",
  },
  {
    label: "408",
    value: "Epidural",
  },
  {
    label: "409",
    value: "Epiglottitis",
  },
  {
    label: "410",
    value: "Epilepsy",
  },
  {
    label: "411",
    value: "Erectile dysfunction",
  },
  {
    label: "412",
    value: "Erythema multiforme",
  },
  {
    label: "413",
    value: "Erythema nodosum",
  },
  {
    label: "414",
    value: "Erythrocytosis",
  },
  {
    label: "415",
    value: "Erythromelalgia",
  },
  {
    label: "416",
    value: "Essential tremor, see Tremor or shaking hands",
  },
  {
    label: "417",
    value: "Euthanasia and assisted suicide",
  },
  {
    label: "418",
    value: "Excessive daytime sleepiness",
  },
  {
    label: "419",
    value: "Excessive hair growth",
  },
  {
    label: "420",
    value: "Excessive sweating",
  },
  {
    label: "421",
    value: "Excessive thirst",
  },
  {
    label: "422",
    value: "Eye cancer",
  },
  {
    label: "423",
    value: "Eye cancer in children, see Retinoblastoma",
  },
  {
    label: "424",
    value: "Eye flashes, see Floaters and flashes in the eyes",
  },
  {
    label: "425",
    value: "Eye floaters, see Floaters and flashes in the eyes",
  },
  {
    label: "426",
    value: "Eye infection , see Herpes simplex eye infections",
  },
  {
    label: "427",
    value: "Eye injuries",
  },
  {
    label: "428",
    value: "Eye tests for children",
  },
  {
    label: "429",
    value: "Eyelid problems",
  },
  {
    label: "430",
    value: "Fabricated or induced illness",
  },
  {
    label: "431",
    value: "Face blindness, see Prosopagnosia",
  },
  {
    label: "432",
    value: "Fainting",
  },
  {
    label: "433",
    value: "Falls",
  },
  {
    label: "434",
    value: "Farting",
  },
  {
    label: "435",
    value: "Febrile seizures",
  },
  {
    label: "436",
    value: "Feeling sick",
  },
  {
    label: "437",
    value: "Female genital mutilation",
  },
  {
    label: "438",
    value: "Female sterilisation",
  },
  {
    label: "439",
    value: "Femoral hernia repair",
  },
  {
    label: "440",
    value: "Fever in adults, see High temperature  in adults",
  },
  {
    label: "441",
    value: "Fever in children, see High temperature  in children",
  },
  {
    label: "442",
    value: "Fibroids",
  },
  {
    label: "443",
    value: "Fibromyalgia",
  },
  {
    label: "444",
    value: "Finger pain",
  },
  {
    label: "445",
    value: "First aid",
  },
  {
    label: "446",
    value: "Fits , see Febrile seizures",
  },
  {
    label: "447",
    value: "Fits , see What to do if someone has a seizure (fit)",
  },
  {
    label: "448",
    value: "Flat feet",
  },
  {
    label: "449",
    value: "Flat head syndrome, see Plagiocephaly and brachycephaly",
  },
  {
    label: "450",
    value: "Flatulence, see Farting",
  },
  {
    label: "451",
    value: "Floaters and flashes in the eyes",
  },
  {
    label: "452",
    value: "Flu",
  },
  {
    label: "453",
    value: "Flu vaccine",
  },
  {
    label: "454",
    value: "Fluoride",
  },
  {
    label: "455",
    value: "Foetal alcohol spectrum disorder",
  },
  {
    label: "456",
    value: "Food allergy",
  },
  {
    label: "457",
    value: "Food colours and hyperactivity",
  },
  {
    label: "458",
    value: "Food intolerance",
  },
  {
    label: "459",
    value: "Food poisoning",
  },
  {
    label: "460",
    value: "Foot drop",
  },
  {
    label: "461",
    value: "Foot pain",
  },
  {
    label: "462",
    value: "Foreskin problems, see Tight foreskin",
  },
  {
    label: "463",
    value: "Frontotemporal dementia",
  },
  {
    label: "464",
    value: "Frostbite",
  },
  {
    label: "465",
    value: "Frozen shoulder",
  },
  {
    label: "466",
    value:
      "Functional neurological disorder, see Medically unexplained symptoms",
  },
  {
    label: "467",
    value: "Fungal nail infection",
  },
  {
    label: "468",
    value: "G",
  },
  {
    label: "469",
    value: "Gallbladder cancer",
  },
  {
    label: "470",
    value: "Gallbladder pain, see Acute cholecystitis",
  },
  {
    label: "471",
    value: "Gallbladder removal",
  },
  {
    label: "472",
    value: "Gallstones",
  },
  {
    label: "473",
    value: "Ganglion cyst",
  },
  {
    label: "474",
    value: "Gangrene",
  },
  {
    label: "475",
    value: "Gastrectomy",
  },
  {
    label: "476",
    value: "Gastritis",
  },
  {
    label: "477",
    value: "Gastro-oesophageal reflux disease , see Heartburn and acid reflux",
  },
  {
    label: "478",
    value: "Gastroenteritis, see Diarrhoea and vomiting",
  },
  {
    label: "479",
    value: "Gastroparesis",
  },
  {
    label: "480",
    value: "Gastroscopy",
  },
  {
    label: "481",
    value: "Gender dysphoria",
  },
  {
    label: "482",
    value: "General anaesthesia",
  },
  {
    label: "483",
    value: "Generalised anxiety disorder in adults",
  },
  {
    label: "484",
    value: "Genetic and genomic testing",
  },
  {
    label: "485",
    value:
      "Genetic test for cancer gene, see Predictive genetic tests for cancer risk genes",
  },
  {
    label: "486",
    value: "Genital herpes",
  },
  {
    label: "487",
    value: "Genital warts",
  },
  {
    label: "488",
    value: "German measles, see Rubella",
  },
  {
    label: "489",
    value: "Gestational diabetes",
  },
  {
    label: "490",
    value: "Giant cell arteritis, see Temporal arteritis",
  },
  {
    label: "491",
    value: "Giardiasis",
  },
  {
    label: "492",
    value: "Gigantism, see Acromegaly",
  },
  {
    label: "493",
    value: "Gilbert's syndrome",
  },
  {
    label: "494",
    value: "Glandular fever",
  },
  {
    label: "495",
    value: "Glaucoma",
  },
  {
    label: "496",
    value: "Glomerulonephritis",
  },
  {
    label: "497",
    value: "Glue ear",
  },
  {
    label: "498",
    value: "Glutaric aciduria type 1",
  },
  {
    label: "499",
    value: "Goitre",
  },
  {
    label: "500",
    value: "Gonorrhoea",
  },
  {
    label: "501",
    value: "Gout",
  },
  {
    label: "502",
    value: "Granuloma annulare",
  },
  {
    label: "503",
    value: "Granulomatosis with polyangiitis",
  },
  {
    label: "504",
    value: "Group B strep",
  },
  {
    label: "505",
    value: "Growing pains",
  },
  {
    label: "506",
    value: "Guillain-Barré syndrome",
  },
  {
    label: "507",
    value: "Gum disease",
  },
  {
    label: "508",
    value: "H",
  },
  {
    label: "509",
    value: "Haemochromatosis",
  },
  {
    label: "510",
    value: "Haemophilia",
  },
  {
    label: "511",
    value: "Haemophilus influenzae type b",
  },
  {
    label: "512",
    value: "Haemorrhoids, see Piles",
  },
  {
    label: "513",
    value: "Hair dye reactions",
  },
  {
    label: "514",
    value: "Hair loss",
  },
  {
    label: "515",
    value: "Halitosis, see Bad breath",
  },
  {
    label: "516",
    value: "Hallucinations and hearing voices",
  },
  {
    label: "517",
    value: "Hamstring injury",
  },
  {
    label: "518",
    value: "Hand pain",
  },
  {
    label: "519",
    value: "Hand tendon repair",
  },
  {
    label: "520",
    value: "Hand, foot and mouth disease",
  },
  {
    label: "521",
    value: "Having an operation",
  },
  {
    label: "522",
    value: "Hay fever",
  },
  {
    label: "523",
    value: "Head and neck cancer",
  },
  {
    label: "524",
    value: "Head injury and concussion",
  },
  {
    label: "525",
    value: "Head lice and nits",
  },
  {
    label: "526",
    value: "Headaches",
  },
  {
    label: "527",
    value: "Headaches , see Hormone headaches",
  },
  {
    label: "528",
    value: "Headaches , see Tension headaches",
  },
  {
    label: "529",
    value: "Health anxiety",
  },
  {
    label: "530",
    value: "Hearing aids and implants",
  },
  {
    label: "531",
    value: "Hearing loss",
  },
  {
    label: "532",
    value: "Hearing tests",
  },
  {
    label: "533",
    value: "Hearing tests for children",
  },
  {
    label: "534",
    value: "Hearing voices, see Hallucinations and hearing voices",
  },
  {
    label: "535",
    value: "Heart attack",
  },
  {
    label: "536",
    value: "Heart block",
  },
  {
    label: "537",
    value: "Heart bypass, see Coronary artery bypass graft",
  },
  {
    label: "538",
    value: "Heart disease , see Coronary heart disease",
  },
  {
    label: "539",
    value: "Heart failure",
  },
  {
    label: "540",
    value: "Heart pain, see Chest pain",
  },
  {
    label: "541",
    value: "Heart palpitations",
  },
  {
    label: "542",
    value: "Heart rhythm problems, see Arrhythmia",
  },
  {
    label: "543",
    value: "Heart valve problems, see Mitral valve problems",
  },
  {
    label: "544",
    value: "Heart valve replacement, see Aortic valve replacement",
  },
  {
    label: "545",
    value: "Heartburn and acid reflux",
  },
  {
    label: "546",
    value: "Heat exhaustion and heatstroke",
  },
  {
    label: "547",
    value: "Heat rash",
  },
  {
    label: "548",
    value: "Heavy periods",
  },
  {
    label: "549",
    value: "Heel pain",
  },
  {
    label: "550",
    value: "Help for suicidal thoughts",
  },
  {
    label: "551",
    value: "Henoch-Schönlein purpura",
  },
  {
    label: "552",
    value: "Hepatitis",
  },
  {
    label: "553",
    value: "Hepatitis A",
  },
  {
    label: "554",
    value: "Hepatitis B",
  },
  {
    label: "555",
    value: "Hepatitis B vaccine",
  },
  {
    label: "556",
    value: "Hepatitis C",
  },
  {
    label: "557",
    value: "Herbal medicines",
  },
  {
    label: "558",
    value: "Hereditary haemorrhagic telangiectasia",
  },
  {
    label: "559",
    value: "Hereditary neuropathy with pressure palsies",
  },
  {
    label: "560",
    value: "Hereditary spastic paraplegia",
  },
  {
    label: "561",
    value: "Hernia",
  },
  {
    label: "562",
    value: "Hernia , see Femoral hernia repair",
  },
  {
    label: "563",
    value: "Hernia , see Hiatus hernia",
  },
  {
    label: "564",
    value: "Hernia , see Inguinal hernia repair",
  },
  {
    label: "565",
    value: "Hernia , see Umbilical hernia repair",
  },
  {
    label: "566",
    value: "Herpes , see Genital herpes",
  },
  {
    label: "567",
    value: "Herpes in babies, see Neonatal herpes",
  },
  {
    label: "568",
    value: "Herpes simplex eye infections",
  },
  {
    label: "569",
    value: "Herpetic whitlow",
  },
  {
    label: "570",
    value: "Hiatus hernia",
  },
  {
    label: "571",
    value: "Hib, see Haemophilus influenzae type b",
  },
  {
    label: "572",
    value: "Hib/MenC vaccine",
  },
  {
    label: "573",
    value: "Hiccups",
  },
  {
    label: "574",
    value: "Hidradenitis suppurativa",
  },
  {
    label: "575",
    value: "High blood pressure",
  },
  {
    label: "576",
    value: "High blood sugar",
  },
  {
    label: "577",
    value: "High cholesterol",
  },
  {
    label: "578",
    value: "High temperature  in adults",
  },
  {
    label: "579",
    value: "High temperature  in children",
  },
  {
    label: "580",
    value: "Hip dysplasia, see Developmental dysplasia of the hip",
  },
  {
    label: "581",
    value: "Hip pain in adults",
  },
  {
    label: "582",
    value: "Hip pain in children",
  },
  {
    label: "583",
    value: "Hip replacement",
  },
  {
    label: "584",
    value: "Hirschsprung's disease",
  },
  {
    label: "585",
    value: "Hirsutism, see Excessive hair growth",
  },
  {
    label: "586",
    value: "HIV and AIDS",
  },
  {
    label: "587",
    value: "Hives",
  },
  {
    label: "588",
    value: "Hoarding disorder",
  },
  {
    label: "589",
    value: "Hodgkin lymphoma",
  },
  {
    label: "590",
    value: "Home oxygen therapy",
  },
  {
    label: "591",
    value: "Homeopathy",
  },
  {
    label: "592",
    value: "Homocystinuria",
  },
  {
    label: "593",
    value: "Hookworm, see Worms in humans",
  },
  {
    label: "594",
    value: "Hormone headaches",
  },
  {
    label: "595",
    value: "HPV vaccine",
  },
  {
    label: "596",
    value: "Hughes syndrome, see Antiphospholipid syndrome",
  },
  {
    label: "597",
    value: "Human bites, see Animal and human bites",
  },
  {
    label: "598",
    value: "Human papillomavirus",
  },
  {
    label: "599",
    value: "Huntington's disease",
  },
  {
    label: "600",
    value: "Hydrocephalus",
  },
  {
    label: "601",
    value: "Hydronephrosis",
  },
  {
    label: "602",
    value: "Hyperacusis, see Noise sensitivity",
  },
  {
    label: "603",
    value: "Hyperhidrosis, see Excessive sweating",
  },
  {
    label: "604",
    value: "Hyperparathyroidism",
  },
  {
    label: "605",
    value: "Hypersomnia, see Excessive daytime sleepiness",
  },
  {
    label: "606",
    value: "Hypertension, see High blood pressure",
  },
  {
    label: "607",
    value: "Hyperthyroidism, see Overactive thyroid",
  },
  {
    label: "608",
    value: "Hypnotherapy",
  },
  {
    label: "609",
    value: "Hypoglycaemia, see Low blood sugar",
  },
  {
    label: "610",
    value: "Hypoparathyroidism",
  },
  {
    label: "611",
    value: "Hypotension, see Low blood pressure",
  },
  {
    label: "612",
    value: "Hypothermia",
  },
  {
    label: "613",
    value: "Hypothyroidism, see Underactive thyroid",
  },
  {
    label: "614",
    value: "Hysterectomy",
  },
  {
    label: "615",
    value: "Hysteroscopy",
  },
  {
    label: "616",
    value: "I",
  },
  {
    label: "617",
    value: "IBD, see Inflammatory bowel disease",
  },
  {
    label: "618",
    value: "IBS, see Irritable bowel syndrome",
  },
  {
    label: "619",
    value: "Ichthyosis",
  },
  {
    label: "620",
    value: "Idiopathic pulmonary fibrosis",
  },
  {
    label: "621",
    value: "Ileostomy",
  },
  {
    label: "622",
    value: "Impetigo",
  },
  {
    label: "623",
    value: "Impotence, see Erectile dysfunction",
  },
  {
    label: "624",
    value: "Incontinence , see Urinary incontinence",
  },
  {
    label: "625",
    value: "Indigestion",
  },
  {
    label: "626",
    value: "Infected piercings",
  },
  {
    label: "627",
    value: "Infertility",
  },
  {
    label: "628",
    value: "Inflammatory bowel disease",
  },
  {
    label: "629",
    value: "Influenza, see Flu",
  },
  {
    label: "630",
    value: "Ingrown hairs",
  },
  {
    label: "631",
    value: "Ingrown toenail",
  },
  {
    label: "632",
    value: "Inguinal hernia repair",
  },
  {
    label: "633",
    value: "Insect bites and stings",
  },
  {
    label: "634",
    value: "Insomnia",
  },
  {
    label: "635",
    value: "Intensive care",
  },
  {
    label: "636",
    value: "Internal  condoms",
  },
  {
    label: "637",
    value: "Intersex, see Differences in sex development",
  },
  {
    label: "638",
    value: "Interstitial cystitis, see Bladder pain syndrome",
  },
  {
    label: "639",
    value: "Intracranial hypertension",
  },
  {
    label: "640",
    value: "Intrauterine insemination",
  },
  {
    label: "641",
    value: "Iron deficiency anaemia",
  },
  {
    label: "642",
    value: "Irregular periods",
  },
  {
    label: "643",
    value: "Irritable bowel syndrome",
  },
  {
    label: "644",
    value: "Irritable hip, see Hip pain in children",
  },
  {
    label: "645",
    value: "Isovaleric acidaemia",
  },
  {
    label: "646",
    value: "Itchy bottom",
  },
  {
    label: "647",
    value: "Itchy skin",
  },
  {
    label: "648",
    value: "IUD  or copper coil",
  },
  {
    label: "649",
    value: "IUS  or hormonal coil",
  },
  {
    label: "650",
    value: "IVF",
  },
  {
    label: "651",
    value: "J",
  },
  {
    label: "652",
    value: "Japanese encephalitis",
  },
  {
    label: "653",
    value: "Jaundice",
  },
  {
    label: "654",
    value: "Jaundice in newborns, see Newborn jaundice",
  },
  {
    label: "655",
    value: "Jaw pain, see Temporomandibular disorder",
  },
  {
    label: "656",
    value: "Jellyfish and other sea creature stings",
  },
  {
    label: "657",
    value: "Jet lag",
  },
  {
    label: "658",
    value: "Joint hypermobility syndrome",
  },
  {
    label: "659",
    value: "Joint pain",
  },
  {
    label: "660",
    value: "K",
  },
  {
    label: "661",
    value: "Kawasaki disease",
  },
  {
    label: "662",
    value: "Keloid scars",
  },
  {
    label: "663",
    value: "Keratosis pilaris",
  },
  {
    label: "664",
    value: "Kidney cancer",
  },
  {
    label: "665",
    value: "Kidney failure, see Chronic kidney disease",
  },
  {
    label: "666",
    value: "Kidney infection",
  },
  {
    label: "667",
    value: "Kidney stones",
  },
  {
    label: "668",
    value: "Klinefelter syndrome",
  },
  {
    label: "669",
    value: "Knee cartilage damage, see Meniscus tear",
  },
  {
    label: "670",
    value: "Knee ligament surgery",
  },
  {
    label: "671",
    value: "Knee pain",
  },
  {
    label: "672",
    value: "Knee replacement",
  },
  {
    label: "673",
    value: "Knock knees",
  },
  {
    label: "674",
    value: "Knocked-out tooth",
  },
  {
    label: "675",
    value: "Kyphosis",
  },
  {
    label: "676",
    value: "L",
  },
  {
    label: "677",
    value: "Labial fusion",
  },
  {
    label: "678",
    value: "Labyrinthitis and vestibular neuritis",
  },
  {
    label: "679",
    value: "Lactate dehydrogenase  test",
  },
  {
    label: "680",
    value: "Lactose intolerance",
  },
  {
    label: "681",
    value: "Lambert-Eaton myasthenic syndrome",
  },
  {
    label: "682",
    value: "Laparoscopy",
  },
  {
    label: "683",
    value: "Laryngeal  cancer",
  },
  {
    label: "684",
    value: "Laryngitis",
  },
  {
    label: "685",
    value: "Laser eye surgery and lens surgery",
  },
  {
    label: "686",
    value: "Laxatives",
  },
  {
    label: "687",
    value: "Lazy eye",
  },
  {
    label: "688",
    value: "Learning disabilities",
  },
  {
    label: "689",
    value: "Leg cramps",
  },
  {
    label: "690",
    value: "Leg ulcer, see Venous leg ulcer",
  },
  {
    label: "691",
    value: "Legionnaires' disease",
  },
  {
    label: "692",
    value: "Leptospirosis",
  },
  {
    label: "693",
    value: "Leukaemia , see Acute lymphoblastic leukaemia",
  },
  {
    label: "694",
    value: "Leukaemia , see Acute myeloid leukaemia",
  },
  {
    label: "695",
    value: "Leukaemia , see Chronic lymphocytic leukaemia",
  },
  {
    label: "696",
    value: "Leukoplakia",
  },
  {
    label: "697",
    value: "Lichen planus",
  },
  {
    label: "698",
    value: "Lichen sclerosus",
  },
  {
    label: "699",
    value: "Limping in children",
  },
  {
    label: "700",
    value: "Lipoedema",
  },
  {
    label: "701",
    value: "Lipoma",
  },
  {
    label: "702",
    value: "Lips , see Sore or dry lips",
  },
  {
    label: "703",
    value: "Listeriosis",
  },
  {
    label: "704",
    value: "Liver cancer",
  },
  {
    label: "705",
    value: "Liver disease",
  },
  {
    label: "706",
    value: "Liver disease , see Alcohol-related liver disease",
  },
  {
    label: "707",
    value: "Local anaesthesia",
  },
  {
    label: "708",
    value: "Long QT syndrome",
  },
  {
    label: "709",
    value: "Long-sightedness",
  },
  {
    label: "710",
    value: "Lost or changed sense of smell",
  },
  {
    label: "711",
    value: "Low blood pressure",
  },
  {
    label: "712",
    value: "Low blood sugar",
  },
  {
    label: "713",
    value: "Low sex drive",
  },
  {
    label: "714",
    value: "Low sperm count",
  },
  {
    label: "715",
    value: "Low white blood cell count",
  },
  {
    label: "716",
    value: "Lower back pain, see Back pain",
  },
  {
    label: "717",
    value: "Lumbago, see Back pain",
  },
  {
    label: "718",
    value: "Lumbar decompression surgery",
  },
  {
    label: "719",
    value: "Lumbar puncture",
  },
  {
    label: "720",
    value: "Lumps",
  },
  {
    label: "721",
    value: "Lung cancer",
  },
  {
    label: "722",
    value: "Lung health checks",
  },
  {
    label: "723",
    value: "Lupus",
  },
  {
    label: "724",
    value: "Lyme disease",
  },
  {
    label: "725",
    value: "Lymphoedema",
  },
  {
    label: "726",
    value: "M",
  },
  {
    label: "727",
    value: "Macular degeneration , see Age-related macular degeneration (AMD)",
  },
  {
    label: "728",
    value: "Macular hole",
  },
  {
    label: "729",
    value: "Magnesium test",
  },
  {
    label: "730",
    value: "Malaria",
  },
  {
    label: "731",
    value: "Male menopause, see The 'male menopause'",
  },
  {
    label: "732",
    value: "Male sterilisation, see Vasectomy",
  },
  {
    label: "733",
    value: "Malignant brain tumour",
  },
  {
    label: "734",
    value: "Mallet finger",
  },
  {
    label: "735",
    value: "Malnutrition",
  },
  {
    label: "736",
    value: "Mammogram, see Breast screening",
  },
  {
    label: "737",
    value: "Maple syrup urine disease",
  },
  {
    label: "738",
    value: "Marfan syndrome",
  },
  {
    label: "739",
    value: "Mastectomy",
  },
  {
    label: "740",
    value: "Mastitis",
  },
  {
    label: "741",
    value: "Mastocytosis",
  },
  {
    label: "742",
    value: "Mastoiditis",
  },
  {
    label: "743",
    value: "MCADD",
  },
  {
    label: "744",
    value: "Measles",
  },
  {
    label: "745",
    value: "Medical cannabis",
  },
  {
    label: "746",
    value: "Medically unexplained symptoms",
  },
  {
    label: "747",
    value: "Medicines information",
  },
  {
    label: "748",
    value: "Melanoma skin cancer",
  },
  {
    label: "749",
    value: "Memory loss",
  },
  {
    label: "750",
    value: "MenACWY vaccine",
  },
  {
    label: "751",
    value: "MenB vaccine",
  },
  {
    label: "752",
    value: "Meningitis",
  },
  {
    label: "753",
    value: "Meniscus tear",
  },
  {
    label: "754",
    value: "Menopause",
  },
  {
    label: "755",
    value: "Menopause , see Early menopause",
  },
  {
    label: "756",
    value: "Menstrual pain, see Period pain",
  },
  {
    label: "757",
    value: "Mesothelioma",
  },
  {
    label: "758",
    value: "Metabolic syndrome",
  },
  {
    label: "759",
    value: "Metallic taste",
  },
  {
    label: "760",
    value: "Metatarsalgia, see Pain in the ball of the foot",
  },
  {
    label: "761",
    value: "Middle East respiratory syndrome",
  },
  {
    label: "762",
    value: "Migraine",
  },
  {
    label: "763",
    value: "Miscarriage",
  },
  {
    label: "764",
    value: "Missed or late periods",
  },
  {
    label: "765",
    value: "Mitral valve problems",
  },
  {
    label: "766",
    value: "MMR  vaccine",
  },
  {
    label: "767",
    value: "Molar pregnancy",
  },
  {
    label: "768",
    value: "Moles",
  },
  {
    label: "769",
    value: "Molluscum contagiosum",
  },
  {
    label: "770",
    value: "Morton's neuroma",
  },
  {
    label: "771",
    value: "Motion sickness",
  },
  {
    label: "772",
    value: "Motor neurone disease",
  },
  {
    label: "773",
    value: "Mouth cancer",
  },
  {
    label: "774",
    value: "Mouth thrush, see Oral thrush",
  },
  {
    label: "775",
    value: "Mouth ulcers",
  },
  {
    label: "776",
    value: "Mpox",
  },
  {
    label: "777",
    value: "MRI scan",
  },
  {
    label: "778",
    value: "MRSA",
  },
  {
    label: "779",
    value: "Mucositis",
  },
  {
    label: "780",
    value: "Multiple myeloma",
  },
  {
    label: "781",
    value: "Multiple sclerosis",
  },
  {
    label: "782",
    value: "Multiple system atrophy",
  },
  {
    label: "783",
    value: "Mumps",
  },
  {
    label: "784",
    value: "Munchausen syndrome",
  },
  {
    label: "785",
    value: "Muscular dystrophy",
  },
  {
    label: "786",
    value: "Myalgic encephalomyelitis or chronic fatigue syndrome",
  },
  {
    label: "787",
    value: "Myasthenia gravis",
  },
  {
    label: "788",
    value: "Myelodysplastic syndrome",
  },
  {
    label: "789",
    value: "Myeloma, see Multiple myeloma",
  },
  {
    label: "790",
    value: "Myopia, see Short-sightedness",
  },
  {
    label: "791",
    value: "Myositis",
  },
  {
    label: "792",
    value: "Ménière's disease",
  },
  {
    label: "793",
    value: "N",
  },
  {
    label: "794",
    value: "Nail fungal infection, see Fungal nail infection",
  },
  {
    label: "795",
    value: "Nail patella syndrome",
  },
  {
    label: "796",
    value: "Nail problems",
  },
  {
    label: "797",
    value: "Nappy rash",
  },
  {
    label: "798",
    value: "Narcolepsy",
  },
  {
    label: "799",
    value: "Nasal and sinus cancer",
  },
  {
    label: "800",
    value: "Nasal polyps",
  },
  {
    label: "801",
    value: "Nasopharyngeal cancer",
  },
  {
    label: "802",
    value: "Natural family planning",
  },
  {
    label: "803",
    value: "Nausea, see Feeling sick",
  },
  {
    label: "804",
    value: "Neck pain",
  },
  {
    label: "805",
    value: "Necrotising fasciitis",
  },
  {
    label: "806",
    value: "Neonatal herpes",
  },
  {
    label: "807",
    value: "Nephrotic syndrome in children",
  },
  {
    label: "808",
    value: "Neuroendocrine tumours",
  },
  {
    label: "809",
    value: "Neuroendocrine tumours and carcinoid syndrome",
  },
  {
    label: "810",
    value: "Neurofibromatosis type 1",
  },
  {
    label: "811",
    value: "Neurofibromatosis type 2",
  },
  {
    label: "812",
    value: "Neuromyelitis optica",
  },
  {
    label: "813",
    value: "Newborn jaundice",
  },
  {
    label: "814",
    value: "Newborn respiratory distress syndrome",
  },
  {
    label: "815",
    value: "NHS screening",
  },
  {
    label: "816",
    value: "Night sweats",
  },
  {
    label: "817",
    value: "Night terrors and nightmares",
  },
  {
    label: "818",
    value: "Nipple discharge",
  },
  {
    label: "819",
    value: "Noise sensitivity",
  },
  {
    label: "820",
    value: "Non-alcoholic fatty liver disease",
  },
  {
    label: "821",
    value: "Non-allergic rhinitis",
  },
  {
    label: "822",
    value: "Non-gonococcal urethritis, see Urethritis",
  },
  {
    label: "823",
    value: "Non-Hodgkin lymphoma",
  },
  {
    label: "824",
    value: "Non-melanoma skin cancer",
  },
  {
    label: "825",
    value: "Noonan syndrome",
  },
  {
    label: "826",
    value: "Norovirus",
  },
  {
    label: "827",
    value: "Nose cancer, see Nasal and sinus cancer",
  },
  {
    label: "828",
    value: "Nosebleed",
  },
  {
    label: "829",
    value: "NSAIDs",
  },
  {
    label: "830",
    value: "O",
  },
  {
    label: "831",
    value: "Obesity",
  },
  {
    label: "832",
    value: "Obsessive compulsive disorder",
  },
  {
    label: "833",
    value: "Obstructive sleep apnoea, see Sleep apnoea",
  },
  {
    label: "834",
    value: "Occupational therapy",
  },
  {
    label: "835",
    value: "Oesophageal atresia and tracheo-oesophageal fistula",
  },
  {
    label: "836",
    value: "Oesophageal cancer",
  },
  {
    label: "837",
    value: "Oral thrush",
  },
  {
    label: "838",
    value: "Orf",
  },
  {
    label: "839",
    value: "Orthodontics",
  },
  {
    label: "840",
    value: "Osteoarthritis",
  },
  {
    label: "841",
    value: "Osteomalacia, see Rickets and osteomalacia",
  },
  {
    label: "842",
    value: "Osteomyelitis",
  },
  {
    label: "843",
    value: "Osteopathy",
  },
  {
    label: "844",
    value: "Osteophyte",
  },
  {
    label: "845",
    value: "Osteoporosis",
  },
  {
    label: "846",
    value: "Otosclerosis",
  },
  {
    label: "847",
    value: "Ovarian cancer",
  },
  {
    label: "848",
    value: "Ovarian cyst",
  },
  {
    label: "849",
    value: "Overactive thyroid",
  },
  {
    label: "850",
    value: "Ovulation pain",
  },
  {
    label: "851",
    value: "Oxygen therapy, see Home oxygen therapy",
  },
  {
    label: "852",
    value: "P",
  },
  {
    label: "853",
    value: "Pacemaker implantation",
  },
  {
    label: "854",
    value: "Paget's disease of bone",
  },
  {
    label: "855",
    value: "Paget's disease of the nipple",
  },
  {
    label: "856",
    value: "Pain in testicles, see Testicle pain",
  },
  {
    label: "857",
    value: "Pain in the back of the hand",
  },
  {
    label: "858",
    value: "Pain in the ball of the foot",
  },
  {
    label: "859",
    value: "Pain in the bottom of the foot",
  },
  {
    label: "860",
    value: "Pain in the palm of the hand",
  },
  {
    label: "861",
    value: "Pain in the top of the foot",
  },
  {
    label: "862",
    value: "Painful bladder syndrome, see Bladder pain syndrome",
  },
  {
    label: "863",
    value: "Painful periods, see Period pain",
  },
  {
    label: "864",
    value: "Palpitations, see Heart palpitations",
  },
  {
    label: "865",
    value: "Pancreatic cancer",
  },
  {
    label: "866",
    value: "Pancreatitis , see Acute pancreatitis",
  },
  {
    label: "867",
    value: "Pancreatitis , see Chronic pancreatitis",
  },
  {
    label: "868",
    value: "Panic disorder",
  },
  {
    label: "869",
    value: "Paralysis",
  },
  {
    label: "870",
    value: "Parkinson's disease",
  },
  {
    label: "871",
    value: "Patau's syndrome",
  },
  {
    label: "872",
    value: "Peak flow test",
  },
  {
    label: "873",
    value: "Pelvic inflammatory disease",
  },
  {
    label: "874",
    value: "Pelvic organ prolapse",
  },
  {
    label: "875",
    value: "Pelvic pain",
  },
  {
    label: "876",
    value: "Pemphigus vulgaris",
  },
  {
    label: "877",
    value: "Penile cancer",
  },
  {
    label: "878",
    value: "Perforated eardrum",
  },
  {
    label: "879",
    value: "Pericarditis",
  },
  {
    label: "880",
    value: "Perimenopause, see Menopause",
  },
  {
    label: "881",
    value: "Period pain",
  },
  {
    label: "882",
    value: "Periods",
  },
  {
    label: "883",
    value: "Periods , see Heavy periods",
  },
  {
    label: "884",
    value: "Periods , see Irregular periods",
  },
  {
    label: "885",
    value: "Periods , see Missed or late periods",
  },
  {
    label: "886",
    value: "Peripheral arterial disease",
  },
  {
    label: "887",
    value: "Peripheral neuropathy",
  },
  {
    label: "888",
    value: "Peritonitis",
  },
  {
    label: "889",
    value: "Persistent trophoblastic disease and choriocarcinoma",
  },
  {
    label: "890",
    value: "Personality disorders",
  },
  {
    label: "891",
    value: "PET scan",
  },
  {
    label: "892",
    value: "Phaeochromocytoma",
  },
  {
    label: "893",
    value: "Phenylketonuria",
  },
  {
    label: "894",
    value: "Phimosis, see Tight foreskin",
  },
  {
    label: "895",
    value: "Phlebitis",
  },
  {
    label: "896",
    value: "Phobias",
  },
  {
    label: "897",
    value: "Phosphate test",
  },
  {
    label: "898",
    value: "Photodynamic therapy",
  },
  {
    label: "899",
    value: "Physiotherapy",
  },
  {
    label: "900",
    value: "Piles",
  },
  {
    label: "901",
    value: "Pilonidal sinus",
  },
  {
    label: "902",
    value: "Pins and needles",
  },
  {
    label: "903",
    value: "PIP breast implants",
  },
  {
    label: "904",
    value: "Pityriasis rosea",
  },
  {
    label: "905",
    value: "Pityriasis versicolor",
  },
  {
    label: "906",
    value: "Plagiocephaly and brachycephaly",
  },
  {
    label: "907",
    value: "Plantar fasciitis",
  },
  {
    label: "908",
    value: "Plastic surgery",
  },
  {
    label: "909",
    value: "Pleurisy",
  },
  {
    label: "910",
    value: "PMS",
  },
  {
    label: "911",
    value: "Pneumococcal vaccine",
  },
  {
    label: "912",
    value: "Pneumonia",
  },
  {
    label: "913",
    value: "Poisoning",
  },
  {
    label: "914",
    value: "Polio",
  },
  {
    label: "915",
    value:
      "Polycystic kidney disease , see Autosomal dominant polycystic kidney disease",
  },
  {
    label: "916",
    value:
      "Polycystic kidney disease , see Autosomal recessive polycystic kidney disease",
  },
  {
    label: "917",
    value: "Polycystic ovary syndrome",
  },
  {
    label: "918",
    value: "Polyhydramnios",
  },
  {
    label: "919",
    value: "Polymorphic light eruption",
  },
  {
    label: "920",
    value: "Polymyalgia rheumatica",
  },
  {
    label: "921",
    value: "Pompholyx",
  },
  {
    label: "922",
    value: "Popliteal cyst, see Baker's cyst",
  },
  {
    label: "923",
    value: "Post-herpetic neuralgia",
  },
  {
    label: "924",
    value: "Post-mortem",
  },
  {
    label: "925",
    value: "Post-polio syndrome",
  },
  {
    label: "926",
    value: "Post-traumatic stress disorder",
  },
  {
    label: "927",
    value: "Postmenopausal bleeding",
  },
  {
    label: "928",
    value: "Postnatal depression",
  },
  {
    label: "929",
    value: "Postpartum psychosis",
  },
  {
    label: "930",
    value: "Postural tachycardia syndrome",
  },
  {
    label: "931",
    value: "Potassium test",
  },
  {
    label: "932",
    value: "Prader-Willi syndrome",
  },
  {
    label: "933",
    value: "Pre-eclampsia",
  },
  {
    label: "934",
    value: "Predictive genetic tests for cancer risk genes",
  },
  {
    label: "935",
    value: "Pregnancy",
  },
  {
    label: "936",
    value: "Premature ejaculation, see Ejaculation problems",
  },
  {
    label: "937",
    value: "Pressure ulcers",
  },
  {
    label: "938",
    value: "Priapism",
  },
  {
    label: "939",
    value: "Prickly heat, see Heat rash",
  },
  {
    label: "940",
    value: "Primary biliary cholangitis",
  },
  {
    label: "941",
    value: "Probiotics",
  },
  {
    label: "942",
    value: "Problems swallowing pills",
  },
  {
    label: "943",
    value: "Proctalgia, see Anal pain",
  },
  {
    label: "944",
    value: "Progestogen-only pill",
  },
  {
    label: "945",
    value: "Progressive supranuclear palsy",
  },
  {
    label: "946",
    value: "Prolapse , see Pelvic organ prolapse",
  },
  {
    label: "947",
    value: "Prosopagnosia",
  },
  {
    label: "948",
    value: "Prostate cancer",
  },
  {
    label: "949",
    value: "Prostate enlargement, see Benign prostate enlargement",
  },
  {
    label: "950",
    value: "Prostate problems",
  },
  {
    label: "951",
    value: "Prostatitis",
  },
  {
    label: "952",
    value: "Psoriasis",
  },
  {
    label: "953",
    value: "Psoriatic arthritis",
  },
  {
    label: "954",
    value: "Psychiatry",
  },
  {
    label: "955",
    value: "Psychosis",
  },
  {
    label: "956",
    value: "Psychotic depression",
  },
  {
    label: "957",
    value: "Puberty , see Early or delayed puberty",
  },
  {
    label: "958",
    value: "Pubic lice",
  },
  {
    label: "959",
    value: "Pudendal neuralgia",
  },
  {
    label: "960",
    value: "Pulmonary embolism",
  },
  {
    label: "961",
    value: "Pulmonary fibrosis, see Idiopathic pulmonary fibrosis",
  },
  {
    label: "962",
    value: "Pulmonary hypertension",
  },
  {
    label: "963",
    value: "Pyoderma gangrenosum",
  },
  {
    label: "964",
    value: "Q",
  },
  {
    label: "965",
    value: "Q fever",
  },
  {
    label: "966",
    value: "Quinsy, see Tonsillitis",
  },
  {
    label: "967",
    value: "R",
  },
  {
    label: "968",
    value: "Rabies",
  },
  {
    label: "969",
    value: "Radiotherapy",
  },
  {
    label: "970",
    value: "Rashes in babies and children",
  },
  {
    label: "971",
    value: "Raynaud's",
  },
  {
    label: "972",
    value: "Reactive arthritis",
  },
  {
    label: "973",
    value: "Rectal bleeding, see Bleeding from the bottom",
  },
  {
    label: "974",
    value: "Rectal cancer, see Bowel cancer",
  },
  {
    label: "975",
    value: "Rectal examination",
  },
  {
    label: "976",
    value: "Red blood cell count",
  },
  {
    label: "977",
    value: "Red eye",
  },
  {
    label: "978",
    value: "Reflux in babies",
  },
  {
    label: "979",
    value: "Renal cancer, see Kidney cancer",
  },
  {
    label: "980",
    value: "Repetitive strain injury",
  },
  {
    label: "981",
    value: "Respiratory tract infections",
  },
  {
    label: "982",
    value: "Restless legs syndrome",
  },
  {
    label: "983",
    value: "Restricted growth",
  },
  {
    label: "984",
    value: "Retinal detachment, see Detached retina",
  },
  {
    label: "985",
    value: "Retinal migraine",
  },
  {
    label: "986",
    value: "Retinoblastoma",
  },
  {
    label: "987",
    value: "Rett syndrome",
  },
  {
    label: "988",
    value: "Reye's syndrome",
  },
  {
    label: "989",
    value: "Rhesus disease",
  },
  {
    label: "990",
    value: "Rheumatic fever",
  },
  {
    label: "991",
    value: "Rheumatoid arthritis",
  },
  {
    label: "992",
    value: "Rhinitis , see Allergic rhinitis",
  },
  {
    label: "993",
    value: "Rickets and osteomalacia",
  },
  {
    label: "994",
    value: "Ringworm",
  },
  {
    label: "995",
    value: "Root canal treatment",
  },
  {
    label: "996",
    value: "Rosacea",
  },
  {
    label: "997",
    value: "Roseola",
  },
  {
    label: "998",
    value: "Rotavirus vaccine",
  },
  {
    label: "999",
    value: "Roundworm, see Worms in humans",
  },
  {
    label: "1000",
    value: "Rubella",
  },
  {
    label: "1001",
    value: "Back to top",
  },
  {
    label: "1002",
    value: "S",
  },
  {
    label: "1003",
    value: "Salivary gland stones",
  },
  {
    label: "1004",
    value: "Sarcoidosis",
  },
  {
    label: "1005",
    value: "Scabies",
  },
  {
    label: "1006",
    value: "Scarlet fever",
  },
  {
    label: "1007",
    value: "Scars",
  },
  {
    label: "1008",
    value: "Schistosomiasis",
  },
  {
    label: "1009",
    value: "Schizophrenia",
  },
  {
    label: "1010",
    value: "Sciatica",
  },
  {
    label: "1011",
    value: "Scleroderma",
  },
  {
    label: "1012",
    value: "Scoliosis",
  },
  {
    label: "1013",
    value: "Scurvy",
  },
  {
    label: "1014",
    value: "Seasonal affective disorder",
  },
  {
    label: "1015",
    value: "Seizures , see Febrile seizures",
  },
  {
    label: "1016",
    value: "Seizures , see What to do if someone has a seizure (fit)",
  },
  {
    label: "1017",
    value: "Selective mutism",
  },
  {
    label: "1018",
    value: "Self-harm",
  },
  {
    label: "1019",
    value: "Sense of smell , see Lost or changed sense of smell",
  },
  {
    label: "1020",
    value: "Sepsis",
  },
  {
    label: "1021",
    value: "Septic arthritis",
  },
  {
    label: "1022",
    value: "Septicaemia, see Sepsis",
  },
  {
    label: "1023",
    value: "Sexually transmitted infections",
  },
  {
    label: "1024",
    value: "Shaking, see Tremor or shaking hands",
  },
  {
    label: "1025",
    value: "Shin pain , see Shin splints",
  },
  {
    label: "1026",
    value: "Shin splints",
  },
  {
    label: "1027",
    value: "Shingles",
  },
  {
    label: "1028",
    value: "Shingles vaccine",
  },
  {
    label: "1029",
    value: "Short-sightedness",
  },
  {
    label: "1030",
    value: "Shortness of breath",
  },
  {
    label: "1031",
    value: "Shoulder impingement",
  },
  {
    label: "1032",
    value: "Shoulder pain",
  },
  {
    label: "1033",
    value: "Sick building syndrome",
  },
  {
    label: "1034",
    value: "Sickle cell disease",
  },
  {
    label: "1035",
    value: "Silicosis",
  },
  {
    label: "1036",
    value: "Sinus cancer, see Nasal and sinus cancer",
  },
  {
    label: "1037",
    value: "Sinusitis",
  },
  {
    label: "1038",
    value: "Sinusitis, see Sinusitis",
  },
  {
    label: "1039",
    value: "Sjögren's syndrome",
  },
  {
    label: "1040",
    value: "Skin abscess",
  },
  {
    label: "1041",
    value: "Skin cancer , see Melanoma skin cancer",
  },
  {
    label: "1042",
    value: "Skin cyst",
  },
  {
    label: "1043",
    value: "Skin picking disorder",
  },
  {
    label: "1044",
    value: "Skin tags",
  },
  {
    label: "1045",
    value: "Slapped cheek syndrome",
  },
  {
    label: "1046",
    value: "Sleep apnoea",
  },
  {
    label: "1047",
    value: "Sleep paralysis",
  },
  {
    label: "1048",
    value: "Sleepwalking",
  },
  {
    label: "1049",
    value: "Slipped disc",
  },
  {
    label: "1050",
    value: "Smelly feet",
  },
  {
    label: "1051",
    value: "Smelly urine",
  },
  {
    label: "1052",
    value: "Smoking , see Stop smoking treatments",
  },
  {
    label: "1053",
    value: "Snake bites",
  },
  {
    label: "1054",
    value: "Snoring",
  },
  {
    label: "1055",
    value: "Social anxiety",
  },
  {
    label: "1056",
    value: "Soft tissue sarcoma",
  },
  {
    label: "1057",
    value: "Soft tissue sarcomas-old",
  },
  {
    label: "1058",
    value: "Soiling",
  },
  {
    label: "1059",
    value: "Solar keratoses, see Actinic keratoses",
  },
  {
    label: "1060",
    value: "Sore lips, see Sore or dry lips",
  },
  {
    label: "1061",
    value: "Sore or dry lips",
  },
  {
    label: "1062",
    value: "Sore or white tongue",
  },
  {
    label: "1063",
    value: "Sore throat",
  },
  {
    label: "1064",
    value: "Sperm count , see Low sperm count",
  },
  {
    label: "1065",
    value: "Spina bifida",
  },
  {
    label: "1066",
    value: "Spinal muscular atrophy",
  },
  {
    label: "1067",
    value: "Spirometry",
  },
  {
    label: "1068",
    value: "Spleen problems and spleen removal",
  },
  {
    label: "1069",
    value: "Spondylolisthesis",
  },
  {
    label: "1070",
    value: "Sprains and strains",
  },
  {
    label: "1071",
    value: "Squint",
  },
  {
    label: "1072",
    value: "Stammering",
  },
  {
    label: "1073",
    value: "Staph infection",
  },
  {
    label: "1074",
    value: "Statins",
  },
  {
    label: "1075",
    value: "Stem cell and bone marrow transplants",
  },
  {
    label: "1076",
    value: "Stent insertion, see Coronary angioplasty and stent insertion",
  },
  {
    label: "1077",
    value: "Sterilisation , see Female sterilisation",
  },
  {
    label: "1078",
    value: "Sterlisation , see Vasectomy",
  },
  {
    label: "1079",
    value: "Steroid cream, see Topical corticosteroids",
  },
  {
    label: "1080",
    value: "Steroid inhalers",
  },
  {
    label: "1081",
    value: "Steroid injections",
  },
  {
    label: "1082",
    value: "Steroid misuse, see Anabolic steroid misuse",
  },
  {
    label: "1083",
    value: "Steroid nasal sprays",
  },
  {
    label: "1084",
    value: "Steroid tablets",
  },
  {
    label: "1085",
    value: "Steroids",
  },
  {
    label: "1086",
    value: "Stevens-Johnson syndrome",
  },
  {
    label: "1087",
    value: "Stillbirth",
  },
  {
    label: "1088",
    value: "Sting or bite , see Insect bites and stings",
  },
  {
    label: "1089",
    value: "Stomach ache",
  },
  {
    label: "1090",
    value: "Stomach bug, see Diarrhoea and vomiting",
  },
  {
    label: "1091",
    value: "Stomach cancer",
  },
  {
    label: "1092",
    value: "Stomach ulcer",
  },
  {
    label: "1093",
    value: "Stop smoking treatments",
  },
  {
    label: "1094",
    value: "Strep A",
  },
  {
    label: "1095",
    value: "Stretch marks",
  },
  {
    label: "1096",
    value: "Stroke",
  },
  {
    label: "1097",
    value: "Stuttering, see Stammering",
  },
  {
    label: "1098",
    value: "Stye",
  },
  {
    label: "1099",
    value: "Subarachnoid haemorrhage",
  },
  {
    label: "1100",
    value: "Subdural haematoma",
  },
  {
    label: "1101",
    value: "Sudden confusion",
  },
  {
    label: "1102",
    value: "Sudden infant death syndrome",
  },
  {
    label: "1103",
    value: "Sunburn",
  },
  {
    label: "1104",
    value: "Superficial thrombophlebitis, see Phlebitis",
  },
  {
    label: "1105",
    value: "Supraventricular tachycardia",
  },
  {
    label: "1106",
    value: "Surgery , see Having an operation (surgery)",
  },
  {
    label: "1107",
    value: "Swallowing pills, see Problems swallowing pills",
  },
  {
    label: "1108",
    value: "Swallowing problems, see Dysphagia",
  },
  {
    label: "1109",
    value: "Sweat rash, see Heat rash",
  },
  {
    label: "1110",
    value: "Sweating , see Excessive sweating (hyperhidrosis)",
  },
  {
    label: "1111",
    value: "Sweating , see Heat rash (prickly heat)",
  },
  {
    label: "1112",
    value: "Sweating at night, see Night sweats",
  },
  {
    label: "1113",
    value: "Swollen ankles, feet and legs",
  },
  {
    label: "1114",
    value: "Swollen arms and hands",
  },
  {
    label: "1115",
    value: "Swollen glands",
  },
  {
    label: "1116",
    value: "Syphilis",
  },
  {
    label: "1117",
    value: "Back to top",
  },
  {
    label: "1118",
    value: "T",
  },
  {
    label: "1119",
    value: "Tailbone  pain",
  },
  {
    label: "1120",
    value: "Tapeworm, see Worms in humans",
  },
  {
    label: "1121",
    value: "Tay-Sachs disease",
  },
  {
    label: "1122",
    value: "TB, see Tuberculosis",
  },
  {
    label: "1123",
    value: "Td/IPV vaccine",
  },
  {
    label: "1124",
    value: "Teeth grinding",
  },
  {
    label: "1125",
    value: "Teeth whitening",
  },
  {
    label: "1126",
    value: "Temporal arteritis",
  },
  {
    label: "1127",
    value: "Temporomandibular disorder",
  },
  {
    label: "1128",
    value: "Tendonitis",
  },
  {
    label: "1129",
    value: "Tennis elbow",
  },
  {
    label: "1130",
    value: "TENS",
  },
  {
    label: "1131",
    value: "Tension headaches",
  },
  {
    label: "1132",
    value: "Testicle lumps and swellings",
  },
  {
    label: "1133",
    value: "Testicle pain",
  },
  {
    label: "1134",
    value: "Testicular cancer",
  },
  {
    label: "1135",
    value: "Tetanus",
  },
  {
    label: "1136",
    value: "Thalassaemia",
  },
  {
    label: "1137",
    value: "The 'male menopause'",
  },
  {
    label: "1138",
    value: "Thirst , see Excessive thirst",
  },
  {
    label: "1139",
    value: "Thoracic outlet syndrome",
  },
  {
    label: "1140",
    value: "Threadworms",
  },
  {
    label: "1141",
    value: "Throat , see Sore throat",
  },
  {
    label: "1142",
    value: "Thrombophilia",
  },
  {
    label: "1143",
    value: "Thrush in men and women",
  },
  {
    label: "1144",
    value: "Thumb pain",
  },
  {
    label: "1145",
    value: "Thyroid cancer",
  },
  {
    label: "1146",
    value: "TIA, see Transient ischaemic attack",
  },
  {
    label: "1147",
    value: "Tick-borne encephalitis",
  },
  {
    label: "1148",
    value: "Tics",
  },
  {
    label: "1149",
    value: "Tight foreskin",
  },
  {
    label: "1150",
    value: "Tinnitus",
  },
  {
    label: "1151",
    value: "Tiredness and fatigue",
  },
  {
    label: "1152",
    value: "Toe pain",
  },
  {
    label: "1153",
    value: "Tongue , see Sore or white tongue",
  },
  {
    label: "1154",
    value: "Tongue-tie",
  },
  {
    label: "1155",
    value: "Tonsillitis",
  },
  {
    label: "1156",
    value: "Tooth , see Chipped, broken or cracked tooth",
  },
  {
    label: "1157",
    value: "Tooth decay",
  },
  {
    label: "1158",
    value: "Tooth knocked out, see Knocked-out tooth",
  },
  {
    label: "1159",
    value: "Toothache",
  },
  {
    label: "1160",
    value: "Topical corticosteroids",
  },
  {
    label: "1161",
    value: "Total iron-binding capacity  and transferrin test",
  },
  {
    label: "1162",
    value: "Total protein test",
  },
  {
    label: "1163",
    value: "Tourette's syndrome",
  },
  {
    label: "1164",
    value: "Toxic shock syndrome",
  },
  {
    label: "1165",
    value: "Toxocariasis",
  },
  {
    label: "1166",
    value: "Toxoplasmosis",
  },
  {
    label: "1167",
    value: "Tracheostomy",
  },
  {
    label: "1168",
    value: "Transient ischaemic attack",
  },
  {
    label: "1169",
    value: "Transurethral resection of the prostate",
  },
  {
    label: "1170",
    value: "Travel vaccinations",
  },
  {
    label: "1171",
    value: "Tremor or shaking hands",
  },
  {
    label: "1172",
    value: "Tremor, see Tremor or shaking hands",
  },
  {
    label: "1173",
    value: "Trichomoniasis",
  },
  {
    label: "1174",
    value: "Trichotillomania",
  },
  {
    label: "1175",
    value: "Trigeminal neuralgia",
  },
  {
    label: "1176",
    value: "Trigger finger",
  },
  {
    label: "1177",
    value: "Trimethylaminuria",
  },
  {
    label: "1178",
    value: "Tuberculosis",
  },
  {
    label: "1179",
    value: "Tuberous sclerosis",
  },
  {
    label: "1180",
    value: "Tummy ache, see Stomach ache",
  },
  {
    label: "1181",
    value: "Tummy bug, see Diarrhoea and vomiting",
  },
  {
    label: "1182",
    value: "Turner syndrome",
  },
  {
    label: "1183",
    value: "Twitching eyes and muscles",
  },
  {
    label: "1184",
    value: "Type 1 diabetes",
  },
  {
    label: "1185",
    value: "Type 2 diabetes",
  },
  {
    label: "1186",
    value: "Typhoid fever",
  },
  {
    label: "1187",
    value: "Typhus",
  },
  {
    label: "1188",
    value: "Back to top",
  },
  {
    label: "1189",
    value: "U",
  },
  {
    label: "1190",
    value: "Ulcerative colitis",
  },
  {
    label: "1191",
    value: "Ultrasound scan",
  },
  {
    label: "1192",
    value: "Umbilical hernia repair",
  },
  {
    label: "1193",
    value: "Underactive thyroid",
  },
  {
    label: "1194",
    value: "Undescended testicles",
  },
  {
    label: "1195",
    value: "Unintentional weight loss",
  },
  {
    label: "1196",
    value: "Upper back pain, see Back pain",
  },
  {
    label: "1197",
    value: "Urethritis",
  },
  {
    label: "1198",
    value: "Urinary catheter",
  },
  {
    label: "1199",
    value: "Urinary incontinence",
  },
  {
    label: "1200",
    value: "Urinary tract infections",
  },
  {
    label: "1201",
    value: "Urine , see Smelly urine",
  },
  {
    label: "1202",
    value: "Urine albumin to creatinine ratio",
  },
  {
    label: "1203",
    value: "Uterine  cancer, see Womb (uterus) cancer",
  },
  {
    label: "1204",
    value: "Uveitis",
  },
  {
    label: "1205",
    value: "Back to top",
  },
  {
    label: "1206",
    value: "V",
  },
  {
    label: "1207",
    value: "Vaginal cancer",
  },
  {
    label: "1208",
    value: "Vaginal discharge",
  },
  {
    label: "1209",
    value: "Vaginal dryness",
  },
  {
    label: "1210",
    value: "Vaginal pain, see Vulvodynia",
  },
  {
    label: "1211",
    value: "Vaginal ring",
  },
  {
    label: "1212",
    value: "Vaginismus",
  },
  {
    label: "1213",
    value: "Vaginitis",
  },
  {
    label: "1214",
    value: "Varicose eczema",
  },
  {
    label: "1215",
    value: "Varicose veins",
  },
  {
    label: "1216",
    value: "Vascular dementia",
  },
  {
    label: "1217",
    value: "Vasculitis",
  },
  {
    label: "1218",
    value: "Vasectomy",
  },
  {
    label: "1219",
    value: "Vegetative state, see Disorders of consciousness",
  },
  {
    label: "1220",
    value: "Venous leg ulcer",
  },
  {
    label: "1221",
    value: "Vertigo",
  },
  {
    label: "1222",
    value: "Vestibular neuritis, see Labyrinthitis and vestibular neuritis",
  },
  {
    label: "1223",
    value: "Vestibular schwannoma, see Acoustic neuroma",
  },
  {
    label: "1224",
    value: "Vitamin B12 or folate deficiency anaemia",
  },
  {
    label: "1225",
    value: "Vitamins and minerals",
  },
  {
    label: "1226",
    value: "Vitiligo",
  },
  {
    label: "1227",
    value: "Vomiting blood",
  },
  {
    label: "1228",
    value: "Vomiting bug, see Norovirus",
  },
  {
    label: "1229",
    value: "Vomiting, see Diarrhoea and vomiting",
  },
  {
    label: "1230",
    value: "Von Willebrand disease",
  },
  {
    label: "1231",
    value: "Vulval cancer",
  },
  {
    label: "1232",
    value: "Vulvodynia",
  },
  {
    label: "1233",
    value: "Back to top",
  },
  {
    label: "1234",
    value: "W",
  },
  {
    label: "1235",
    value: "Warts and verrucas",
  },
  {
    label: "1236",
    value: "Watering eyes",
  },
  {
    label: "1237",
    value: "Weight loss , see Unintentional weight loss",
  },
  {
    label: "1238",
    value: "Weight loss , see Unintentional weight loss",
  },
  {
    label: "1239",
    value: "Weight loss surgery",
  },
  {
    label: "1240",
    value: "Weil's disease, see Leptospirosis",
  },
  {
    label: "1241",
    value: "What to do if someone has a seizure",
  },
  {
    label: "1242",
    value: "Whiplash",
  },
  {
    label: "1243",
    value: "White blood cell count , see Low white blood cell count",
  },
  {
    label: "1244",
    value: "Whitlow finger, see Herpetic whitlow",
  },
  {
    label: "1245",
    value: "Whooping cough",
  },
  {
    label: "1246",
    value: "Wind, see Farting",
  },
  {
    label: "1247",
    value: "Winter vomiting bug, see Norovirus",
  },
  {
    label: "1248",
    value: "Wisdom tooth removal",
  },
  {
    label: "1249",
    value: "Wolff-Parkinson-White syndrome",
  },
  {
    label: "1250",
    value: "Womb  cancer",
  },
  {
    label: "1251",
    value: "Women's health",
  },
  {
    label: "1252",
    value: "Worms in humans",
  },
  {
    label: "1253",
    value: "Wrist pain",
  },
  {
    label: "1254",
    value: "Back to top",
  },
  {
    label: "1255",
    value: "X",
  },
  {
    label: "1256",
    value: "X-ray",
  },
  {
    label: "1257",
    value: "Yellow fever",
  },
  {
    label: "1258",
    value: "Zika virus",
  },
];

export default function DropDownComponent() {
  const [value, setValue] = useState(null);
  const { width } = useWindowDimensions();
  const [postList, setPostList] = useState([]);
  const [name, setName] = useState("");
  //console.log(value);
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    if (value !== "") {
      fetchData();
    }
  }, [value]);

  const fetchData = async () => {
    try {
      console.log(value);
      const response = await fetch(`https://api.nhs.uk/conditions/${value}`, {
        headers: {
          "subscription-key": "13a43248355e41c0beedcd663fc14c2b",
        },
      });
      //const data = await response.json();
      const result = await response.json();
      const data = result.mainEntityOfPage;
      const headlines = data.map((el) => el.headline);
      const data1 = data.map((el) => el.mainEntityOfPage);
      const mappedData = data1.map((el) => {
        if (Array.isArray(el)) {
          return el.map((obj) => ({
            text: obj.text,
          }));
        } else {
          return el;
        }
      });
      const mappedResults = headlines.map((headline, index) => ({
        headline: headline,
        text: mappedData[index][0].text,
      }));
      //console.log(mappedResults);
      setPostList(mappedResults);
    } catch (e) {
      console.log(e);
    }
  };
  const handleInputChange = (text) => {
    setName(text);
    //console.log(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.dropcontainer}>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "gray" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="value"
            valueField="label"
            placeholder={!isFocus ? "What is your Emergency?" : "Search"}
            searchPlaceholder="Enter here"
            value={value}
            onChangeText={handleInputChange}
            defaultValue={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />
          <TouchableOpacity onPress={() => fetchData()} style={styles.button}>
            <Image
              source={require("../assets/send.png")}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={postList}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.titleText}>{item.headline}</Text>
                  {item.text ? (
                    <HTML source={{ html: item.text }} contentWidth={width} />
                  ) : (
                    <Text></Text>
                  )}
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingTop: StatusBar.currentHeight,
  },
  dropcontainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderWidth: 0.5,
    borderRadius: 5,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  dropdown: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 3,
    marginTop: 2,
    marginBottom: 1,
    borderRadius: 10,
    borderColor: "#7393B3",
  },
  button: {
    marginLeft: 10,
    marginRight: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
    backgroundColor: "white",
    fontFamily: "Georgia",
    padding: 20,
  },
  titleText: {
    fontSize: 30,
    color: "#00008B",
  },
  icon: {
    marginRight: 5,
  },
  buttonImage: {
    width: 24,
    height: 24,
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
