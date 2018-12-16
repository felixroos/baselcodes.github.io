const emojis = [
    '🦄', '👶', '👶🏻', '👶🏼', '👶🏽', '👶🏾', '👶🏿', '🧒', '🧒🏻', '🧒🏼', '🧒🏽', '🧒🏾', '🧒🏿', '👦', '👦🏻', '👦🏼', '👦🏽', '👦🏾', '👦🏿', '👧', '👧🏻', '👧🏼', '👧🏽', '👧🏾', '👧🏿', '🧑', '🧑🏻', '🧑🏼', '🧑🏽', '🧑🏾', '🧑🏿', '👨', '👨🏻', '👨🏼', '👨🏽', '👨🏾', '👨🏿', '👩', '👩🏻', '👩🏼', '👩🏽', '👩🏾', '👩🏿', '🧓', '🧓🏻', '🧓🏼', '🧓🏽', '🧓🏾', '🧓🏿', '👴', '👴🏻', '👴🏼', '👴🏽', '👴🏾', '👴🏿', '👵', '👵🏻', '👵🏼', '👵🏽', '👵🏾', '👵🏿',  '👨‍⚕️', '👨‍⚕', '👨🏻‍⚕️', '👨🏻‍⚕', '👨🏼‍⚕️', '👨🏼‍⚕', '👨🏽‍⚕️', '👨🏽‍⚕', '👨🏾‍⚕️', '👨🏾‍⚕', '👨🏿‍⚕️', '👨🏿‍⚕', '👩‍⚕️', '👩‍⚕', '👩🏻‍⚕️', '👩🏻‍⚕', '👩🏼‍⚕️', '👩🏼‍⚕', '👩🏽‍⚕️', '👩🏽‍⚕', '👩🏾‍⚕️', '👩🏾‍⚕', '👩🏿‍⚕️', '👩🏿‍⚕', '👨‍🎓', '👨🏻‍🎓', '👨🏼‍🎓', '👨🏽‍🎓', '👨🏾‍🎓', '👨🏿‍🎓', '👩‍🎓', '👩🏻‍🎓', '👩🏼‍🎓', '👩🏽‍🎓', '👩🏾‍🎓', '👩🏿‍🎓', '👨‍🏫', '👨🏻‍🏫', '👨🏼‍🏫', '👨🏽‍🏫', '👨🏾‍🏫', '👨🏿‍🏫', '👩‍🏫', '👩🏻‍🏫', '👩🏼‍🏫', '👩🏽‍🏫', '👩🏾‍🏫', '👩🏿‍🏫', '👨‍⚖️', '👨‍⚖', '👨🏻‍⚖️', '👨🏻‍⚖', '👨🏼‍⚖️', '👨🏼‍⚖', '👨🏽‍⚖️', '👨🏽‍⚖', '👨🏾‍⚖️', '👨🏾‍⚖', '👨🏿‍⚖️', '👨🏿‍⚖', '👩‍⚖️', '👩‍⚖', '👩🏻‍⚖️', '👩🏻‍⚖', '👩🏼‍⚖️', '👩🏼‍⚖', '👩🏽‍⚖️', '👩🏽‍⚖', '👩🏾‍⚖️', '👩🏾‍⚖', '👩🏿‍⚖️', '👩🏿‍⚖', '👨‍🌾', '👨🏻‍🌾', '👨🏼‍🌾', '👨🏽‍🌾', '👨🏾‍🌾', '👨🏿‍🌾', '👩‍🌾', '👩🏻‍🌾', '👩🏼‍🌾', '👩🏽‍🌾', '👩🏾‍🌾', '👩🏿‍🌾', '👨‍🍳', '👨🏻‍🍳', '👨🏼‍🍳', '👨🏽‍🍳', '👨🏾‍🍳', '👨🏿‍🍳', '👩‍🍳', '👩🏻‍🍳', '👩🏼‍🍳', '👩🏽‍🍳', '👩🏾‍🍳', '👩🏿‍🍳', '👨‍🔧', '👨🏻‍🔧', '👨🏼‍🔧', '👨🏽‍🔧', '👨🏾‍🔧', '👨🏿‍🔧', '👩‍🔧', '👩🏻‍🔧', '👩🏼‍🔧', '👩🏽‍🔧', '👩🏾‍🔧', '👩🏿‍🔧', '👨‍🏭', '👨🏻‍🏭', '👨🏼‍🏭', '👨🏽‍🏭', '👨🏾‍🏭', '👨🏿‍🏭', '👩‍🏭', '👩🏻‍🏭', '👩🏼‍🏭', '👩🏽‍🏭', '👩🏾‍🏭', '👩🏿‍🏭', '👨‍💼', '👨🏻‍💼', '👨🏼‍💼', '👨🏽‍💼', '👨🏾‍💼', '👨🏿‍💼', '👩‍💼', '👩🏻‍💼', '👩🏼‍💼', '👩🏽‍💼', '👩🏾‍💼', '👩🏿‍💼', '👨‍🔬', '👨🏻‍🔬', '👨🏼‍🔬', '👨🏽‍🔬', '👨🏾‍🔬', '👨🏿‍🔬', '👩‍🔬', '👩🏻‍🔬', '👩🏼‍🔬', '👩🏽‍🔬', '👩🏾‍🔬', '👩🏿‍🔬', '👨‍💻', '👨🏻‍💻', '👨🏼‍💻', '👨🏽‍💻', '👨🏾‍💻', '👨🏿‍💻', '👩‍💻', '👩🏻‍💻', '👩🏼‍💻', '👩🏽‍💻', '👩🏾‍💻', '👩🏿‍💻', '👨‍🎤', '👨🏻‍🎤', '👨🏼‍🎤', '👨🏽‍🎤', '👨🏾‍🎤', '👨🏿‍🎤', '👩‍🎤', '👩🏻‍🎤', '👩🏼‍🎤', '👩🏽‍🎤', '👩🏾‍🎤', '👩🏿‍🎤', '👨‍🎨', '👨🏻‍🎨', '👨🏼‍🎨', '👨🏽‍🎨', '👨🏾‍🎨', '👨🏿‍🎨', '👩‍🎨', '👩🏻‍🎨', '👩🏼‍🎨', '👩🏽‍🎨', '👩🏾‍🎨', '👩🏿‍🎨', '👨‍✈️', '👨‍✈', '👨🏻‍✈️', '👨🏻‍✈', '👨🏼‍✈️', '👨🏼‍✈', '👨🏽‍✈️', '👨🏽‍✈', '👨🏾‍✈️', '👨🏾‍✈', '👨🏿‍✈️', '👨🏿‍✈', '👩‍✈️', '👩‍✈', '👩🏻‍✈️', '👩🏻‍✈', '👩🏼‍✈️', '👩🏼‍✈', '👩🏽‍✈️', '👩🏽‍✈', '👩🏾‍✈️', '👩🏾‍✈', '👩🏿‍✈️', '👩🏿‍✈', '👨‍🚀', '👨🏻‍🚀', '👨🏼‍🚀', '👨🏽‍🚀', '👨🏾‍🚀', '👨🏿‍🚀', '👩‍🚀', '👩🏻‍🚀', '👩🏼‍🚀', '👩🏽‍🚀', '👩🏾‍🚀', '👩🏿‍🚀', '👨‍🚒', '👨🏻‍🚒', '👨🏼‍🚒', '👨🏽‍🚒', '👨🏾‍🚒', '👨🏿‍🚒', '👩‍🚒', '👩🏻‍🚒', '👩🏼‍🚒', '👩🏽‍🚒', '👩🏾‍🚒', '👩🏿‍🚒', '👮', '👮🏻', '👮🏼', '👮🏽', '👮🏾', '👮🏿', '👮‍♂️', '👮‍♂', '👮🏻‍♂️', '👮🏻‍♂', '👮🏼‍♂️', '👮🏼‍♂', '👮🏽‍♂️', '👮🏽‍♂', '👮🏾‍♂️', '👮🏾‍♂', '👮🏿‍♂️', '👮🏿‍♂', '👮‍♀️', '👮‍♀', '👮🏻‍♀️', '👮🏻‍♀', '👮🏼‍♀️', '👮🏼‍♀', '👮🏽‍♀️', '👮🏽‍♀', '👮🏾‍♀️', '👮🏾‍♀', '👮🏿‍♀️', '👮🏿‍♀', '🕵️', '🕵', '🕵🏻', '🕵🏼', '🕵🏽', '🕵🏾', '🕵🏿', '🕵️‍♂️', '🕵‍♂️', '🕵️‍', '🕵‍♂', '🕵🏻‍♂️', '🕵🏻‍♂', '🕵🏼‍♂️', '🕵🏼‍♂', '🕵🏽‍♂️', '🕵🏽‍♂', '🕵🏾‍♂️', '🕵🏾‍♂', '🕵🏿‍♂️', '🕵🏿‍♂', '🕵️‍♀️', '🕵‍♀️', '🕵️‍', '🕵‍♀', '🕵🏻‍♀️', '🕵🏻‍♀', '🕵🏼‍♀️', '🕵🏼‍♀', '🕵🏽‍♀️', '🕵🏽‍♀', '🕵🏾‍♀️', '🕵🏾‍♀', '🕵🏿‍♀️', '🕵🏿‍♀', '💂', '💂🏻', '💂🏼', '💂🏽', '💂🏾', '💂🏿', '💂‍♂️', '💂‍♂', '💂🏻‍♂️', '💂🏻‍♂', '💂🏼‍♂️', '💂🏼‍♂', '💂🏽‍♂️', '💂🏽‍♂', '💂🏾‍♂️', '💂🏾‍♂', '💂🏿‍♂️', '💂🏿‍♂', '💂‍♀️', '💂‍♀', '💂🏻‍♀️', '💂🏻‍♀', '💂🏼‍♀️', '💂🏼‍♀', '💂🏽‍♀️', '💂🏽‍♀', '💂🏾‍♀️', '💂🏾‍♀', '💂🏿‍♀️', '💂🏿‍♀', '👷', '👷🏻', '👷🏼', '👷🏽', '👷🏾', '👷🏿', '👷‍♂️', '👷‍♂', '👷🏻‍♂️', '👷🏻‍♂', '👷🏼‍♂️', '👷🏼‍♂', '👷🏽‍♂️', '👷🏽‍♂', '👷🏾‍♂️', '👷🏾‍♂', '👷🏿‍♂️', '👷🏿‍♂', '👷‍♀️', '👷‍♀', '👷🏻‍♀️', '👷🏻‍♀', '👷🏼‍♀️', '👷🏼‍♀', '👷🏽‍♀️', '👷🏽‍♀', '👷🏾‍♀️', '👷🏾‍♀', '👷🏿‍♀️', '👷🏿‍♀', '🤴', '🤴🏻', '🤴🏼', '🤴🏽', '🤴🏾', '🤴🏿', '👸', '👸🏻', '👸🏼', '👸🏽', '👸🏾', '👸🏿', '👳', '👳🏻', '👳🏼', '👳🏽', '👳🏾', '👳🏿', '👳‍♂️', '👳‍♂', '👳🏻‍♂️', '👳🏻‍♂', '👳🏼‍♂️', '👳🏼‍♂', '👳🏽‍♂️', '👳🏽‍♂', '👳🏾‍♂️', '👳🏾‍♂', '👳🏿‍♂️', '👳🏿‍♂', '👳‍♀️', '👳‍♀', '👳🏻‍♀️', '👳🏻‍♀', '👳🏼‍♀️', '👳🏼‍♀', '👳🏽‍♀️', '👳🏽‍♀', '👳🏾‍♀️', '👳🏾‍♀', '👳🏿‍♀️', '👳🏿‍♀', '👲', '👲🏻', '👲🏼', '👲🏽', '👲🏾', '👲🏿', '🧕', '🧕🏻', '🧕🏼', '🧕🏽', '🧕🏾', '🧕🏿', '🧔', '🧔🏻', '🧔🏼', '🧔🏽', '🧔🏾', '🧔🏿', '👱', '👱🏻', '👱🏼', '👱🏽', '👱🏾', '👱🏿', '👱‍♂️', '👱‍♂', '👱🏻‍♂️', '👱🏻‍♂', '👱🏼‍♂️', '👱🏼‍♂', '👱🏽‍♂️', '👱🏽‍♂', '👱🏾‍♂️', '👱🏾‍♂', '👱🏿‍♂️', '👱🏿‍♂', '👱‍♀️', '👱‍♀', '👱🏻‍♀️', '👱🏻‍♀', '👱🏼‍♀️', '👱🏼‍♀', '👱🏽‍♀️', '👱🏽‍♀', '👱🏾‍♀️', '👱🏾‍♀', '👱🏿‍♀️', '👱🏿‍♀', '👨‍', '👨🏻‍', '👨🏼‍', '👨🏽‍', '👨🏾‍', '👨🏿‍', '👩‍', '👩🏻‍', '👩🏼‍', '👩🏽‍', '👩🏾‍', '👩🏿‍', '👨‍', '👨🏻‍', '👨🏼‍', '👨🏽‍', '👨🏾‍', '👨🏿‍', '👩‍', '👩🏻‍', '👩🏼‍', '👩🏽‍', '👩🏾‍', '👩🏿‍', '👨‍', '👨🏻‍', '👨🏼‍', '👨🏽‍', '👨🏾‍', '👨', '👩‍', '👩🏻‍', '👩🏼‍', '👩🏽‍', '👩🏾‍', '👩', '👨', '👨🏻', '👨🏼', '👨🏽', '👨🏾', '👨🏿', '👩', '👩🏻', '👩🏼', '👩🏽', '👩🏾', '👩🏿‍', '🤵', '🤵🏻', '🤵🏼', '🤵🏽', '🤵🏾', '🤵🏿', '👰', '👰🏻', '👰🏼', '👰🏽', '👰🏾', '👰🏿', '🤰', '🤰🏻', '🤰🏼', '🤰🏽', '🤰🏾', '🤰🏿', '🤱', '🤱🏻', '🤱🏼', '🤱🏽', '🤱🏾', '🤱🏿',  '👼', '👼🏻', '👼🏼', '👼🏽', '👼🏾', '👼🏿', '🎅', '🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', '🎅🏿', '🤶', '🤶🏻', '🤶🏼', '🤶🏽', '🤶🏾', '🤶🏿', '🧙', '🧙🏻', '🧙🏼', '🧙🏽', '🧙🏾', '🧙🏿', '🧙‍♀️', '🧙‍♀', '🧙🏻‍♀️', '🧙🏻‍♀', '🧙🏼‍♀️', '🧙🏼‍♀', '🧙🏽‍♀️', '🧙🏽‍♀', '🧙🏾‍♀️', '🧙🏾‍♀', '🧙🏿‍♀️', '🧙🏿‍♀', '🧙‍♂️', '🧙‍♂', '🧙🏻‍♂️', '🧙🏻‍♂', '🧙🏼‍♂️', '🧙🏼‍♂', '🧙🏽‍♂️', '🧙🏽‍♂', '🧙🏾‍♂️', '🧙🏾‍♂', '🧙🏿‍♂️', '🧙🏿‍♂', '🧚', '🧚🏻', '🧚🏼', '🧚🏽', '🧚🏾', '🧚🏿', '🧚‍♀️', '🧚‍♀', '🧚🏻‍♀️', '🧚🏻‍♀', '🧚🏼‍♀️', '🧚🏼‍♀', '🧚🏽‍♀️', '🧚🏽‍♀', '🧚🏾‍♀️', '🧚🏾‍♀', '🧚🏿‍♀️', '🧚🏿‍♀', '🧚‍♂️', '🧚‍♂', '🧚🏻‍♂️', '🧚🏻‍♂', '🧚🏼‍♂️', '🧚🏼‍♂', '🧚🏽‍♂️', '🧚🏽‍♂', '🧚🏾‍♂️', '🧚🏾‍♂', '🧚🏿‍♂️', '🧚🏿‍♂', '🧛', '🧛🏻', '🧛🏼', '🧛🏽', '🧛🏾', '🧛🏿', '🧛‍♀️', '🧛‍♀', '🧛🏻‍♀️', '🧛🏻‍♀', '🧛🏼‍♀️', '🧛🏼‍♀', '🧛🏽‍♀️', '🧛🏽‍♀', '🧛🏾‍♀️', '🧛🏾‍♀', '🧛🏿‍♀️', '🧛🏿‍♀', '🧛‍♂️', '🧛‍♂', '🧛🏻‍♂️', '🧛🏻‍♂', '🧛🏼‍♂️', '🧛🏼‍♂', '🧛🏽‍♂️', '🧛🏽‍♂', '🧛🏾‍♂️', '🧛🏾‍♂', '🧛🏿‍♂️', '🧛🏿‍♂', '🧜', '🧜🏻', '🧜🏼', '🧜🏽', '🧜🏾', '🧜🏿', '🧜‍♀️', '🧜‍♀', '🧜🏻‍♀️', '🧜🏻‍♀', '🧜🏼‍♀️', '🧜🏼‍♀', '🧜🏽‍♀️', '🧜🏽‍♀', '🧜🏾‍♀️', '🧜🏾‍♀', '🧜🏿‍♀️', '🧜🏿‍♀', '🧜‍♂️', '🧜‍♂', '🧜🏻‍♂️', '🧜🏻‍♂', '🧜🏼‍♂️', '🧜🏼‍♂', '🧜🏽‍♂️', '🧜🏽‍♂', '🧜🏾‍♂️', '🧜🏾‍♂', '🧜🏿‍♂️', '🧜🏿‍♂', '🧝', '🧝🏻', '🧝🏼', '🧝🏽', '🧝🏾', '🧝🏿', '🧝‍♀️', '🧝‍♀', '🧝🏻‍♀️', '🧝🏻‍♀', '🧝🏼‍♀️', '🧝🏼‍♀', '🧝🏽‍♀️', '🧝🏽‍♀', '🧝🏾‍♀️', '🧝🏾‍♀', '🧝🏿‍♀️', '🧝🏿‍♀', '🧝‍♂️', '🧝‍♂', '🧝🏻‍♂️', '🧝🏻‍♂', '🧝🏼‍♂️', '🧝🏼‍♂', '🧝🏽‍♂️', '🧝🏽‍♂', '🧝🏾‍♂️', '🧝🏾‍♂', '🧝🏿‍♂️', '🧝🏿‍♂', '🧞', '🧞‍♀️', '🧞‍♀', '🧞‍♂️', '🧞‍♂', '🧟', '🧟‍♀️', '🧟‍♀', '🧟‍♂️', '🧟‍♂', '🙎', '🙎🏻', '🙎🏼', '🙎🏽', '🙎🏾', '🙎🏿', '🙎‍♂️', '🙎‍♂', '🙎🏻‍♂️', '🙎🏻‍♂', '🙎🏼‍♂️', '🙎🏼‍♂', '🙎🏽‍♂️', '🙎🏽‍♂', '🙎🏾‍♂️', '🙎🏾‍♂', '🙎🏿‍♂️', '🙎🏿‍♂', '🙎‍♀️', '🙎‍♀', '🙎🏻‍♀️', '🙎🏻‍♀', '🙎🏼‍♀️', '🙎🏼‍♀', '🙎🏽‍♀️', '🙎🏽‍♀', '🙎🏾‍♀️', '🙎🏾‍♀', '🙎🏿‍♀️', '🙎🏿‍♀', '🚶', '🚶🏻', '🚶🏼', '🚶🏽', '🚶🏾', '🚶🏿', '🚶‍♂️', '🚶‍♂', '🚶🏻‍♂️', '🚶🏻‍♂', '🚶🏼‍♂️', '🚶🏼‍♂', '🚶🏽‍♂️', '🚶🏽‍♂', '🚶🏾‍♂️', '🚶🏾‍♂', '🚶🏿‍♂️', '🚶🏿‍♂', '🚶‍♀️', '🚶‍♀', '🚶🏻‍♀️', '🚶🏻‍♀', '🚶🏼‍♀️', '🚶🏼‍♀', '🚶🏽‍♀️', '🚶🏽‍♀', '🚶🏾‍♀️', '🚶🏾‍♀', '🚶🏿‍♀️', '🚶🏿‍♀', '🏃', '🏃🏻', '🏃🏼', '🏃🏽', '🏃🏾', '🏃🏿', '🏃‍♂️', '🏃‍♂', '🏃🏻‍♂️', '🏃🏻‍♂', '🏃🏼‍♂️', '🏃🏼‍♂', '🏃🏽‍♂️', '🏃🏽‍♂', '🏃🏾‍♂️', '🏃🏾‍♂', '🏃🏿‍♂️', '🏃🏿‍♂', '🏃‍♀️', '🏃‍♀', '🏃🏻‍♀️', '🏃🏻‍♀', '🏃🏼‍♀️', '🏃🏼‍♀', '🏃🏽‍♀️', '🏃🏽‍♀', '🏃🏾‍♀️', '🏃🏾‍♀', '🏃🏿‍♀️', '🏃🏿‍♀', '💃', '💃🏻', '💃🏼', '💃🏽', '💃🏾', '💃🏿', '🕺', '🕺🏻', '🕺🏼', '🕺🏽', '🕺🏾', '🕺🏿', '🧖', '🧖🏻', '🧖🏼', '🧖🏽', '🧖🏾', '🧖🏿', '🧖‍♀️', '🧖‍♀', '🧖🏻‍♀️', '🧖🏻‍♀', '🧖🏼‍♀️', '🧖🏼‍♀', '🧖🏽‍♀️', '🧖🏽‍♀', '🧖🏾‍♀️', '🧖🏾‍♀', '🧖🏿‍♀️', '🧖🏿‍♀', '🧖‍♂️', '🧖‍♂', '🧖🏻‍♂️', '🧖🏻‍♂', '🧖🏼‍♂️', '🧖🏼‍♂', '🧖🏽‍♂️', '🧖🏽‍♂', '🧖🏾‍♂️', '🧖🏾‍♂', '🧖🏿‍♂️', '🧖🏿‍♂', '🧘', '🧘🏻', '🧘🏼', '🧘🏽', '🧘🏾', '🧘🏿', '🧘‍♀️', '🧘‍♀', '🧘🏻‍♀️', '🧘🏻‍♀', '🧘🏼‍♀️', '🧘🏼‍♀', '🧘🏽‍♀️', '🧘🏽‍♀', '🧘🏾‍♀️', '🧘🏾‍♀', '🧘🏿‍♀️', '🧘🏿‍♀', '🧘‍♂️', '🧘‍♂', '🧘🏻‍♂️', '🧘🏻‍♂', '🧘🏼‍♂️', '🧘🏼‍♂', '🧘🏽‍♂️', '🧘🏽‍♂', '🧘🏾‍♂️', '🧘🏾‍♂', '🧘🏿‍♂️', '🧘🏿‍♂', '🕴️', '🕴', '🕴🏻', '🕴🏼', '🕴🏽', '🕴🏾', '🕴🏿', '👪', '👨‍👩‍👦', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '👨‍👦', '👨‍👦‍👦', '👨‍👧', '👨‍👧‍👦', '👨‍👧‍👧', '👩‍👦', '👩‍👦‍👦', '👩‍👧', '👩‍👧‍👦', '👩‍👧‍👧', '🐵', '🐒', '🦍', '🐶', '🐕', '🐩', '🐺', '🦊', '🐱', '🐈', '🦁', '🐯', '🐅', '🐆', '🐴', '🐎', '🦄', '🦓', '🦌', '🐮', '🐂', '🐃', '🐄', '🐷', '🐖', '🐗', '🐽', '🐏', '🐑', '🐐', '🐪', '🐫', '🦒', '🐘', '🦏',  '🐭', '🐁', '🐀', '🐹', '🐰', '🐇', '🐿️', '🐿', '🦔', '🦇', '🐻', '🐨', '🐼','🐾',  '🦃', '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊️', '🕊', '🦅', '🦆', '🦉', '🐸', '🐊', '🐢', '🦎', '🐍', '🐲', '🐉', '🦕', '🦖',  '🐳', '🐋', '🐬', '🐟', '🐠', '🐡', '🦈', '🐙', '🐚', '🦀', '🦐', '🦑',  '🐌', '🦋', '🐛', '🐜', '🐝', '🐞', '🦗', '🕷️', '🕷', '🦂', '🌍', '🌎', '🌏', '🏛️', '🏠', '🏢', '🏨', '🏫', '🏰', '⛪', '🕌', '🕍', '⛩️', '🕋', '⛺', '🚃', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚝', '🚞', '🚋', '🚌', '🚐', '🚎', '🚢', '🛥️', '🛳️', '✈️', '🛩️', '🚁', '🚟', '🚠', '🚡', '🚀', '🛸', '☃️', '⛄', '☃'
]
class Boid {
    constructor(x, y) {
        this.boid = random(emojis);
        this.pos = createVector(x, y);
        this.ppos = this.pos;
        this.rvel = 1.5;
        this.vel = createVector(random(-this.rvel, this.rvel), random(-this.rvel, this.rvel));
        this.r = random(10, 40);
        this.directionx = 1;
        this.directiony = 1;
        this.maxSpeed = 50;
        this.trail = [];
    }
    show(balls) {

        this.proximity(balls);

        textSize(this.r)
        // strokeWeight(this.r);
        // point(this.position.x, this.position.y);
        text(this.boid, this.pos.x, this.pos.y);
        //noFill();
        //stroke(0, 0, 255);
        //ellipse(this.pos.x, this.pos.y, this.r);
        //beginShape();
        //for (const p of this.trail) {
            //vertex(p.x, p.y);
        //}
        //endShape();
        // noStroke();
        // fill(0, 0, 255);
        // stroke(255, 255, 0);
        // fill(this.color);
        //ellipse(this.pos.x, this.pos.y, this.r);
    }
    update() {
        this.pos.x += this.vel.x * this.directionx;
        this.pos.y += this.vel.y * this.directiony;
        this.ppos = this.pos;
        // this.pos.limit(this.maxSpeed);
        // this.trail.push({x: this.pos.x, y: this.pos.y});
        // if(this.trail.length > 50)this.trail.splice(0, 1);
        // this.edges();
    }
    edges() {
        if (this.pos.x > width - (this.r / 2) || this.pos.x <  this.r / 2) {
            //this.x -= this.vel.x *4 * this.directionx;
            this.directionx *= -1;

        }
        if (this.pos.y > height - (this.r / 2) || this.pos.y < this.r / 2) {
            //this.pos.y -= this.vel.y *4 * this.directiony;
            this.directiony *= -1;
        }
    }
    proximity(balls) {
        for (const ball of balls) {
            if (ball != this) {
                if (ball.pos.dist(this.pos) < 50) {
                    strokeWeight(2);
                    stroke(255);
                    line(ball.pos.x, ball.pos.y, this.pos.x, this.pos.y);
                    const dir = p5.Vector.sub(this.pos, ball.pos);
                    dir.normalize();
                    if(this.r < 60)
                        this.r += .1;
                    if(this.pos.y < height - (this.r / 2) && this.pos.y > this.r / 2 && this.pos.x < width - (this.r / 2) && this.pos.x >  this.r / 2)
                    this.pos.add(dir);
                }
            }
        }
    }
}