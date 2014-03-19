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
		"rect" : [ 1779.0, 452.0, 515.0, 255.0 ],
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
		"description" : "Convert musical dynamics (p, mf, ff...) to MIDI velocity values",
		"digest" : "Dynamics to MIDI velocity ",
		"tags" : "TA-Library MIDI Notes Math",
		"boxes" : [ 			{
				"box" : 				{
					"coll_data" : 					{
						"count" : 16,
						"data" : [ 							{
								"key" : 0,
								"value" : [ 16 ]
							}
, 							{
								"key" : 1,
								"value" : [ 32 ]
							}
, 							{
								"key" : 2,
								"value" : [ 48 ]
							}
, 							{
								"key" : 3,
								"value" : [ 64 ]
							}
, 							{
								"key" : 4,
								"value" : [ 80 ]
							}
, 							{
								"key" : 5,
								"value" : [ 96 ]
							}
, 							{
								"key" : 6,
								"value" : [ 112 ]
							}
, 							{
								"key" : 7,
								"value" : [ 127 ]
							}
, 							{
								"key" : "ppp",
								"value" : [ 16 ]
							}
, 							{
								"key" : "pp",
								"value" : [ 32 ]
							}
, 							{
								"key" : "p",
								"value" : [ 48 ]
							}
, 							{
								"key" : "mp",
								"value" : [ 64 ]
							}
, 							{
								"key" : "mf",
								"value" : [ 80 ]
							}
, 							{
								"key" : "f",
								"value" : [ 96 ]
							}
, 							{
								"key" : "ff",
								"value" : [ 112 ]
							}
, 							{
								"key" : "fff",
								"value" : [ 127 ]
							}
 ]
					}
,
					"fontname" : "Arial",
					"fontsize" : 10.0,
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "", "", "" ],
					"patching_rect" : [ 35.0, 125.0, 123.0, 18.0 ],
					"saved_object_attributes" : 					{
						"embed" : 1
					}
,
					"text" : "coll ta_dynamics2velocity"
				}

			}
, 			{
				"box" : 				{
					"comment" : "(int) MIDI velocity",
					"id" : "obj-4",
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 35.0, 210.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "0 - ppp, 1 - pp, 2",
					"id" : "obj-3",
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 35.0, 40.0, 20.0, 20.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"source" : [ "obj-5", 0 ]
				}

			}
 ]
	}

}
