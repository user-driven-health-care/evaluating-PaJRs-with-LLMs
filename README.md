# Evaluating PaJRs with LLMs: A Guide

## The basics

### What are PaJRs?
- [ ] Todo - Summarize and link to paper about PaJRs
- [ ] Todo - Summarize and link to paper about CBBLE

### Writing PaJRs

- [ ] Todo - Summarize and link to blog post explaining how to write PaJRs

### What are LLMs?

LLMs stand for large language models; they take a question as input (called a `prompt`) and provide a well structured, informative answer (called a `response`), based on the data they have been trained with. 

Here is an example of a `prompt`...
```
Who founded the Roman Empire and tell me that person's story in 3 lines?
```
... and here is the `response`. 
```
The Roman Empire was founded by Augustus, originally known as Gaius Octavius Thurinus.
He was the grandnephew and adopted son of Julius Caesar, rising to power after defeating
Mark Antony and Cleopatra in the Battle of Actium in 31 BCE. Augustus ushered in a period
of relative peace and stability known as the Pax Romana, consolidating Rome's power and
instituting significant political reforms during his rule.
```

While LLMs are knowledgeable and provide the right answers most of the time, often they `hallucinate` or in other words provide non-factual information. Hence it is important to fact check the answer from an LLM. LLMs also falter when posed with certain types of logic questions. 

- [ ] Todo - Add link to paper that evaluate what LLMs are good and bad at.

### Accessing LLMs

LLMs can be accessed via a web browser, over messengers such as Whatsapp or programmatically via an API. Popular LLMs include OpenAI's ChatGPT, Google's Bard (both of them closed source and proprietary, but hosted by OpenAI and Google) and Meta's Llama 2 which is open source but needs to be hosted by you. While ChatGPT and Bard both answer health related queries, there are specific LLMs trained on medical data such as Beyond Health's August and Google's Med-PaLM. 

#### Accessing ChatGPT
Goto [https://chat.openai.com](https://chat.openai.com) to access ChatGPT on the web. You will need to sign in via your Google account or create a new account. 

ChatGPT3.5 is available at no cost but is a previous version ChatGPT 3.5, it is a bit slow, doesn't provide API access and doesn't have features like plugins/extensions. $20 subscription provides access to ChatGPT 4.0, fast responses, API access and availability of all plugins/extensions. 

#### Accessing Bard
Goto [https://bard.google.com](https://bard.google.com) to access Google's Bard on the web. You will need to sign in via your Google account.

Bard is available at no cost - this includes the web version and the access via API. It is said to be not as accurate as OpenAI's ChatGPT, especially on health questions.

#### Accessing August
Goto [https://meetaugust.ai/wa](https://meetaugust.ai/wa) or start chatting with +918738030604 on Whatsapp to access Beyond Health's August on Whatsapp. You will need to sign in via phone number+OTP.

August web version is available at no cost. It is unclear if it has API access. 

---

## Getting started with prompts

For the purpose of being able to evaluate PaJRs with LLMs, we'll focus on two prompt types. 

### Prompts for evaluating writing

LLMs can critically evaluate writing on any topic and spot gaps in logic, reasoning, et al. Here is an example. 

`Prompt`
```
Can you critically evaluate the writeup below to check for sound logic and reasoning. What are the gaps?

The root cause of the Koyna earthquake, which occurred on December 10, 1967, in the Koyna region of Maharashtra, India, was associated with reservoir-induced seismicity (RIS). Specifically, it was caused by the impoundment of the Koyna Dam reservoir.

Reservoir-induced seismicity occurs when the filling of a large reservoir behind a dam, such as the Koyna Dam, causes changes in stress and pressure on the Earth's crust. When water is impounded behind a dam, it increases the weight and pressure on the underlying rocks. This additional stress can lead to the reactivation of existing geological faults or the creation of new fractures in the Earth's crust. When the accumulated stress along these fault lines exceeds the strength of the rocks, it is released in the form of an earthquake.

In the case of the Koyna earthquake, the impoundment of the Koyna Dam reservoir led to a significant increase in stress in the region, ultimately causing the release of energy in the form of a powerful earthquake. The Koyna earthquake had a magnitude of 6.3 and resulted in significant damage and loss of life in the affected area. It is one of the most well-documented cases of reservoir-induced seismicity in the world and serves as an important example of how human activities, such as dam construction, can induce earthquakes.
```
`Response`
```
The provided write-up offers a generally accurate explanation of the Koyna earthquake and its association with reservoir-induced seismicity (RIS). However, there are some critical aspects that should be considered for a more comprehensive and accurate assessment:

1. **Overemphasis on Reservoir-Induced Seismicity (RIS):** While it correctly identifies RIS as a contributing factor, it may give the impression that the Koyna earthquake was solely caused by the impoundment of the Koyna Dam reservoir. It's essential to highlight that RIS is one of several factors contributing to seismic activity in the region.

2. **Complexity of Seismic Activity:** The write-up simplifies the relationship between reservoir filling and seismic activity. Seismic events are usually the result of a combination of factors, including natural tectonic processes, local geological conditions, and human activities like reservoir impoundment. The Koyna earthquake, for instance, was influenced by the broader tectonic context of the region, not just reservoir impoundment.

3. **Magnitude and Depth:** While it mentions the magnitude of the Koyna earthquake (6.3), it doesn't provide information about its depth. Earthquake depth is a crucial factor in understanding their causes and impacts.

4. **Lack of Historical Context:** The write-up could benefit from providing historical context, mentioning whether there were prior seismic events in the region and their magnitudes. This would help in understanding the seismic activity's evolution and recurring patterns.

5. **Scientific Data and Research:** A more comprehensive evaluation should include references to scientific studies and research on the Koyna earthquake. Citing authoritative sources would enhance the credibility of the information presented.

6. **Mitigation Measures:** It might be useful to discuss the measures taken to manage and mitigate the risk of reservoir-induced seismicity in the Koyna region, such as monitoring and regulating water levels.

In summary, while the write-up offers a reasonable overview of the Koyna earthquake and its connection to reservoir-induced seismicity, it could benefit from a more nuanced and comprehensive discussion that considers the broader geological and tectonic factors at play, historical context, and references to scientific research. This would provide a more accurate and well-rounded understanding of the event.
```


LLMs are also familiar with common frameworks used to evaluate writing e.g. Bloom's taxonomy. 

`Prompt`
```
Can you critically evaluate the following writeup using Bloom's taxonomy?

The root cause of the Koyna earthquake, which occurred on December 10, 1967, in the Koyna region of Maharashtra, India, was associated with reservoir-induced seismicity (RIS). Specifically, it was caused by the impoundment of the Koyna Dam reservoir.

Reservoir-induced seismicity occurs when the filling of a large reservoir behind a dam, such as the Koyna Dam, causes changes in stress and pressure on the Earth's crust. When water is impounded behind a dam, it increases the weight and pressure on the underlying rocks. This additional stress can lead to the reactivation of existing geological faults or the creation of new fractures in the Earth's crust. When the accumulated stress along these fault lines exceeds the strength of the rocks, it is released in the form of an earthquake.

In the case of the Koyna earthquake, the impoundment of the Koyna Dam reservoir led to a significant increase in stress in the region, ultimately causing the release of energy in the form of a powerful earthquake. The Koyna earthquake had a magnitude of 6.3 and resulted in significant damage and loss of life in the affected area. It is one of the most well-documented cases of reservoir-induced seismicity in the world and serves as an important example of how human activities, such as dam construction, can induce earthquakes.
```
`Response`
```
Using Bloom's Taxonomy, we can evaluate the provided write-up in terms of cognitive levels, from lower-order thinking skills (remembering and understanding) to higher-order thinking skills (analyzing, evaluating, and creating).

1. **Remembering:** The write-up accurately recalls facts about the Koyna earthquake, its date, location, and the concept of reservoir-induced seismicity (RIS).

2. **Understanding:** The write-up demonstrates an understanding of the causal relationship between the impoundment of the Koyna Dam reservoir and the earthquake. It explains how increased stress and pressure on the Earth's crust can lead to seismic events.

3. **Analyzing:** The write-up could benefit from a deeper level of analysis. It does not delve into the geological or tectonic factors specific to the Koyna region that might have contributed to the earthquake. Additionally, it doesn't explore the broader implications or consequences of RIS beyond this specific case.

4. **Evaluating:** There is some evaluation in the write-up when it mentions that the Koyna earthquake is "one of the most well-documented cases of reservoir-induced seismicity." However, it lacks a critical examination of the potential limitations or controversies associated with this claim. Furthermore, it doesn't assess the significance of this event in the context of earthquake research and risk mitigation.

5. **Creating:** The write-up does not engage in higher-level creative thinking, such as proposing potential solutions or strategies to mitigate the risks associated with RIS or suggesting how future dam projects might minimize their impact on seismic activity.

In summary, the write-up primarily operates at the "remembering" and "understanding" levels of Bloom's Taxonomy. While it effectively communicates basic information about the Koyna earthquake and RIS, it could be improved by incorporating more in-depth analysis, critical evaluation, and creative thinking to provide a more comprehensive and insightful perspective on the topic.
```

### Prompts for healthcare
> ⚠️ Warning! LLMs are not doctors. Always validate the output from LLMs with a real doctor. 

LLMs are useful in providing explanation for medical terms. 

`Prompt`
```
Ceribro vascular accident with Acute Infract in right occiputal, parital and frontal regions - can you explain this?
```
`Response`
```
Certainly, a "cerebrovascular accident" (CVA) is another term for a stroke. In this case, the stroke has occurred in the brain's right occipital, parietal, and frontal regions. The terms "occipital," "parietal," and "frontal" refer to specific areas of the brain. An "acute infarct" indicates that there is an area of damaged or dead brain tissue due to a lack of blood supply, usually caused by a blockage in a blood vessel. This type of stroke can lead to various neurological symptoms depending on the functions associated with those brain regions, such as vision, sensation, and motor control. If you or someone you know is dealing with this situation, it's important to consult a medical professional for appropriate guidance and treatment.
```

LLMs are also useful for summarizing lots of text. 

`Prompt`
```
Can you provide the following organized by year, in chronological order - 
c/o spasm of fingers of upper limbs with tremors since 3 days , excessive sweating , calf muscle pain and generalised weakness since 3 days . 

History of presenting illness:
Patient was apparently normal 10 years ago then he had severe stomach pain and vomitings for which he was admitted to the hospital and was diagnosed to have pancreatitis, he underwent surgery For that and was discharged.After 5 years he went to hospital with complaints of weight loss and weakness,there he was diagnosed with diabetes and was put on oral hypoglycemic drugs , his sugar levels weren’t controlled so he was shifted to insulin . (Past 6 years he is on insulin ) . 4 months ago he had an episode of seizures associated with up rolling of upballs which lasted for one minute, 5 episodes occurred in 30 minutes and in between each episode he had no memory of what had happened. He was admitted in KIMS hospital and was discharged after 5 days . He also has delusional episodes at night. Since past one week he has spasm of fingers of upper limb with tremors and has decreased pitch of voice . 

Patient has been smoking since 15 years (10 cigarettes per day). Alcoholic since 15 years. He drinks every 2 to 3 months ( 1 week binge drinking  and stops drinking for 2 months ) he has withdrawal symptoms in between drinking episodes ( tremors) .

Daily routine: 

Before DM(Daily routine)
6 years back he used to do  JCB  business.He wakes up at 7 .Goes from nkp to kattangur, before  having bf.He usually has his bf at 10 and lunch at 2pm .He comes back at 8-9pm ,has his dinner at  and sleeps around 10 am. One day all of the sudden loss of weight for which he went to a local hospital (yashoda) and was found to have DM type 2 (540mg/dl) and was given medication( insulin).He stopped going to work since then and took rest at his home.

After DM
Patient wakes up at 4 am in the morning and collects milk from buffalos and come back to home by 7.30 and supply milk till 9.30am.Takes his breakfast at 10 am and then takes rest.He has lunch at 1 pm and takes afternoon nap.At 4pm again he goes to buffalo farm and collects milk and supply.Comes back to home by 7.30 he will have his dinner by 9pm and goes to bed by 10pm.

Past history:
History of trauma to the Achilles tendon in 2007 underwent tendon repair surgery. H/o pancreatitis 10 years ago , underwent surgery. H/o seizures 4 months ago . K/c/o DM since 7 years. N/k/ c/o HTN ,CVA,CAD ,ASTHMA 
```
`Response`
```
Organized by year, in chronological order:

1. 10 years ago:
   - Severe stomach pain and vomitings led to hospital admission and diagnosis of pancreatitis. Underwent surgery for pancreatitis.

2. 6 years back (before DM):
   - Engaged in JCB (construction equipment) business.
   - Woke up at 7 am, went from NKP to Kattangur before having breakfast.
   - Had breakfast at 10 am and lunch at 2 pm.
   - Returned home around 8-9 pm, had dinner, and slept around 10 am.

3. 5 years ago:
   - Visited the hospital with complaints of weight loss and weakness.
   - Diagnosed with diabetes and started on oral hypoglycemic drugs.
   - Due to uncontrolled sugar levels, shifted to insulin therapy.

4. 4 months ago:
   - Experienced seizures with up rolling of eyeballs, lasting for one minute.
   - Five episodes occurred in 30 minutes with memory gaps between episodes.
   - Admitted to KIMS hospital for 5 days.

5. Past 2 months:
   - Nighttime delusional episodes.

6. Since past 1 week:
   - Experiencing spasm of fingers of upper limbs with tremors and decreased pitch of voice.

7. Since 15 years ago:
   - Smoking 10 cigarettes per day.

8. Since 15 years ago:
   - Alcoholic behavior - drinks every 2 to 3 months, binge drinking for 1 week, and then stops for 2 months.
   - Experiences tremors as withdrawal symptoms between drinking episodes.

9. 2007:
   - History of trauma to the Achilles tendon, underwent tendon repair surgery.

Medical conditions:
- 10 years ago: Pancreatitis (surgery for treatment).
- 7 years ago: Diagnosed with diabetes (DM type 2).
- 4 months ago: Seizures episode.
- Past medical history: No history of hypertension (HTN), cerebrovascular accident (CVA), coronary artery disease (CAD), or asthma (ASTHMA) mentioned.

Please note that the exact year for some events is not provided, so they are presented in a relative chronological order based on the given information.
```

### Prompts for evaluating PaJRs

Combining techniques of evaluating writing and its knowledge of healthcare, one can use LLMs to evaluate PaJRs as follows. 

- [ ] Todo - Add pointer to and explanation of Dr Rakesh's rubric for evaluating PaJRs.

`Prompt`
```
"Below is a report submitted by a medical PG intern as part of a reflective writing assignment. Can you evaluate it critically along two lines. 
1. Bloom's taxonomy. What are points that demonstrate competency at each level of the Bloom's taxonomy? What are points that are missing at each level that could have been covered? 
2. Evaluate it along the following questions/rubric - 
  a. What are the general knowledge learning points that we gain from this patient's data that is easily accessible online? 
  b. What are the particular discovery driven learning questions around this patient e.g. internal medicine, external medicine
  c. Clinical complexity - biological, psychological, social
  d. Thematic analysis and learning from it
  e. Showing positive and negative impact of the above learning on the patient outcomes
  f. Competence of intern along following lines - (i) Competence in patient data capture, (ii) Competence in asking questions around the captured patient data (also known as sorting the themes for thematic analysis), (iii) Competence in finding the answers to the above questions and generating learning points that may be already known to other more experienced and advanced learners or hitherto unknown to the world and takes us to the edge of discovery and promise of breaking new ground, (iv) Competence to demonstrate and communicate (through publications in local and global logs) as to how the above learning points gleaned from the individual patients can influence their own immediate illness outcomes as well as future similar patient illness outcomes. 
====

This is me posted in the medicine department on August 15 Th and was sitting in the casualty on my 2 nd day of posting i.e., And was terrified to see a patient coming to the casualty with shortness of breath for 2 days morning. Complaints of bloating since yesterday. Complaints of decreased urine output since Morning. Then I had a talk with his son to get a proper sequence of events and was fascinated to get the following history from him:-

HISTORY OF PRESENTING ILLNESS:- 
The patient was apparently asymptomatic 2 days back then developed difficulty in breathing which is insidious in onset gradually progressive H/O PND, orthopnea present. H/o pedal edema present. H/o abdominal distension present. No H/o fever with pain, sore throat. No H/o involuntary movement. 
NoH/o skin manifestations like rash, nodules. No H/o Recurrent respiratory infection. Syncope No H/o Hemoptysis. No History of chest pain; palpitations; loss of consciousness

PAST HISTORY:- 
No similar complaints in the past. Not a known case of DM; HTN; CAD; CVA; Thyroid; TB; asthma epilepsy.

Personal history:- Diet - mixed. Appetite- normal. Sleep - adequate. Micturition:- decreased. Addictions:- chronic smoker of chute which he stopped 6 years back due to a complaint of hemoptysis which was investigated?? And found no pathology! 
Allergic history:- No history of any kind of allergies to food/drugs
Family history:- no significant family history 
Then I went through his general examination:-

GENERAL EXAMINATION:- 
At the time of examination:- 7/9/23
THE PATIENT IS CONSCIOUS COHERENT AND CO COOPERATIVE. NO PALLOR ; ICTERUS; CLUBBING; CYANOSIS; ; LYMPHADENOPATHY EDEMA - present, TEMPERATURE:- AFEBRILE
PR:110bpm, BP:140/80mmHg, RR:32cpm
Then my first priority was his Respiratory system so I examined:- 
RESPIRATORY SYSTEM:- INSPECTION:- Chest appears symmetric, No Dilated veins, scars, sinuses. 1. Shape of Chest - normal; 2. Trachea position central; 3. Apical Impulse - no visible; 4. Movements of the chest: Respiratory rate:- 34cpm; 5. Skin over the chest: NO engorged veins, sinuses, subcutaneous nodules, intercostal scars, or intercostal swellings; 6. All the areas appear normal.
PALPATION: 1. No local rise in Temperature and tenderness; 2. All inspector findings confirmed. (Tracheal position, apex beat); 3. Expansion of the chest- equal in all planes;
PERCUSSION: Resonant all over the chest except the infraxillary area and infrascapular area;
AUSCULTATION: 1. Normal breath sounds were heard in all areas except IAA AND ISA; Crepts are heard in IAA And ISA.
CVS EXAMINATION:- S1 S 2 heard  ; NO MURMURS 
PER ABDOMEN:- no tenderness, no palpable organs, bowel sounds - present
CNS EXAMINATION:- The patient is conscious. No focal deformities. cranial nerves - intact, sensory system - intact, motor system - intact

Then I ordered the following investigations:- 
INVESTIGATIONS:- 
On the day of admission 6/9/23:- 
Serology:- NEGATIVE 
RBS - 134 mg/dl
B.urea - 53 mg/dl
S.Cr - 2.4 mg/dl
Na - 140 mEq/L
K - 4.3mEq/L
Cl- 103mEq/L
CUE -
Albumin  ++++
Sugar - Nil
Pus cells - 8-9 cells
Epi cells - 2-3 cells 
RBC:- 10-12 cells 
Hb- 13.0
TLC - 18,000
MCV - 92
MCH - 30.7
МCHC  - 34.0
PLT - 2.56 LAKHS 

7/9/23 :- 
Hb:- 13.5
TLC:- 20,500
PLT :- 2.6 lakhs 
ECG was done
CXR:- 
We're also done 
And finally, I came to a diagnosis of 
DIAGNOSIS:- ACUTE EXACERBATION OF COPD WITH ACUTE COR PULMONALE WITH DE NOVO DM II AND HTN.
Then I planned to start him on
  INJ LASIX 40 mg IV/BD IF SDP >110mmHg
  INJ AUGMENTIN 1.2 gm IV/BD
  Intermittent BiPAP
  TAB AZITHROMYCIN 500 mg PO/OD
  INJ HYDROCORT 100 mg IV/TID
  Inj aminophylline 500 mg IV / SOS
  INJ HAI S/C TID ( inform Grbs)
  Salt restriction < 2g / day; fluid restriction < 1.5 
  Nebulisation with budecort; mucous 
Inj N ACETYL CYSTEINE 400mg IV / SOS 
TAB ECOSPIRIN AV 75/10 Po/HS 

Date:- 8/7/23 
INVESTIGATIONS:- TROP I :- 9,693 
Hb:- 13.3 
TLC:- 24,500 
PLT:- 2.3 
Sr  CREAT:- 2.9 

SOAP NOTES 
08-09-2023:
ICU BED1
S:
Bloating of stomach
Shortness of breath grade 3
O:
I/o - 1000/1400 ml
Bp- 140/90 mmHg
Pr - 103 bpm
Rr- 24 cpm
Spo2 - 99% at 4L O2
Grbs - 183
CVS - S1 S2 + No murmurs
RS - BAE+ ,B/l wheeze+ ,crepts+ in Rt IAA and Rt ISA
P/A - Soft and NT
CNS - NFND HMF+
A:
DIAGNOSIS:- 
HF with reduced EF(EF=30%) secondary to CAD (NSTEMI )with acute exacerbation of COPD with type 1 Resp Failure with Acute Cor pulmonale with AKI (renal) with Lenovo DM 2 and HTN
P:
1. Inj Heparin 5000Us/c TID
2. INJ LASIX infusion 10 mg/hr
3. Intermittent BiPAP
4. INJ HYDROCORT 100 mg IV/TID
5. Inj aminophylline 500 mg IV / BD
6. INJ HAI S/C TID ( inform Grbs)
7.Inj MgSo4 1gm IV/OD
8. Nebulisation with budecort; mucous
9. Inj N ACETYL CYSTEINE 400mg IV / BD
10.Tab Ecosprin AV (75/10) PO/HS
11.Tab Met - XL 25 mg PO/OD
12. GRBS 7-point profile
And continued the treatment;

PaJR:- discussion 
07/09/23, 12:55:20 PM] Rakesh Biswas Sir Hod Med: Location? 
How many days since admission?
Add the case report to the description box  
Share this PaJR link in the 2018 ward group
[07/09/23, 12:59:08 PM] Nikhilsai Karnati: Location :- ICU bed 1
Admission:- yesterday ( 6/9/23)
[08/09/23, 9:33:35 AM] Rakesh Biswas Sir Hod Med: Unfractionated heparin? 

What's the efficacy of magnesium sulfate here? @919505766290
[08/09/23, 9:35:52 AM] Navya Mam Gm Pg 1: Unfractionated heparin because he has RWMA LAD, LCx, RCA hypokinesia
[08/09/23, 9:37:19 AM] Rakesh Biswas Sir Hod Med: Then why is he largely getting treated as COPD as per @918978523448 's description when your diagnosis suggests acute LVF!
[08/09/23, 9:37:34 AM] Rakesh Biswas Sir Hod Med: Make me admin
[08/09/23, 9:51:52 AM] Khushi : 08-09-2023:
ICU BED1
S:
Bloating of stomach
Shortness of breath grade 3

O:
I/o - 1000/1400 ml
Bp- 140/90 mmHg
Pr - 103 bpm
Rr- 24 cpm
Spo2 - 99% at 4L O2
Grbs - 183
CVS - S1 S2 + No murmurs
RS - BAE+ ,B/l wheeze+ ,crepts+ in Rt IAA and Rt ISA
P/A - Soft and NT
CNS - NFND HMF+
A:
DIAGNOSIS:- 
HF with reduced EF(EF=30%) secondary to CAD (NSTEMI )with acute exacerbation of COPD with type 1 Resp Failure with Acute Cor pulmonale with AKI (renal) with Lenovo DM 2 and HTN
P:
1. Inj Heparin 5000Us/c TID 2. INJ LASIX infusion 10 mg/hr 3. Intermittent BiPAP 4. INJ HYDROCORT 100 mg IV/TID 5. Inj aminophylline 500 mg IV / BD 6. INJ HAI S/C TID ( inform Grbs) 7.Inj MgSo4 1gm IV/OD 8. Nebulisation with budecort; mucous 9. Inj N ACETYL CYSTEINE 400mg IV / BD 10.Tab Ecosprin AV (75/10) PO/HS 11.Tab Met - XL 25 mg PO/OD 12. GRBS 7-point profile
[08/09/23, 9:55:45 AM] Rakesh Biswas Sir Hod Med: What are the features of COPD in this patient? @918978523448 @917386956954
[08/09/23, 10:12:47 AM] Rakesh Biswas Sir Hod Med: Chest X-ray not suggestive of COPD Any clinical findings suggesting COPD and acute cor pulmonale? @918978523448 
[08/09/23, 10:30:13 AM] Nikhilsai Karnati: Sir patient has been a chronic smoker of Chuttas for around 40 years stopped  6 years back due to blood-stained sputum ;( which was investigated outside and said no pathology) 
And came with complaints sob with Orthopnea; The patient had raised JVP suggestive of right heart failure And pleural effusion ( right >left) On the 2nd day patient showed t-wave inversions which may be any subendocardial ischemia; so trop I was sent to see 11,160 yesterday and treated accordingly And trop I values today are 9,863.  So he is getting treated accordingly, sir ; This patient may have a case of acute exacerbation of COPD; with  cor pulmonale which later leads to sub-endocardial ischemia and getting treated accordingly, sir
[08/09/23, 10:32:13 AM] Rakesh Biswas Sir Hod Med: Corpulmonale leading to subendocardial ischemia? Any review of the literature around that (at the risk of expanding the ontology)?
[09/09/23, 10:13:45 AM] Nikhilsai Karnati: 09-09-2023:
ICU BED1
S:
Bloating of the stomach decreased 
Shortness of breath grade 3 decreased 
When compared to yesterday 
O:
I/o - 750/2900ml
Bp- 130/80mmhg
Pr - 88 bpm
Rr- 20 cpm
Spo2 - 94 at RA 
Grbs - 143 mg/dl
CVS - S1 S2 + No murmurs
RS - BAE+ ,NVBS 
P/A - Soft and NT
CNS - NFND HMF+
A:
DIAGNOSIS:- 
HF with reduced EF(EF=30%) secondary to CAD (NSTEMI )with acute exacerbation of COPD with type 1 Resp Failure with Acute Cor pulmonale with AKI (renal) with Lenovo DM 2 and HTN

P:
1. Inj Heparin 5000Us/c TID
2. INJ LASIX infusion 10 mg/hr
3. Intermittent BiPAP
4. Inj aminophylline 500 mg IV / BD
5. INJ HAI S/C TID ( inform Grbs)
6. Nebulisation with budecort; mucomist 4 Th hourly 
7. Inj N ACETYL CYSTEINE 400mg IV / BD
8. Tab Ecosprin AV (75/10) PO/HS
9.Tab Met - XL 25 mg PO/OD
10. GRBS 7-point profile
11.SYP LACTULOSE  15 ml PO/BD
12. SYP POTKLOR 15 ml in one glass of water
[10/09/23, 8:28:21 PM] Rakesh Biswas Sir Hod Med: Treated accordingly for what with what? Be specific
[10/09/23, 8:29:17 PM] Rakesh Biswas Sir Hod Med: At least tell us what are the indications of each of the drugs mentioned in the planned list here! @918978523448
[10/09/23, 8:44:05 PM] Nikhilsai Karnati: 1) HEPARIN:- When intravenous heparin is administered for myocardial infarction with non-ST elevation and unstable angina, an initial bolus of 60 to 70 U/kg (maximum, 5000 U) followed by a 12- to 15-U/kg/h infusion is recommended. The goal is to achieve an activated partial thromboplastin time of 50 to 70 seconds. https://pubmed.ncbi.nlm.nih.gov/11382373/#:~:text=When%20intravenous%20heparin%20is%20administered,of%2050%20to%2070%20seconds. 2)AMINOPHYLLINE:- May be used in cases of Pulmonary edema and pulmonary congestion secondary to heart failure. https://pubmed.ncbi.nlm.nih.gov/837650/
3) INJ HAI according to Grbs  4) N ACETYLCYSTEINE:-  NAC can effectively inhibit myocardial cell apoptosis caused by ischemia-reperfusion injury (IRI) and improve cardiac function. https://www.hindawi.com/journals/dm/2021/3625662/# 5) MET XL FOR HIGH BP DE NOVO HYPERTENSION.  https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3952407/ 6) SYP LACTULOSE As the patient did not pass stools for 3 days from admission  7) SYP POTKLOR - as potassium levels decreased to 3.2.  8) LASIX:- furosemide to treat conditions with volume overload and edema secondary to congestive heart failure exacerbation. https://www.ncbi.nlm.nih.gov/books/NBK499921/

MY LEARNING POINTS:- 
I learned to integrate multiple systems to help a patient. COPD; Heart failure
https://www.respiratorylondon.co.uk/chronic-obstructive-pulmonary-disease-copd-previously-known-as-emphysema-and-chronic-bronchitis/
Heart failure:- https://www.mayoclinic.org/diseases-conditions/heart-failure/symptoms-causes/syc-20373142

SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) of the patient's case:
Strengths: He has a supportive family who provides financial stability and assistance. He can sleep better with the use of medication. He is on good attender care.
Weaknesses: 1. The patient experiences severe shortness of breath, 2. He was unable to tolerate BiPAP, 3. The patient has been unable to find relief even on continuous medication; 4. He has been experiencing sleep disturbances. 5. The patient's condition may deteriorate 
Opportunities: 1. Further evaluation and cardiologist/pulmonologist referral provide an opportunity for a comprehensive assessment and management of her condition.
Threats: 1. The patient's dependence on medication and BIPAP may deteriorate to go into to ventilator.  2. There is more chance of death in the patient. 3. As he is hospitalised he may develop bed sores.  4. Exacerbation of the condition may be seen near future."
```
`Response - ChatGPT3.5`
```
"Let's evaluate the provided medical report both in terms of Bloom's taxonomy and the specified rubric questions:

**1. Bloom's Taxonomy Evaluation:**

- **Knowledge (Remembering):** The intern successfully gathers basic patient information such as history, presenting complaints, personal and family history, and examination findings. This demonstrates knowledge application at the remembering level.

- **Comprehension (Understanding):** The intern understands the patient's condition by correlating the symptoms, physical findings, and laboratory results. This level of comprehension is evident in the diagnosis section.

- **Application (Applying):** The intern applies medical knowledge by ordering relevant investigations like serology, RBS, B.urea, S.Cr, and ECG, and interprets these results to make a diagnosis. They also prescribe medications and treatment, which reflects the application of medical interventions.

- **Analysis (Analyzing):** The report lacks in-depth analysis of the patient's condition. While a diagnosis is provided, there is limited discussion of the underlying pathophysiology or potential differential diagnoses. An in-depth analysis would involve considering various possibilities and critically evaluating them.

- **Synthesis (Creating):** The intern does not demonstrate synthesis in the report. They do not connect the patient's condition to broader medical concepts or research. Synthesis would involve exploring how this case fits into the larger context of COPD, acute cor pulmonale, and other related conditions.

- **Evaluation (Evaluating):** The report does not include an evaluation of the effectiveness of the treatment plan, the potential complications, or the overall management strategy. This is an important aspect that could improve the report's quality.

**2. Rubric Evaluation:**

- **General Knowledge Learning Points:** The report provides basic information about the patient's condition, such as symptoms, examination findings, and lab results. However, it lacks insights into the broader implications or epidemiology of COPD or acute cor pulmonale. It also doesn't reference external sources or guidelines for further context.

- **Discovery-Driven Learning Questions:** The report mentions the patient's history and symptoms but does not delve into specific questions related to the internal or external medicine aspects of the case. It could benefit from exploring questions like the cause of the acute exacerbation, the role of smoking cessation, or the relationship between COPD and heart failure.

- **Clinical Complexity:** The report briefly touches on the patient's clinical complexity, mentioning comorbidities like diabetes and hypertension. However, a deeper analysis of the biological, psychological, and social aspects of the patient's condition is lacking.

- **Thematic Analysis:** The report does not conduct a thematic analysis of the patient's case or identify overarching themes that could provide insights or guidance for future management.

- **Impact on Patient Outcomes:** The report does not discuss the potential positive or negative impacts of the diagnosis and treatment on the patient's short-term and long-term outcomes.

- **Competence of the Intern:**
  - (i) **Competence in Data Capture:** The intern successfully captures the patient's data, including history, examination findings, and lab results.
  - (ii) **Competence in Asking Questions:** The report lacks in-depth questioning and exploration of the case. It does not effectively sort themes for thematic analysis.
  - (iii) **Competence in Finding Answers:** The intern makes a diagnosis and prescribes treatment but does not engage in in-depth analysis or exploration of new knowledge.
  - (iv) **Competence in Communication:** The report could improve in communicating the case's learning points effectively, particularly in relation to how the findings could influence patient outcomes and future research.

In summary, while the medical report demonstrates competence at the knowledge and comprehension levels of Bloom's taxonomy, it falls short in terms of analysis, synthesis, and evaluation. Additionally, it lacks depth in addressing the rubric's questions related to clinical complexity, thematic analysis, and the impact on patient outcomes. Enhancing critical thinking and providing more comprehensive insights would improve the report's quality."
```
`Response - Bard`
```
"Bloom's Taxonomy

Knowledge

    The patient is a 75-year-old male with a history of COPD, smoking, and chronic kidney disease.
    He presented with shortness of breath, orthopnea, and edema.
    His physical exam revealed signs of right heart failure, including raised JVP and pleural effusion.
    His labs showed elevated troponin levels, suggestive of myocardial ischemia.
    He was diagnosed with acute exacerbation of COPD with acute cor pulmonale and NSTEMI.

Comprehension

    The patient's shortness of breath and orthopnea were due to his right heart failure, which was caused by his COPD.
    The patient's edema was due to both his right heart failure and his kidney disease.
    The patient's myocardial ischemia was most likely caused by his right heart failure, which can lead to decreased coronary blood flow.

Application

    The patient was treated with diuretics, BiPAP, and oxygen to improve his respiratory function and reduce his edema.
    He was also treated with heparin and aspirin to prevent further cardiovascular events.

Analysis

    The patient's case highlights the importance of early diagnosis and treatment of COPD and other chronic diseases.
    It also demonstrates the potential for COPD to lead to serious cardiovascular complications.

Evaluation

    The patient's treatment plan was appropriate and effective. He showed significant improvement in his respiratory function and edema after treatment. His troponin levels also decreased, suggesting that his myocardial ischemia was resolving.

Missing points:

    The patient's chest X-ray was not suggestive of COPD. This could be due to a number of factors, such as the fact that the patient was in respiratory distress at the time of the X-ray, or the fact that the patient's COPD was not severe.
    The patient's troponin levels were elevated, but he did not have any other clinical findings suggestive of myocardial infarction, such as chest pain or ECG changes. This suggests that the patient may have had subendocardial ischemia, which is a type of ischemia that does not cause symptoms or ECG changes.
    It is not clear from the case report whether the patient was tested for pulmonary embolism. Pulmonary embolism is a common differential diagnosis for patients with acute shortness of breath and right heart failure.

Evaluation of the report

General knowledge learning points:

    COPD is a chronic lung disease that can lead to right heart failure and myocardial ischemia.
    Right heart failure can cause a number of clinical findings, including shortness of breath, orthopnea, edema, and raised JVP.
    Elevated troponin levels can be suggestive of myocardial ischemia, even in the absence of other clinical findings.

Particular discovery driven learning questions:

    What is the relationship between COPD and cor pulmonale?
    What is the relationship between cor pulmonale and myocardial ischemia?
    Is there any evidence to support the use of magnesium sulfate in the treatment of acute exacerbation of COPD?

Clinical complexity:

    The patient had COPD, chronic kidney disease, right heart failure, and NSTEMI. This clinical complexity made it challenging to diagnose and treat the patient.

Thematic analysis and learning:

    The main theme of this case report is the importance of early diagnosis and treatment of COPD and other chronic diseases.
    The patient's case also demonstrates the potential for COPD to lead to serious cardiovascular complications.

Positive and negative impact of the learning on the patient outcomes:

    The patient's learning from this case report could have a positive impact on the outcomes of future patients with COPD and other chronic diseases.
    For example, the patient could use his learning to develop educational materials for patients with COPD about the importance of early diagnosis and treatment, and the potential for cardiovascular complications.

Competence of intern:

    The intern demonstrated competence in patient data capture by taking a thorough history and physical exam of the patient.
    The intern also demonstrated competence in asking questions around the captured patient data by identifying the key clinical findings and differential diagnoses.
    The intern demonstrated competence in finding the answers to the above questions and generating learning points by researching the literature and consulting with senior clinicians.
    The intern demonstrated competence in communicating their learning to others by writing this case report.

Overall, the intern's performance on this reflective writing assignment was excellent. The intern demonstrated a deep understanding of the patient's case and the underlying pathophysiology. The intern also demonstrated a commitment to learning and improving their practice."
```
`Response - August`
```
"Bloom's Taxonomy: 
1. Remember: The intern has demonstrated a good ability to recall facts and basic concepts, such as the patient's symptoms, medical history, and examination findings.
2. Understand: The intern has shown understanding by describing the patient's condition, explaining the relevance of certain symptoms, and interpreting test results.
3. Apply: The intern applies knowledge by conducting examinations, ordering investigations, and formulating a treatment plan.
4. Analyze: The intern has demonstrated analysis by differentiating between symptoms, correlating them with possible conditions, and interpreting test results to reach a diagnosis.
5. Evaluate: The intern could have better demonstrated evaluation by justifying the chosen treatment plan, discussing the prognosis, and reflecting on the patient's response to treatment.
6. Create: The intern could have better demonstrated creation by suggesting alternative treatment plans, predicting possible complications, and formulating a long-term management plan.

Rubric:
a. General knowledge learning points: The intern has learned about COPD and heart failure. The intern could have better demonstrated learning by discussing the pathophysiology, epidemiology, and common presentations of these conditions.
b. Particular discovery driven learning questions: The intern could have better demonstrated this by discussing the unusual features of the case, exploring potential research questions, and reflecting on how this case has changed their understanding of COPD and heart failure.
c. Clinical complexity: The intern has demonstrated understanding of the biological complexity of the patient's case. The intern could have better demonstrated understanding of the psychological and social complexity by discussing the patient's mental health, lifestyle, and social support.
d. Thematic analysis: The intern could have better demonstrated this by identifying recurring themes in the patient's case, such as chronic disease management and the impact of lifestyle factors on health.
e. Impact on patient outcomes: The intern could have better demonstrated this by discussing the patient's progress, reflecting on the effectiveness of the treatment plan, and predicting future health outcomes.
f. Competence: The intern has demonstrated competence in patient data capture, thematic analysis, and finding answers. The intern could have better demonstrated competence in questioning the captured patient data and communicating the learning points."
```

### Expert evaluation of LLM evaluations

`Expert evaluation evaluation of all three above responses`
```
Of the 3 chatGPT 3.5 emerges the indisputable winner and beats the other two way behind in the finishing line.
Bard falters glaringly at comprehension and has the potential to mislead while the other LLM doesn't contribute as effectively as ChatGPT.
```

`Expert comments on Bard PaJR evaluation`
```
Bard evaluation :

Bloom 1 (knowledge): Good. Perhaps there's more to it and one could even bring in medical ontologies here but we'll need to explore this further. Either SNOMED CT or even NMC codes! 
Bloom game 2 (Comprehension): Misleading! Shortness of breath and orthopnea are due to left ventricular failure and his suspected NSTEMi (heart attack) should have been held responsible. Also the same shortness of breath symptoms can happen due to COPD acute exacerbation 
Bloom 3 (Application): Here bard confuses the intern's learning evaluation with the patient evaluation while ChatGPT gets it right 
Bloom game 4 (analysis): Again bard wrong chatGPT right 
Bloom game 5 (evaluation) : chatGPT right bard wrong 
Bloom game 6 (creation): Bard has skipped this while ChatGPT scores again
```

## Advanced techniques with prompts

### Providing rubrics 

### Providing sample responses to improve accuracy

### Structuring text into a table 

Often we have a large blob of text and we want to extract key datapoints, organized by rows and columns. One needs to explain the LLM what needs to be done and then specify output format. Here is an example. 

`Prompt`
```
25/07/23 : 
4:30AM - 94mg/dl - 5U HAI + 5NPH ( Took Ragi Java ) 
8AM - 36mg/dl - Took Dosa
11AM - 158mg/dl - 6U HAI ( Took Rice ) 
4PM - 148mg/dl - 6U HAI + 4U NPH ( Took Rice ) 

26/07/23 : 
7:30AM - 90mg/dl - 6U HAI + 4U NPH ( Took Jonna Gatka )
10:30AM - 322mg/dl
2PM - 220mg/dl - 6U HAI + 4U NPH ( Had Rice ) 
5PM - 155mg/dl 
8PM - 45mg/dl ( Had Gatka ) 
10PM -213mg/dl

27/07/23
8AM - 383mg/dl - 8U HAI +6U NPH ( Had Gatka ) 
10AM - 427mg/dl 
2PM - 290mg/dl - 8U HAI ( Had Rice + Curry ) 
4PM - 161mg/dl 
8PM - 380mg/dl 8U HAI + 6NPH ( Had Roti & Curry )
10PM - 154mg/dl
2AM - 53mg/dl ( Had Roti + Curry )

28/07/23
8AM - 345mg/dl - 10U HAI+8UNPH ( Had Gatka+Curry ) 
10:40AM - 300mg/dl
2PM - 86mg/dl - 10U HAI ( Had Rice ) 
4PM - 145mg/dl 
8PM - 160mg/dl - 8UHAI + 4NPH ( Had Rice + Curry ) 
10PM - 89mg/dl ( Had 5 Biscuits ) 
3AM - 62mg/dl 

29/7/23 
8AM - 272mg/dl - 10U HAI + 8U NPH ( Had Gatka + Curry)
10AM - 278mg/dl 
2PM - 34mg/dl - 6U HAI ( Had Rice + Curry )
4:30PM - 118mg/dl 
8PM - 128mg/dl - 6U HAI ( Had Rice + Curry ) 
10:30PM - 83mg/dl ( Had 10 Biscuits ) 

30/7/23 
8AM - 33mg/dl ( Had Gatka ) 
10AM - 424mg/dl
2PM - 302mg/dl - 4U HAI ( Had Rice + Curry )
5PM - 439mg/dl - 6U HAI 
8PM - 366mg/dl - 4U HAI ( Had Rice + Curry ) 

31/7/23 
8AM - 518 mg/dl - 10U HAI ( Had Gatka)
11:20AM - 342 mg/dl
2:30PM - 22mg/dl ( Had Rice + Curry ) 
8PM - Did not Check Sugars - 5U HAI ( Had Rice + Curry ) 

1/8/23 
8:52AM - 65mg/dl ( Had Gatka + Dal ) 
11AM- 309mg/dl
2:24PM - 291mg/dl - 4U HAI ( Had Rice + Curry )
8:30PM - 271mg/dl - 8U HAI ( Had Rice + Curry )

2/8/23 
 5 pm : 533 mg/dl ( 10U HAI ) 
9 PM : 129 mg /dl ( 4 U HAI )

3/08/23 
   8am : 588mg/dl  -10IU HAI given ( had dosa) 
  1 pm : 315 mg/dl - 4 IU HAI given ( had  rice  and curry)
  4 pm : 199 mg /dl  
  7:30 pm : 364 mg/dl - 
10:20 pm : high ( 4 IU HAI given )

4/08/2023 
8 am : 505 mg /dl - 8 IU HAI is given ( had dosa ) 
10am : 209 mg/dl  
1 pm : 358mg/dl - 6 IU HAI given ( had  rice  and curry)
  4 pm : 290 mg /dl  
  7:50 pm : 370 mg/dl - 6 IU HAI  ( Had gatka )

----
Let me explain what is contained in the data above by using the last 6 lines which is a repeating pattern across all the data. 

4/08/2023 
8 am : 505 mg /dl - 8 IU HAI is given ( had dosa ) 
10am : 209 mg/dl  
1 pm : 358mg/dl - 6 IU HAI given ( had  rice  and curry)
  4 pm : 290 mg /dl  
  7:50 pm : 370 mg/dl - 6 IU HAI  ( Had gatka )

Each chunk of data begins with a date on the first line of the data chunk. Then we have each line with a time on that date (e.g. 8 am), followed by blood glucose reading (e.g. 505 mg/dl), followed by the insulin dose given (e.g. 8 IU HAI), followed by the food consumed (e.g. had dosa). 

--
Can you summarize all the data above in a markdown table with dates as the rows, and the following 4 columns - time, blood glucose reading, insulin dose given, food consumed. 
```
`Response`
```
Sure, here's the summarized data presented in a markdown table format:

| Date       | Time    | Blood Glucose | Insulin Dose | Food Consumed            |
|------------|---------|---------------|--------------|--------------------------|
| 4/08/2023  | 8 am    | 505 mg/dl     | 8 IU HAI     | Had dosa                 |
|            | 10 am   | 209 mg/dl     |              |                          |
|            | 1 pm    | 358 mg/dl     | 6 IU HAI     | Had rice and curry       |
|            | 4 pm    | 290 mg/dl     |              |                          |
|            | 7:50 pm | 370 mg/dl     | 6 IU HAI     | Had gatka                |
| 3/08/2023  | 8 am    | 588 mg/dl     | 10 IU HAI    | Had dosa                 |
|            | 1 pm    | 315 mg/dl     | 4 IU HAI     | Had rice and curry       |
|            | 4 pm    | 199 mg/dl     |              |                          |
|            | 7:30 pm | 364 mg/dl     |              |                          |
|            | 10:20 pm| High          | 4 IU HAI     |                          |
| 2/8/2023   | 5 pm    | 533 mg/dl     | 10 IU HAI    |                          |
|            | 9 pm    | 129 mg/dl     | 4 IU HAI     |                          |
| 1/8/2023   | 8:52 am | 65 mg/dl      |              | Had Gatka and Dal        |
|            | 11 am   | 309 mg/dl     |              |                          |
|            | 2:24 pm | 291 mg/dl     | 4 IU HAI     | Had rice and curry       |
|            | 8:30 pm | 271 mg/dl     | 8 IU HAI     | Had rice and curry       |
| 31/7/2023  | 8 am    | 518 mg/dl     | 10 IU HAI    | Had Gatka                |
|            | 11:20 am| 342 mg/dl     |              |                          |
|            | 2:30 pm | 22 mg/dl      |              | Had rice and curry       |
|            | 8 pm    | Did not Check | 5 IU HAI     | Had rice and curry       |
| 30/7/2023  | 8 am    | 33 mg/dl      |              | Had Gatka                |
|            | 10 am   | 424 mg/dl     |              |                          |
|            | 2 pm    | 302 mg/dl     | 4 IU HAI     | Had rice and curry       |
|            | 5 pm    | 439 mg/dl     | 6 IU HAI     |                          |
|            | 8 pm    | 366 mg/dl     | 4 IU HAI     | Had rice and curry       |
| 29/7/2023  | 8 am    | 272 mg/dl     | 10 IU HAI    | Had Gatka and Curry      |
|            | 10 am   | 278 mg/dl     |              |                          |
|            | 2 pm    | 34 mg/dl      | 6 IU HAI     | Had rice and curry       |
|            | 4:30 pm | 118 mg/dl     |              |                          |
|            | 8 pm    | 128 mg/dl     | 6 IU HAI     | Had rice and curry       |
|            | 10:30 pm| 83 mg/dl      |              | Had 10 Biscuits          |
| 28/7/2023  | 8 am    | 345 mg/dl     | 10 IU HAI    | Had Gatka and Curry      |
|            | 10:40 am| 300 mg/dl     |              |                          |
|            | 2 pm    | 86 mg/dl      | 10 IU HAI    | Had rice                 |
|            | 4 pm    | 145 mg/dl     |              |                          |
|            | 8 pm    | 160 mg/dl     | 8 IU HAI     | Had rice and curry       |
|            | 10 pm   | 89 mg/dl      |              | Had 5 Biscuits           |
|            | 3 am    | 62 mg/dl      |              |                          |
| ...        | ...     | ...           | ...          | ...                      |
| 25/7/2023  | 4:30 am | 94 mg/dl      | 5U HAI + 5NPH| Took Ragi Java            |
|            | 8 am    | 36 mg/dl      |              | Took Dosa                 |
|            | 11 am   | 158 mg/dl     | 6U HAI       | Took Rice                 |
|            | 4 pm    | 148 mg/dl     | 6U HAI + 4NPH| Took Rice                 |

Please note that this table provides a condensed view of the data, and the "..." indicates that the pattern continues for the earlier dates. The table presents the date, time, blood glucose reading, insulin dose given, and food consumed for each recorded event.
```

## Automating evaluations 

### Getting your API key

### Using Apps Script and Google Sheets

## Contributing to this effort

### Evaluating blind tests

### Self evaluating PaJRs and posting results
