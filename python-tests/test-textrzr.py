#!/usr/bin/python

from textrazor import TextRazor
import re

client = TextRazor(api_key="888aab2b35bdfc628f06baeb87890b60740241a1322914aed001ddc9", extractors=["words", "entailments", "entities"])
#response = client.analyze_url("http://usmann.me/new.txt")
response = client.analyze("My parents both know im a good driver my mom wants to get me a car but my dad said to wait till I graduate");
#for entity in response.entities():
#    print entity.entailed_word

entailments = {}
i = 0;
cur_src_word = ""
cur_match_set = []
for entailment in response.entailments():
	matched_word = entailment.matched_words[0].token
	pattern = re.compile("\"(.*?)\"")
	print matched_word
	
	if(cur_src_word == ""):
		cur_src_word = matched_word

	src_wrd = matched_word#pattern.match(matched_word).group(1)

	if i > 5 and cur_src_word == src_word:
		continue
	elif src_wrd == cur_src_word:
		i = i+1
		cur_match_set.append(entailment.entailed_word)
	else:
		cur_src_word = src_wrd
		entailments[src_wrd] = cur_match_set
		cur_match_set = []
		i = 0
print entailments

#for entailment in response.entailments():