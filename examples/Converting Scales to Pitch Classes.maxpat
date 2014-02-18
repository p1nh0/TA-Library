{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 6,
			"minor" : 1,
			"revision" : 2,
			"architecture" : "x86"
		}
,
		"rect" : [ 29.0, 69.0, 487.0, 459.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 10.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 0,
		"gridsize" : [ 5.0, 5.0 ],
		"gridsnaponopen" : 0,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"boxanimatetime" : 200,
		"imprint" : 0,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"boxes" : [ 			{
				"box" : 				{
					"bubble" : 1,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"frgb" : 0.0,
					"id" : "obj-17",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 268.0, 39.0, 103.0, 25.0 ],
					"presentation_rect" : [ 442.5, 13.5, 0.0, 0.0 ],
					"text" : "choose scale"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 10.0,
					"id" : "obj-24",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patcher" : 					{
						"fileversion" : 1,
						"appversion" : 						{
							"major" : 6,
							"minor" : 1,
							"revision" : 2,
							"architecture" : "x86"
						}
,
						"rect" : [ 25.0, 69.0, 640.0, 480.0 ],
						"bglocked" : 0,
						"openinpresentation" : 0,
						"default_fontsize" : 10.0,
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"gridonopen" : 0,
						"gridsize" : [ 5.0, 5.0 ],
						"gridsnaponopen" : 0,
						"statusbarvisible" : 2,
						"toolbarvisible" : 1,
						"boxanimatetime" : 200,
						"imprint" : 0,
						"enablehscroll" : 1,
						"enablevscroll" : 1,
						"devicewidth" : 0.0,
						"description" : "",
						"digest" : "",
						"tags" : "",
						"boxes" : [ 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"id" : "obj-21",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 118.0, 24.0, 18.0 ],
									"text" : "iter"
								}

							}
, 							{
								"box" : 								{
									"fontname" : "Arial",
									"fontsize" : 10.0,
									"id" : "obj-20",
									"maxclass" : "newobj",
									"numinlets" : 1,
									"numoutlets" : 2,
									"outlettype" : [ "", "clear" ],
									"patching_rect" : [ 50.0, 100.0, 43.0, 18.0 ],
									"text" : "t l clear"
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-22",
									"maxclass" : "inlet",
									"numinlets" : 0,
									"numoutlets" : 1,
									"outlettype" : [ "" ],
									"patching_rect" : [ 50.0, 40.0, 25.0, 25.0 ]
								}

							}
, 							{
								"box" : 								{
									"comment" : "",
									"id" : "obj-23",
									"maxclass" : "outlet",
									"numinlets" : 1,
									"numoutlets" : 0,
									"patching_rect" : [ 45.0, 196.0, 25.0, 25.0 ]
								}

							}
 ],
						"lines" : [ 							{
								"patchline" : 								{
									"destination" : [ "obj-21", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-20", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-23", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-20", 1 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-23", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-21", 0 ]
								}

							}
, 							{
								"patchline" : 								{
									"destination" : [ "obj-20", 0 ],
									"disabled" : 0,
									"hidden" : 0,
									"source" : [ "obj-22", 0 ]
								}

							}
 ]
					}
,
					"patching_rect" : [ 217.0, 187.0, 33.0, 18.0 ],
					"saved_object_attributes" : 					{
						"default_fontface" : 0,
						"default_fontname" : "Arial",
						"default_fontsize" : 10.0,
						"description" : "",
						"digest" : "",
						"fontface" : 0,
						"fontname" : "Arial",
						"fontsize" : 10.0,
						"globalpatchername" : "",
						"tags" : ""
					}
,
					"text" : "p iter"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.937255, 0.611765, 0.258824, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-1",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 297.0, 178.0, 32.0, 15.0 ],
					"text" : "clear"
				}

			}
, 			{
				"box" : 				{
					"hint" : "note map (collection of notes)",
					"hkeycolor" : [ 0.466667, 0.752941, 0.894118, 1.0 ],
					"id" : "obj-2",
					"maxclass" : "kslider",
					"mode" : 1,
					"numinlets" : 2,
					"numoutlets" : 2,
					"offset" : 0,
					"outlettype" : [ "int", "int" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 217.0, 215.0, 112.0, 68.0 ],
					"presentation_rect" : [ 710.0, 580.0, 84.0, 53.0 ],
					"range" : 12,
					"varname" : "kslider"
				}

			}
, 			{
				"box" : 				{
					"attr" : "varname",
					"attrfilter" : [ "offset", "range", "varname" ],
					"fontname" : "Arial",
					"fontsize" : 10.0,
					"id" : "obj-10",
					"maxclass" : "attrui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"orientation" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 242.0, 136.0, 97.0, 36.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"framecolor" : [ 0.466667, 0.752941, 0.894118, 1.0 ],
					"id" : "obj-13",
					"items" : [ "Major", ",", "Harmonic Minor", ",", "Melodic Minor (Ascending)", ",", "Melodic Minor (Descending)", ",", "Chromatic", ",", "Whole Tone", ",", "Pentatonic Major", ",", "Pentatonic Minor", ",", "Pentatonic Blues", ",", "Pentatonic Neutral", ",", "Octatonic (H-W)", ",", "Octatonic (W-H)", ",", "Ionian", ",", "Dorian", ",", "Phrygian", ",", "Lydian", ",", "Mixolydian", ",", "Aeolian", ",", "Locrian", ",", "Algerian", ",", "Arabian (a)", ",", "Arabian (b)", ",", "Augmented", ",", "Auxiliary Diminished", ",", "Auxiliary Augmented", ",", "Auxiliary Diminished Blues", ",", "Balinese", ",", "Blues", ",", "Byzantine", ",", "Chinese", ",", "Chinese Mongolian", ",", "Diatonic", ",", "Diminished", ",", "Diminished, Half", ",", "Diminished, Whole", ",", "Diminished Whole Tone", ",", "Dominant 7th", ",", "Double Harmonic", ",", "Egyptian", ",", "Eight Tone Spanish", ",", "Enigmatic", ",", "Ethiopian (A raray)", ",", "Ethiopian (Geez & Ezel)", ",", "Half Diminished (Locrian)", ",", "Half Diminished #2 (Locrian #2)", ",", "Hawaiian", ",", "Hindu", ",", "Hindustan", ",", "Hirajoshi", ",", "Hungarian Major", ",", "Hungarian Gypsy", ",", "Hungarian Gypsy Persian", ",", "Hungarian Minor", ",", "Japanese (A)", ",", "Japanese (B)", ",", "Japanese (Ichikosucho)", ",", "Japanese (Taishikicho)", ",", "Javaneese", ",", "Jewish (Adonai Malakh)", ",", "Jewish (Ahaba Rabba)", ",", "Jewish (Magen Abot)", ",", "Kumoi", ",", "Leading Whole Tone", ",", "Lydian Augmented", ",", "Lydian Minor", ",", "Lydian Diminished", ",", "Major Locrian", ",", "Mela Bhavapriya (44)", ",", "Mela Chakravakam (16)", ",", "Mela Chalanata (36)", ",", "Mela Charukesi (26)", ",", "Mela Chitrambari (66)", ",", "Mela Dharmavati (59)", ",", "Mela Dhatuvardhani (69)", ",", "Mela Dhavalambari (49)", ",", "Mela Dhenuka (9)", ",", "Mela Dhirasankarabharana (29)", ",", "Mela Divyamani (48)", ",", "Mela Gamanasrama (53)", ",", "Mela Ganamurti (3)", ",", "Mela Gangeyabhusani (33)", ",", "Mela Gaurimanohari (23)", ",", "Mela Gavambodhi (43)", ",", "Mela Gayakapriya (13)", ",", "Mela Hanumattodi (8)", ",", "Mela Harikambhoji (28)", ",", "Mela Hatakambari (18)", ",", "Mela Hemavati (58)", ",", "Mela Jalarnavam (38)", ",", "Mela Jhalavarali (39)", ",", "Mela Jhankaradhvani (19)", ",", "Mela Jyotisvarupini (68)", ",", "Mela Kamavardhani (51)", ",", "Mela Kanakangi (1)", ",", "Mela Kantamani (61)", ",", "Mela Kharaharapriya (22)", ",", "Mela Kiravani (21)", ",", "Mela Kokilapriya (11)", ",", "Mela Kosalam (71)", ",", "Mela Latangi (63)", ",", "Mela Manavati (5)", ",", "Mela Mararanjani (25)", ",", "Mela Mayamalavagaula (15)", ",", "Mela Mechakalyani (65)", ",", "Mela Naganandini (30)", ",", "Mela Namanarayani (50)", ",", "Mela Nasikabhusani (70)", ",", "Mela Natabhairavi (20)", ",", "Mela Natakapriya (10)", ",", "Mela Navanitam (40)", ",", "Mela Nitimati (60)", ",", "Mela Pavani (41)", ",", "Mela Ragavardhani (32)", ",", "Mela Raghupriya (42)", ",", "Mela Ramapriya (52)", ",", "Mela Rasikapriya (72)", ",", "Mela Ratnangi (2)", ",", "Mela Risabhapriya (62)", ",", "Mela Rupavati (12)", ",", "Mela Sadvidhamargini (46)", ",", "Mela Salagam (37)", ",", "Mela Sanmukhapriya (56)", ",", "Mela Sarasangi (27)", ",", "Mela Senavati (7)", ",", "Mela Simhendramadhyama (57)", ",", "Mela Subhapantuvarali (45)", ",", "Mela Sucharitra (67)", ",", "Mela Sulini (35)", ",", "Mela Suryakantam (17)", ",", "Mela Suvarnangi (47)", ",", "Mela Syamalangi (55)", ",", "Mela Tanarupi (6)", ",", "Mela Vaschaspati (64)", ",", "Mela Vagadhisvari (34)", ",", "Mela Vakulabharanam (14)", ",", "Mela Vanaspati (4)", ",", "Mela Varunapriya (24)", ",", "Mela Visvambari (54)", ",", "Mela Yagapriya (31)", ",", "Mohammedan", ",", "Neopolitan", ",", "Neoploitan Major", ",", "Neopolitan Minor", ",", "Nine Tone Scale", ",", "Oriental (a)", ",", "Oriental (b)", ",", "Overtone", ",", "Overtone Dominant", ",", "Pelog", ",", "Persian", ",", "Prometheus", ",", "Prometheus Neopolitan", ",", "Pure Minor", ",", "Purvi Theta", ",", "Roumanian Minor", ",", "Six Tone Symmetrical", ",", "Spanish Gypsy", ",", "Super Locrian", ",", "Theta, Asavari", ",", "Theta, Bilaval", ",", "Theta, Bhairav", ",", "Theta, Bhairavi", ",", "Theta, Kafi", ",", "Theta, Kalyan", ",", "Theta, Khamaj", ",", "Theta, Marva", ",", "Todi Theta" ],
					"maxclass" : "umenu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "int", "", "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 8.0, 39.0, 260.0, 21.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 10.0,
					"id" : "obj-11",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 83.5, 68.0, 51.0, 18.0 ],
					"text" : "tosymbol"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 10.0,
					"id" : "obj-15",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 115.5, 164.0, 120.0, 18.0 ],
					"text" : "zl slice 1 @zlmaxsize 13"
				}

			}
, 			{
				"box" : 				{
					"color" : [ 0.843137, 0.321569, 0.180392, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 10.0,
					"id" : "obj-16",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 4,
					"outlettype" : [ "dictionary", "", "", "" ],
					"patching_rect" : [ 83.5, 118.0, 116.5, 29.0 ],
					"saved_object_attributes" : 					{
						"embed" : 0,
						"parameter_enable" : 0
					}
,
					"text" : "dict scales-dict scales-collection.json"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 10.0,
					"id" : "obj-49",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 83.5, 92.0, 38.0, 16.0 ],
					"text" : "get $1"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"frgb" : 0.0,
					"id" : "obj-9",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 329.0, 236.5, 72.0, 25.0 ],
					"presentation_rect" : [ 207.0, 96.0, 0.0, 0.0 ],
					"text" : "note list"
				}

			}
, 			{
				"box" : 				{
					"fontface" : 3,
					"fontname" : "Arial",
					"fontsize" : 16.0,
					"frgb" : 0.0,
					"id" : "obj-8",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 0.0, 0.0, 278.0, 24.0 ],
					"text" : "Converting Scales to Pitch Classes"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 10.0,
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 217.0, 301.0, 231.0, 18.0 ],
					"restore" : [ 0, 20, 2, 20, 3, 20, 6, 20, 7, 20, 8, 20, 11, 20 ],
					"saved_object_attributes" : 					{
						"parameter_enable" : 0
					}
,
					"text" : "pattr @bindto kslider @invisible 1 @autorestore 0",
					"varname" : "u267000881"
				}

			}
, 			{
				"box" : 				{
					"bubble" : 1,
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"frgb" : 0.0,
					"id" : "obj-38",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 357.0, 400.0, 89.0, 25.0 ],
					"text" : "pitch-class"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.901961, 0.901961, 0.901961, 1.0 ],
					"color" : [ 0.65098, 0.65098, 0.65098, 1.0 ],
					"fontface" : 3,
					"fontname" : "Arial",
					"fontsize" : 10.0,
					"id" : "obj-23",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 217.0, 329.0, 89.0, 18.0 ],
					"saved_object_attributes" : 					{
						"filename" : "ta.stripvelocity",
						"parameter_enable" : 0
					}
,
					"text" : "js ta.stripvelocity"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.258824, 0.517647, 0.709804, 1.0 ],
					"fontname" : "Arial",
					"fontsize" : 13.0,
					"id" : "obj-12",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 217.0, 400.0, 137.0, 19.0 ],
					"text" : "1 0 1 1 0 0 1 1 1 0 0 1"
				}

			}
, 			{
				"box" : 				{
					"bgcolor" : [ 0.901961, 0.901961, 0.901961, 1.0 ],
					"color" : [ 0.65098, 0.65098, 0.65098, 1.0 ],
					"embedstate" : [ [ "defer", 0 ] ],
					"fontface" : 3,
					"fontname" : "Arial",
					"fontsize" : 10.0,
					"id" : "obj-7",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 217.0, 363.0, 106.0, 18.0 ],
					"saved_object_attributes" : 					{
						"filename" : "ta.note2pitchclass",
						"parameter_enable" : 0
					}
,
					"text" : "js ta.note2pitchclass"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 306.5, 208.0, 226.5, 208.0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 251.5, 206.5, 226.5, 206.5 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-49", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 138.0, 63.5, 93.0, 63.5 ],
					"source" : [ "obj-13", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-15", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-15", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-16", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 226.5, 356.0, 226.5, 356.0 ],
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-2", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-24", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-16", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-49", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 226.5, 391.5, 344.5, 391.5 ],
					"source" : [ "obj-7", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "ta.note2pitchclass.js",
				"bootpath" : "/Applications/Max 6.1/packages/TA-Library/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "ta.stripvelocity.js",
				"bootpath" : "/Applications/Max 6.1/packages/TA-Library/javascript",
				"patcherrelativepath" : "../javascript",
				"type" : "TEXT",
				"implicit" : 1
			}
 ]
	}

}
