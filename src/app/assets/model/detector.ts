
const detectorModel: any = [
    { // inverted A
        "name": "inverted A",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalUpRight",
            1
          ],
          [
            "addCurl",
            "Index",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Middle",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalUp",
            0.1111111111111111
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalUpLeft",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalUpLeft",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalUpRight",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalDownRight",
            1
          ],
          [
            "addDirection",
            "Index",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalDown",
            0.1111111111111111
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalDownLeft",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalDownLeft",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalDownRight",
            1
          ],
          [
            "setWeight",
            "Thumb",
            2
          ],
          [
            "setWeight",
            "Index",
            2
          ],
          [
            "setWeight",
            "Pinky",
            2
          ]
        ],
        "enabled": true
      },
      { // A
        name: "A",
        algorithm: "fingerpose",
        models: "hands",
        confidence: 7.5,
        description: [
          ["addCurl", "Thumb", "NoCurl", 1],
          ["addDirection", "Thumb", "VerticalUp", 0.875],
          ["addDirection", "Thumb", "DiagonalUpLeft", 1],
          ["addCurl", "Index", "FullCurl", 1],
          ["addDirection", "Index", "VerticalUp", 1],
          ["addCurl", "Middle", "FullCurl", 1],
          ["addDirection", "Middle", "VerticalUp", 1],
          ["addDirection", "Middle", "DiagonalUpLeft", 0.07142857142857142],
          ["addCurl", "Ring", "FullCurl", 1],
          ["addDirection", "Ring", "VerticalUp", 1],
          ["addCurl", "Pinky", "FullCurl", 1],
          ["addDirection", "Pinky", "DiagonalUpRight", 1],
          ["addDirection", "Pinky", "VerticalUp", 0.5789473684210527],
          ["setWeight", "Thumb", 2],
          ["setWeight", "Index", 2],
          ["setWeight", "Middle", 2],
          ["setWeight", "Ring", 2],
          ["setWeight", "Pinky", 2]
        ],
        enabled: true
      },
      {  // inverted B
        "name": "inverted B",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Index",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Middle",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Ring",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalUp",
            1
          ],
          [
            "setWeight",
            "Thumb",
            2
          ]
        ],
        "enabled": true
      },
      { // C
        "name": "C",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalUpLeft",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "HorizontalLeft",
            0.07142857142857142
          ],
          [
            "addCurl",
            "Index",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "DiagonalUpLeft",
            1
          ],
          [
            "addCurl",
            "Middle",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "DiagonalUpLeft",
            1
          ],
          [
            "addCurl",
            "Ring",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "DiagonalUpLeft",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalUpLeft",
            1
          ],
          [
            "setWeight",
            "Thumb",
            2
          ],
          [
            "setWeight",
            "Pinky",
            2
          ]
        ]
      },
      { // INSERT
        "name": "INSERT",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalUpRight",
            1
          ],
          [
            "addCurl",
            "Index",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Middle",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalUp",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalUpLeft",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalDownRight",
            1
          ],
          [
            "addDirection",
            "Index",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalDownLeft",
            1
          ],
          [
            "setWeight",
            "Thumb",
            2
          ],
          [
            "setWeight",
            "Index",
            2
          ],
          [
            "setWeight",
            "Middle",
            2
          ],
          [
            "setWeight",
            "Ring",
            2
          ],
          [
            "setWeight",
            "Pinky",
            2
          ]
        ],
        "enabled": true
      },
      { // D
        "name": "D",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Index",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Middle",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalUp",
            1
          ],
          [
            "addDirection",
            "Middle",
            "DiagonalUpLeft",
            0.034482758620689655
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalUpRight",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalUp",
            0.07142857142857142
          ],
          [
            "addDirection",
            "Middle",
            "DiagonalUpRight",
            0.034482758620689655
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalUpLeft",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Index",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Middle",
            "DiagonalDownLeft",
            0.034482758620689655
          ],
          [
            "addDirection",
            "Ring",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalDownRight",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalDown",
            0.07142857142857142
          ],
          [
            "addDirection",
            "Middle",
            "DiagonalDownRight",
            0.034482758620689655
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalDownLeft",
            1
          ],
          [
            "setWeight",
            "Thumb",
            2
          ],
          [
            "setWeight",
            "Index",
            2
          ]
        ],
        "enabled": true
      },
      { // E
        "name": "E",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalUpRight",
            1
          ],
          [
            "addCurl",
            "Index",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "VerticalUp",
            1
          ],
          [
            "addDirection",
            "Index",
            "DiagonalUpLeft",
            0.1111111111111111
          ],
          [
            "addCurl",
            "Middle",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalUp",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalUpLeft",
            1
          ],
          [
            "addDirection",
            "Index",
            "DiagonalUpRight",
            0.1111111111111111
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalDownRight",
            1
          ],
          [
            "addDirection",
            "Index",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Index",
            "DiagonalDownLeft",
            0.1111111111111111
          ],
          [
            "addDirection",
            "Middle",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalDownLeft",
            1
          ],
          [
            "addDirection",
            "Index",
            "DiagonalDownRight",
            0.1111111111111111
          ],
          [
            "setWeight",
            "Thumb",
            2
          ]
        ]
      },
      { // BACKSPACE
        "name": "BACKSPACE",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalUpLeft",
            1
          ],
          [
            "addCurl",
            "Index",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Middle",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalUpRight",
            0.6666666666666666
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalUp",
            1
          ],
          [
            "setWeight",
            "Thumb",
            2
          ]
        ]
      },
      { // F
        "name": "F",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalUpLeft",
            1
          ],
          [
            "addCurl",
            "Index",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "DiagonalUpLeft",
            1
          ],
          [
            "addCurl",
            "Middle",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Ring",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalUp",
            1
          ],
          [
            "setWeight",
            "Middle",
            2
          ],
          [
            "setWeight",
            "Ring",
            2
          ],
          [
            "setWeight",
            "Pinky",
            2
          ]
        ]
      },
      { // G
        "name": "G",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "HalfCurl",
            1
          ],
          [
            "addCurl",
            "Thumb",
            "NoCurl",
            0.034482758620689655
          ],
          [
            "addDirection",
            "Thumb",
            "HorizontalRight",
            1
          ],
          [
            "addCurl",
            "Index",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "HorizontalRight",
            1
          ],
          [
            "addCurl",
            "Middle",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "HorizontalRight",
            1
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "HorizontalRight",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "HorizontalRight",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "HorizontalLeft",
            1
          ],
          [
            "addDirection",
            "Index",
            "HorizontalLeft",
            1
          ],
          [
            "addDirection",
            "Middle",
            "HorizontalLeft",
            1
          ],
          [
            "addDirection",
            "Ring",
            "HorizontalLeft",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "HorizontalLeft",
            1
          ],
          [
            "setWeight",
            "Thumb",
            2
          ],
          [
            "setWeight",
            "Index",
            2
          ]
        ]
      },
      { // H
        "name": "H",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "HorizontalRight",
            1
          ],
          [
            "addCurl",
            "Index",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "HorizontalRight",
            1
          ],
          [
            "addCurl",
            "Middle",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "HorizontalRight",
            1
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "HorizontalRight",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "HorizontalRight",
            1
          ],
          [
            "setWeight",
            "Thumb",
            2
          ],
          [
            "setWeight",
            "Index",
            2
          ],
          [
            "setWeight",
            "Middle",
            2
          ]
        ]
      },
      { // I
        "name": "I",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Index",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "DiagonalUpLeft",
            1
          ],
          [
            "addDirection",
            "Index",
            "VerticalUp",
            0.034482758620689655
          ],
          [
            "addCurl",
            "Middle",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalUp",
            1
          ],
          [
            "addDirection",
            "Middle",
            "DiagonalUpLeft",
            0.1111111111111111
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalUp",
            1
          ]
        ]
      },
      { // J
        "name": "J",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "HorizontalRight",
            1
          ],
          [
            "addCurl",
            "Index",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "DiagonalUpRight",
            1
          ],
          [
            "addCurl",
            "Middle",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "HorizontalRight",
            1
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "HorizontalRight",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "HorizontalRight",
            1
          ],
          [
            "setWeight",
            "Index",
            2
          ],
          [
            "setWeight",
            "Pinky",
            2
          ]
        ]
      },
      { // K
        "name": "K",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Index",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "DiagonalUpLeft",
            1
          ],
          [
            "addCurl",
            "Middle",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalUpRight",
            1
          ],
          [
            "setWeight",
            "Thumb",
            2
          ],
          [
            "setWeight",
            "Index",
            2
          ],
          [
            "setWeight",
            "Middle",
            2
          ]
        ]
      },
      { // L
        "name": "L",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalUpLeft",
            1
          ],
          [
            "addCurl",
            "Index",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "DiagonalUpLeft",
            1
          ],
          [
            "addCurl",
            "Middle",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "DiagonalUpLeft",
            0.2
          ],
          [
            "addDirection",
            "Middle",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalUp",
            1
          ],
          [
            "setWeight",
            "Thumb",
            2
          ],
          [
            "setWeight",
            "Index",
            2
          ]
        ]
      },
      { // M
        "name": "M",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "HalfCurl",
            0.5
          ],
          [
            "addCurl",
            "Thumb",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalUpRight",
            0.875
          ],
          [
            "addDirection",
            "Thumb",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Index",
            "FullCurl",
            1
          ],
          [
            "addCurl",
            "Index",
            "NoCurl",
            0.3181818181818182
          ],
          [
            "addCurl",
            "Index",
            "HalfCurl",
            0.045454545454545456
          ],
          [
            "addDirection",
            "Index",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Middle",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalUpRight",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "VerticalUp",
            0.2
          ],
          [
            "setWeight",
            "Thumb",
            2
          ],
          [
            "setWeight",
            "Pinky",
            2
          ]
        ]
      },
      { // N
        "name": "N",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Index",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "DiagonalUpLeft",
            1
          ],
          [
            "addCurl",
            "Middle",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "DiagonalUpLeft",
            1
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "VerticalUp",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalUpRight",
            1
          ],
          [
            "setWeight",
            "Pinky",
            2
          ]
        ]
      },
      { // O
        "name": "O",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "HorizontalLeft",
            1
          ],
          [
            "addCurl",
            "Index",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "HorizontalLeft",
            1
          ],
          [
            "addCurl",
            "Middle",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "HorizontalLeft",
            1
          ],
          [
            "addCurl",
            "Ring",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "HorizontalLeft",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "HorizontalLeft",
            1
          ]
        ]
      },
      { // P
        "name": "P",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "DiagonalDownRight",
            1
          ],
          [
            "addCurl",
            "Index",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "HorizontalRight",
            1
          ],
          [
            "addCurl",
            "Middle",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "HorizontalRight",
            1
          ],
          [
            "addDirection",
            "Middle",
            "DiagonalDownRight",
            0.30434782608695654
          ],
          [
            "addCurl",
            "Ring",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "DiagonalDownRight",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "HalfCurl",
            1
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalDownRight",
            1
          ],
          [
            "setWeight",
            "Thumb",
            2
          ],
          [
            "setWeight",
            "Index",
            2
          ]
        ]
      },
      { // Q
        "name": "Q",
        "algorithm": "fingerpose",
        "models": "hands",
        "confidence": 7.5,
        "description": [
          [
            "addCurl",
            "Thumb",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Thumb",
            "VerticalDown",
            1
          ],
          [
            "addCurl",
            "Index",
            "NoCurl",
            1
          ],
          [
            "addDirection",
            "Index",
            "VerticalDown",
            1
          ],
          [
            "addDirection",
            "Index",
            "DiagonalDownRight",
            0.07142857142857142
          ],
          [
            "addCurl",
            "Middle",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Middle",
            "DiagonalDownRight",
            1
          ],
          [
            "addCurl",
            "Ring",
            "FullCurl",
            1
          ],
          [
            "addDirection",
            "Ring",
            "DiagonalDownRight",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "FullCurl",
            1
          ],
          [
            "addCurl",
            "Pinky",
            "NoCurl",
            0.034482758620689655
          ],
          [
            "addDirection",
            "Pinky",
            "DiagonalDownRight",
            1
          ],
          [
            "setWeight",
            "Thumb",
            2
          ],
          [
            "setWeight",
            "Index",
            2
          ]
        ],
        "enabled": true
      }
]

export default detectorModel;