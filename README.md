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

### Prompts for evaluating PaJRs

## Advanced techniques with prompts

### Providing rubrics 

### Providing sample responses

### Specifying output

## Automating evaluations 

### Getting your API key

### Using Apps Script and Google Sheets

## Contributing to this effort

### Evaluating blind tests

### Self evaluating PaJRs and posting results
