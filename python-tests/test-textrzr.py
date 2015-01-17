#!/usr/bin/python

from textrazor import TextRazor
import re, sys

class Replacer(object):
	def __init__(self,txt):
		client = TextRazor(api_key="888aab2b35bdfc628f06baeb87890b60740241a1322914aed001ddc9", extractors=["words", "entailments", "entities"])
		#response = client.analyze_url("http://usmann.me/new.txt")
		response = client.analyze(txt);
		#for entity in response.entities():
		#    print entity.entailed_word

		entailments = {}
		i = 0;
		cur_src_word = ""
		cur_match_set = []

		for entailment in response.entailments():
			matched_word = entailment.matched_words[0].token #get the original word
 			print matched_word
			pattern = re.compile("\"(.*?)\"")
			#print matched_word

			#print entailment

			if(cur_src_word == ""):
				cur_src_word = matched_word

			src_wrd = matched_word#pattern.match(matched_word).group(1)
			print src_wrd

			if entailment.score < .9:
				cur_match_set.append(src_wrd + " " + str(entailment.score) + " " + entailment.entailed_word)

			# if i >= 5 and cur_src_word == src_wrd:
			# 	continue
			# elif src_wrd == cur_src_word:
			# 	i = i+1
			# 	cur_match_set.append(entailment.entailed_word + " " + str(entailment.score) + " " + str(entailment.context_score))
			# else:
			# 	print cur_src_word
			# 	print cur_match_set
			# 	print "\n\n"
			# 	entailments[cur_src_word] = cur_match_set
			# 	cur_src_word = src_wrd
			# 	cur_match_set = []
			# 	i = 0
		cur_max_entry = cur_match_set[0]
		#cur_max_score = float(cur_match_set[0].split(" ")[1])
		#cur_max_word = cur_match_set[0].split(" ")[1]
		theStr = ""
		for x in range(0, len(cur_match_set)):
			if float(cur_match_set[x].split(" ")[1] < .1):
				cur_match_set.remove(x)
				continue
			else:
				cur_new_word = cur_match_set[x].split(" ")[2]
				freqFile = open(sys.path[0]+'/wordFreq.txt', 'r')
				#while(cur_new_word not in (str = f.readline()):
				for line in freqFile:
					if(cur_new_word not in line):
						continue
					cur_match_set[x] = cur_match_set[x] + " " + line.split(" ")[0]
					print cur_match_set[x]
					break
				# cur_match_set[x] = cur_match_set[x] + 

		# for entry in cur_match_set:
		# 	print entry
			# if float(entry.split(" ")[3]) > float(cur_max_entry.split(" ")[3]):
			# 	cur_max_entry = entry
		print "\n\nHERE\n\n" + cur_max_entry
		#print entailments

		#for entailment in response.entailments():
#Replacer("I just found a crazy new startup idea")
Replacer("This works on the idea of teaching")