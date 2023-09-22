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
Goto [https://meetaugust.ai/wa] or start chatting with +918738030604 on Whatsapp to access Beyond Health's August on Whatsapp. You will need to sign in via phone number+OTP.

August web version is available at no cost. It is unclear if it has API access. 


## Getting started with prompts

### Prompts for evaluating writing

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
