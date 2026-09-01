import {
  ConversationData,
  RiteStep,
  GodparentRequirement,
  ReadinessCheckItem,
  FamilyRuleHabit,
  EssentialItem
} from '../types';

export const DEFAULT_PARISH = "St Mary's | St John Bosco | St Edward's Parish";

export const CONVERSATIONS: ConversationData[] = [
  {
    id: 1,
    number: 1,
    title: "Baptism: New Life in Christ",
    subtitle: "What Baptism is, what grace it gives, and why the Church baptises infants",
    theme: "Sacramental Grace & Divine Filiation",
    rememberPoints: [
      "Baptism is the gateway to Christian life. God frees the baptised from sin, gives new life in Christ, makes them an adopted child of God and a member of the Church, and marks them permanently as belonging to Christ.",
      "Baptism is a sacrament: a visible action through which Christ truly gives the grace he promises. The outward washing with water is not merely a symbol of something we hope might happen. God acts through the sacrament, giving rebirth by water and the Holy Spirit.",
      "A baby has committed no personal sin. Original sin means that every human being is born into a fallen human condition and needs the salvation Christ gives. In Baptism original sin is remitted, sanctifying grace is given, the Holy Spirit dwells in the baptised, and the person is united with Christ and incorporated into his Church.",
      "The Church baptises infants because grace is a gift. A child receives life, love, language and care before being able to choose them. In the same way, parents ask the Church to give the child the gift of new life in Christ, while parents, godparents and the Church undertake to nurture that faith as the child grows."
    ],
    readSections: [
      {
        heading: "1. The Gateway to Life in Christ",
        content: [
          "Baptism is not merely a naming ceremony, a traditional blessing, or a family party. It is the foundation of the whole Christian life and the gateway to life in the Spirit.",
          "Through Baptism, God works a profound interior change in the soul of the child. Christ himself instituted this sacrament when he commanded his apostles: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit' (Matthew 28:19)."
        ],
        scriptureQuote: {
          text: "Very truly I tell you, no one can enter the kingdom of God unless they are born of water and the Spirit.",
          reference: "John 3:5"
        }
      },
      {
        heading: "2. Sacramental Grace and Divine Filiation",
        content: [
          "In Baptism, Christ bestows sanctifying grace—a real participation in the divine life of the Holy Trinity. The child becomes a living temple of the Holy Spirit and an adopted son or daughter of God the Father (Divine Filiation).",
          "Baptism also imprints on the soul an indelible spiritual mark (character) that consecrates the person for Christian worship. Because this seal is permanent and eternal, Baptism can never be repeated."
        ],
        scriptureQuote: {
          text: "See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!",
          reference: "1 John 3:1"
        }
      },
      {
        heading: "3. Original Sin and the Free Gift of Grace",
        content: [
          "An infant has committed no personal sin. Yet, as members of the human family, every child is born into a fallen world wounded by original sin—a state of separation from the life of grace.",
          "In infant Baptism, the Church reveals that grace is entirely God's unmerited gift. Just as parents give their baby milk, warmth, clothing, and human love long before the child can ask for them, so they bring their child to the font to receive the greatest gift: divine life and eternal salvation."
        ]
      }
    ],
    talkPrompt: {
      mainQuestion: "What are you asking God to give this child in Baptism that you cannot give by yourselves?",
      subPrompts: [
        "Think about: new life in Christ, freedom from sin, sanctifying grace, adoption as a child of God, belonging to the Church, and the hope of eternal life.",
        "How does knowing your child is truly an adopted child of God change how you see their future?"
      ],
      guidanceNotes: "There is no need for a polished or academic theological answer. Speak honestly from the heart about your hopes and prayers for your child."
    },
    essentials: [
      {
        id: 101,
        question: "1. What is Baptism?",
        conciseAnswer: "The sacrament of new birth by water and the word, and the gateway to Christian life.",
        catechismRef: "CCC 1213"
      },
      {
        id: 102,
        question: "2. What does Baptism do?",
        conciseAnswer: "It remits sin, gives sanctifying grace and the Holy Spirit, unites us with Christ and his Church, and gives an indelible spiritual character.",
        catechismRef: "CCC 1262-1274"
      },
      {
        id: 103,
        question: "3. Has a baby committed personal sin?",
        conciseAnswer: "No. Original sin is the fallen condition inherited by humanity, not a personal wrong committed by the baby.",
        catechismRef: "CCC 1250"
      },
      {
        id: 104,
        question: "4. Why does the Church baptise infants?",
        conciseAnswer: "Because Baptism is God's free gift of grace, received in the faith of the Church and nurtured as the child grows.",
        catechismRef: "CCC 1252"
      },
      {
        id: 105,
        question: "5. Can Baptism be repeated?",
        conciseAnswer: "No. Baptism marks the person permanently and is received only once.",
        catechismRef: "CCC 1272"
      }
    ],
    prayer: {
      title: "Prayer for New Life in Christ",
      text: "Heavenly Father, thank you for the gift of this child. As we prepare for Baptism, deepen our faith and help us receive with gratitude the new life you give in Christ. Amen."
    },
    thisWeek: {
      mainAction: "At Sunday Mass, pray especially for the child who will be baptised. At home, make the Sign of the Cross over them each evening and thank God for the gift of their life.",
      suggestions: [
        "Trace a gentle Sign of the Cross on your child's forehead at bedtime.",
        "Offer a quiet silent prayer of thanksgiving during the consecration at Sunday Mass."
      ]
    }
  },
  {
    id: 2,
    number: 2,
    title: "The Rite: Water, Faith and the Signs",
    subtitle: "What happens in the celebration and what your 'I do' means",
    theme: "Sacramental Signs & the Baptismal Promises",
    rememberPoints: [
      "At the heart of Baptism, the child is washed with water in the name of the Father, and of the Son, and of the Holy Spirit. Parents and godparents renounce sin and profess the faith of the Church, and the signs of the rite show the new Christian life.",
      "The rite begins by welcoming the child by name and marking them with the Sign of the Cross. The Church listens to the Word of God, prays for the child and family, and asks Christ to free and strengthen the child. The Oil of Catechumens may be used according to the approved rite.",
      "Before the Baptism, parents and godparents renounce sin and profess the faith of the Church. These are not decorative words. You are saying that the child is being baptised into the faith and life of the Church and that you intend to help them grow within it.",
      "The central sacramental action is the washing with water together with the Trinitarian words of Baptism. Afterwards, sacred chrism signifies consecration and sharing in Christ’s mission; the white garment signifies the new creation and dignity of being clothed in Christ; and the candle lit from the Easter candle signifies the light of the risen Christ entrusted to the family to be kept burning in faith."
    ],
    readSections: [
      {
        heading: "1. The Power of the Sacramental Signs",
        content: [
          "Every action in the Catholic liturgy speaks with spiritual power. Water cleanses and brings life; the Holy Spirit washes away original sin and births divine life in the soul.",
          "The words of the priest or deacon are the very words commanded by Jesus: 'I baptise you in the name of the Father, and of the Son, and of the Holy Spirit.' Without water and this exact Trinitarian formula, there is no sacrament."
        ]
      },
      {
        heading: "2. The Explanatory Signs",
        content: [
          "• Sacred Chrism: Perfumed olive oil consecrated by the bishop. Anointing the crown of the head signifies consecration as a priest, prophet, and king in Christ.",
          "• The White Garment: An outward sign of Christian dignity, purity, and being 'clothed in Christ' (Galatians 3:27).",
          "• The Baptismal Candle: Lit from the Paschal (Easter) candle representing the Risen Christ. It is given to the father or godparent with the words: 'Keep this light burning brightly.'"
        ]
      },
      {
        heading: "3. The Sincerity of 'I do'",
        content: [
          "Before the water is poured, the minister asks parents and godparents to reject Satan, his works, and his empty promises, and to profess belief in God the Father, Jesus Christ his Son, and the Holy Spirit.",
          "This is not a historical recitation; it is a pledge of allegiance. You are answering on behalf of your child, committing to bring them up in this living faith."
        ]
      }
    ],
    talkPrompt: {
      mainQuestion: "When you answer 'I do' to the faith of the Church, what will that 'I do' need to look like after the Baptism?",
      subPrompts: [
        "Parents: What will it change in your home and family rhythm?",
        "Godparents: How will you actively support the parents and be a recognisable Christian witness for your godchild?"
      ],
      guidanceNotes: "Focus on small, realistic, tangible commitments rather than vague grand plans."
    },
    essentials: [
      {
        id: 201,
        question: "1. What is essential for a valid Baptism?",
        conciseAnswer: "A washing with true water together with the proper Trinitarian form, with the intention to baptise as the Church does.",
        catechismRef: "CCC 1239-1240"
      },
      {
        id: 202,
        question: "2. Why do parents and godparents renounce sin and profess the faith?",
        conciseAnswer: "Because Baptism joins the child to Christ and to the faith and life of his Church.",
        catechismRef: "CCC 1253-1254"
      },
      {
        id: 203,
        question: "3. What does sacred chrism signify?",
        conciseAnswer: "Consecration and the baptised person's share in the life and mission of Christ, Priest, Prophet and King.",
        catechismRef: "CCC 1241"
      },
      {
        id: 204,
        question: "4. What does the white garment mean?",
        conciseAnswer: "The new dignity and life of a person clothed in Christ.",
        catechismRef: "CCC 1243"
      },
      {
        id: 205,
        question: "5. What does the baptismal candle mean?",
        conciseAnswer: "The light of Christ and the responsibility to help the child continue walking in faith.",
        catechismRef: "CCC 1243"
      }
    ],
    prayer: {
      title: "Prayer for Sincere Faith",
      text: "Lord Jesus Christ, prepare us to make the baptismal promises sincerely. Help our lips and our daily life to say the same “I do” to your Gospel. Amen."
    },
    thisWeek: {
      mainAction: "Read the Apostles' Creed together. Speak with the godparents about the promises and choose one practical way you will help one another live them.",
      suggestions: [
        "Recite the Apostles' Creed together slowly and talk about one line that stands out.",
        "Send a message or have a call between parents and godparents to share your hopes for the baptism day."
      ]
    }
  },
  {
    id: 3,
    number: 3,
    title: "Living Baptism: Raising a Child in Faith",
    subtitle: "How parents, godparents and parish help the life of grace grow afterwards",
    theme: "The Domestic Church & Lifelong Discipleship",
    rememberPoints: [
      "Baptism is a beginning. Parents accept responsibility for the child’s Catholic upbringing, while godparents and the parish help them nourish the life of grace through prayer, Sunday Mass, the sacraments and Christian example.",
      "The home is normally the first school of faith. Long before a child understands a catechism lesson, they notice whether prayer is natural, whether Sunday Mass matters, whether forgiveness is practised and whether God is spoken about as someone real and loved.",
      "Parents are not expected to be perfect. What matters is a sincere intention to raise the child in the Catholic faith and to take real steps towards that life. If family practice has become irregular, Baptism preparation can be an honest opportunity to begin again rather than to pretend.",
      "Godparents support; they do not replace the parents. They pray for the child, give a credible Catholic example and encourage the child in the Church’s sacramental life. As the child grows, the family and parish will help them prepare for Confession, Holy Communion and Confirmation, and for the ordinary Christian life of prayer, charity, repentance and service."
    ],
    readSections: [
      {
        heading: "1. The Domestic Church: The First School of Faith",
        content: [
          "The Christian home is called the 'ecclesia domestica' (the domestic church). Children learn faith not primarily from textbooks, but by breathing the atmosphere of their home.",
          "They see how parents treat one another, how disputes are resolved with forgiveness, whether grace is said at meals, and whether God is honored on the Lord's Day."
        ]
      },
      {
        heading: "2. The Realistic Path: Beginning Again with Sincerity",
        content: [
          "The Church does not ask for perfection or an immaculate theological resume. God works with ordinary mothers, fathers, and godparents.",
          "If your attendance at Mass or personal prayer has lapsed, do not pretend or feel ashamed. Baptism is an invitation for the whole family to encounter Christ afresh and step into regular sacramental life."
        ]
      },
      {
        heading: "3. The Sacramental Journey Ahead",
        content: [
          "Baptism is the initiation that prepares the soil. As your child grows, you will guide them toward First Reconciliation (healing through God's mercy), First Holy Communion (nourishment with Christ's Body and Blood), and Confirmation (strengthening with the Holy Spirit).",
          "Godparents remain companions on this journey, remembering baptismal anniversaries, offering prayers, and being a steady witness of Christian faith."
        ]
      }
    ],
    talkPrompt: {
      mainQuestion: "If this child learnt what Catholic life means only by watching the adults around them for the next five years, what would they learn?",
      subPrompts: [
        "Choose one or two realistic habits that would make faith visible: Sunday Mass, a short daily prayer, blessing the child, forgiveness, Scripture, a crucifix in the home, or regular contact with the parish.",
        "What is one small hurdle in our weekly routine we can adjust to make space for God?"
      ],
      guidanceNotes: "Start with one simple, concrete habit. Faithfulness in small things bears great fruit over time."
    },
    essentials: [
      {
        id: 301,
        question: "1. What responsibility do parents accept in asking for Baptism?",
        conciseAnswer: "To raise the child in the Catholic faith and help the child live the life begun in Baptism.",
        catechismRef: "CCC 1251"
      },
      {
        id: 302,
        question: "2. How is baptismal grace ordinarily nourished?",
        conciseAnswer: "Through prayer, Sunday Mass, the sacraments, Christian charity, sound teaching and life within the Church.",
        catechismRef: "CCC 1254"
      },
      {
        id: 303,
        question: "3. What is the role of a godparent?",
        conciseAnswer: "To help the parents and child live a Christian life faithful to Baptism through prayer, example and support.",
        catechismRef: "CCC 1255"
      },
      {
        id: 304,
        question: "4. What if our family has been away from the Church?",
        conciseAnswer: "Begin honestly. Speak with the priest and take the next real step; preparation can be part of a genuine return to prayer and parish life.",
        catechismRef: "Pastoral practice"
      },
      {
        id: 305,
        question: "5. Does preparation end on the day of Baptism?",
        conciseAnswer: "No. Baptism begins a lifelong life of grace, worship, conversion and discipleship.",
        catechismRef: "CCC 1253"
      }
    ],
    prayer: {
      title: "Prayer for the Family Home",
      text: "Lord Jesus Christ, remain close to our family. Make our home a place of prayer, truth, forgiveness and love, and help us lead this child faithfully towards you. Amen."
    },
    thisWeek: {
      mainAction: "Choose two habits to begin now: Sunday Mass, a brief bedtime prayer, blessing the child, a weekly Gospel story, grace before meals, or a visible crucifix in the home.",
      suggestions: [
        "Place a crucifix, holy image, or Bible in a prominent place in the home.",
        "Commit together to attend Sunday Mass as a family this upcoming weekend."
      ]
    }
  }
];

export const RITE_STEPS: RiteStep[] = [
  {
    stepNumber: 1,
    partName: "1. Reception & Welcome",
    whatItMeans: "The child is welcomed by name at the threshold of the church. The parents publicly ask the Church for Baptism and accept the responsibility of Christian upbringing.",
    liturgicalDetails: "The minister greets the family, asks the child's name, and asks: 'What do you ask of God's Church for your child?' The parents reply: 'Baptism.'",
    keyAction: "Welcoming & Public Request",
    familyRole: "Parents state child's name and confirm desire for baptism.",
    wordsSpoken: "Minister: 'What do you ask of God's Church for [Name]?' | Parents: 'Baptism.'",
    liturgicalSign: "Threshold of the Sanctuary"
  },
  {
    stepNumber: 2,
    partName: "2. Sign of the Cross",
    whatItMeans: "The minister marks the child with the Cross; parents and godparents are invited to do the same on the forehead.",
    liturgicalDetails: "The cross is the badge of Christian discipleship, marking the child as belonging irrevocably to Christ.",
    keyAction: "Tracing the Sign of the Cross",
    familyRole: "Parents and godparents trace the cross on the baby's forehead.",
    wordsSpoken: "Minister: 'The Christian community welcomes you with great joy. In its name I claim you for Christ our Saviour by the sign of his cross.'",
    liturgicalSign: "Signum Crucis (Sign of the Cross)"
  },
  {
    stepNumber: 3,
    partName: "3. Word and Prayer",
    whatItMeans: "Sacred Scripture is proclaimed; the Church prays for the child, parents, and godparents, and invokes the intercession of the saints.",
    liturgicalDetails: "Scripture illuminates the meaning of Baptism. The Litany of Saints calls upon Mary, Joseph, the child's patron saint, and the whole communion of saints.",
    keyAction: "Proclamation of Scripture & Litany of Saints",
    familyRole: "Listen attentively to the Word of God and respond 'Pray for us' to the Litany.",
    wordsSpoken: "Response to saints: 'Pray for us.'",
    liturgicalSign: "Book of the Gospels & Litany"
  },
  {
    stepNumber: 4,
    partName: "4. Prayer for Freedom from Sin (Exorcism & Oil)",
    whatItMeans: "The Church prays that the child be freed from the power of original sin and protected against evil. The Oil of Catechumens may be used according to the rite.",
    liturgicalDetails: "Anointing with the Oil of Catechumens on the breast strengthens the child for the spiritual struggle of Christian life.",
    keyAction: "Prayer of Exorcism & Anointing with Oil of Catechumens",
    familyRole: "Loosen the baby's collar slightly for the anointing on the breast.",
    wordsSpoken: "Minister: 'May the strength of Christ the Saviour protect you; as a sign of this we anoint you with the oil of salvation...'",
    liturgicalSign: "Oil of Catechumens"
  },
  {
    stepNumber: 5,
    partName: "5. Blessing of Baptismal Water",
    whatItMeans: "The Church gives thanks for God's saving work throughout salvation history through water (Creation, Noah's Ark, the Red Sea, Jordan River) and blesses the baptismal font.",
    liturgicalDetails: "The priest or deacon invokes the power of the Holy Spirit upon the water so that those baptised in it may be buried with Christ in his death and rise with him to new life.",
    keyAction: "Blessing and invocation over the baptismal font",
    familyRole: "Gather closely around the baptismal font in prayerful reverence.",
    wordsSpoken: "Minister: 'May the power of the Holy Spirit, O Lord, we pray, come down through your Son into the fullness of this font.'",
    liturgicalSign: "Blessed Baptismal Font"
  },
  {
    stepNumber: 6,
    partName: "6. Renunciation of Sin and Profession of Faith",
    whatItMeans: "Parents and godparents renounce sin and profess the Catholic faith, answering sincerely on behalf of the child and renewing their own baptismal vows.",
    liturgicalDetails: "Six crucial questions are asked: three renunciations of evil and three professions of faith in the Father, Son, and Holy Spirit.",
    keyAction: "Answering the solemn 'I do'",
    familyRole: "Parents and godparents respond clearly and aloud: 'I do.'",
    wordsSpoken: "Minister: 'Do you reject Satan?... Do you believe in God, the Father Almighty?...' | Response: 'I do.'",
    liturgicalSign: "Baptismal Profession"
  },
  {
    stepNumber: 7,
    partName: "7. Baptism with Water (The Central Action)",
    whatItMeans: "Water is poured three times over the head (or the child is immersed) while the proper Trinitarian form is spoken. This is the central sacramental action.",
    liturgicalDetails: "At this exact moment, original sin is erased, sanctifying grace enters the soul, and the child becomes an adopted child of God.",
    keyAction: "Triple pouring of water with Trinitarian formula",
    familyRole: "Mother or father holds the baby gently over the font with head supported.",
    wordsSpoken: "Minister: '[Child's Name], I BAPTISE YOU IN THE NAME OF THE FATHER, AND OF THE SON, AND OF THE HOLY SPIRIT.'",
    liturgicalSign: "Water & Trinitarian Formula"
  },
  {
    stepNumber: 8,
    partName: "8. Anointing with Sacred Chrism",
    whatItMeans: "The newly baptised child is anointed on the crown of the head with sweet-smelling Sacred Chrism, signifying consecration and sharing in Christ's royal priesthood.",
    liturgicalDetails: "Every Christian is consecrated as priest (offering spiritual sacrifice), prophet (witnessing to truth), and king (living in royal freedom).",
    keyAction: "Anointing head with Holy Chrism",
    familyRole: "Observe the anointing with grateful prayer.",
    wordsSpoken: "Minister: 'God has freed you from sin, given you a new birth by water and the Holy Spirit, and welcomed you into his holy people...'",
    liturgicalSign: "Sacred Chrism (Perfumed Holy Oil)"
  },
  {
    stepNumber: 9,
    partName: "9. Clothing with the White Garment",
    whatItMeans: "The white garment signifies the new creation, innocence, and the dignity of being clothed in Christ.",
    liturgicalDetails: "The family is exhorted to help the child bring this garment unstained to the judgment seat of our Lord Jesus Christ for eternal life.",
    keyAction: "Bestowal of white christening robe or garment",
    familyRole: "Godmother or parents assist in placing or smoothing the white garment.",
    wordsSpoken: "Minister: 'See in this white garment the outward sign of your Christian dignity... Bring it unstained into the heavenly kingdom.'",
    liturgicalSign: "White Robe / Garment"
  },
  {
    stepNumber: 10,
    partName: "10. The Lighted Candle",
    whatItMeans: "The baptismal candle is lit from the Easter (Paschal) candle. The family is entrusted with keeping this flame of faith burning brightly.",
    liturgicalDetails: "The Paschal candle represents the Light of the Risen Christ overcoming darkness and death.",
    keyAction: "Lighting the candle from the Easter Candle",
    familyRole: "Father or godfather steps forward to receive and hold the lighted candle.",
    wordsSpoken: "Minister: 'Receive the light of Christ. Parents and godparents, this light is entrusted to you to be kept burning brightly.'",
    liturgicalSign: "Paschal Candle & Baptismal Candle"
  },
  {
    stepNumber: 11,
    partName: "11. The Lord's Prayer & Final Blessing",
    whatItMeans: "The community prays the Our Father together, and the priest imparts solemn blessings upon the mother, the father, and all assembled.",
    liturgicalDetails: "If celebrated during Holy Mass, the liturgy continues with the Liturgy of the Eucharist; if outside Mass, the priest gives the threefold blessing.",
    keyAction: "The Lord's Prayer, Ephphatha rite (if used), and solemn blessings",
    familyRole: "Pray the Our Father together and bow heads for the special blessing for mothers and fathers.",
    wordsSpoken: "Assembly: 'Our Father, who art in heaven... Amen.'",
    liturgicalSign: "Solemn Priestly Blessing"
  }
];

export const GODPARENT_REQUIREMENTS: GodparentRequirement[] = [
  {
    id: "chosen",
    requirement: "Chosen for the role",
    whatItMeans: "Genuinely intends to carry out the responsibility of supporting the child and parents in Catholic life.",
    canonicalReference: "Canon 874 §1, 1°",
    practicalTip: "Choose someone you trust will pray for your child and be a steady spiritual presence throughout their life."
  },
  {
    id: "catholic-life",
    requirement: "Catholic life & Sacraments",
    whatItMeans: "A Catholic who is confirmed, has received the Holy Eucharist, and leads a life of faith in keeping with the role.",
    canonicalReference: "Canon 874 §1, 3°",
    practicalTip: "A godparent is a living model of the Catholic faith who regularly attends Mass and practices the faith."
  },
  {
    id: "age",
    requirement: "Age requirement",
    whatItMeans: "Ordinarily at least sixteen years old, unless lawful provision or a just exception applies by the parish priest.",
    canonicalReference: "Canon 874 §1, 2°",
    practicalTip: "If you have a candidate slightly younger who has received Confirmation, consult your parish priest."
  },
  {
    id: "canonical-freedom",
    requirement: "Canonical freedom",
    whatItMeans: "Not bound by any canonical penalty legitimately imposed or declared.",
    canonicalReference: "Canon 874 §1, 4°",
    practicalTip: "In good standing with the Catholic Church."
  },
  {
    id: "relationship",
    requirement: "Not the parent",
    whatItMeans: "Not the father or mother of the child.",
    canonicalReference: "Canon 874 §1, 5°",
    practicalTip: "Godparents represent the broader family of the Church standing alongside parents."
  },
  {
    id: "number",
    requirement: "Number of sponsors",
    whatItMeans: "One Catholic sponsor is sufficient. If two are chosen, one must be male and one female.",
    canonicalReference: "Canon 873",
    practicalTip: "You may have one godfather, one godmother, or one of each. You cannot have two of the same sex."
  },
  {
    id: "christian-witness",
    requirement: "Christian witness provision",
    whatItMeans: "A baptised non-Catholic Christian may take part as a Christian witness together with a Catholic sponsor, according to Church law and parish guidance.",
    canonicalReference: "Canon 874 §2",
    practicalTip: "If a beloved family friend or relative is a practicing Christian of another communion, they may stand as Christian Witness."
  }
];

export const TWELVE_ESSENTIALS: EssentialItem[] = [
  {
    id: 1,
    question: "1. What is Baptism?",
    conciseAnswer: "The sacrament of new birth by water and the word, and the gateway to Christian life.",
    theologicalContext: "Baptism is the foundation of communion among all Christians and the necessary doorway to all other sacraments.",
    catechismRef: "CCC 1213"
  },
  {
    id: 2,
    question: "2. Who instituted Baptism?",
    conciseAnswer: "Jesus Christ.",
    theologicalContext: "Christ submitted himself to the baptism of St. John to fulfill all righteousness and commanded his Church to baptise all nations.",
    scriptureRef: "Matthew 28:19"
  },
  {
    id: 3,
    question: "3. What does Baptism forgive?",
    conciseAnswer: "All sin; in an infant, original sin is remitted.",
    theologicalContext: "In adults, both original sin and all personal sins (plus all punishment for sin) are forgiven; in infants, the inherited wound of original sin is washed away.",
    catechismRef: "CCC 1263"
  },
  {
    id: 4,
    question: "4. What grace is given?",
    conciseAnswer: "Sanctifying grace, by which we share in God’s life; the baptised becomes a temple of the Holy Spirit.",
    theologicalContext: "Sanctifying grace elevates human nature, infuses theological virtues (faith, hope, love), and makes the soul pleasing to God.",
    catechismRef: "CCC 1266"
  },
  {
    id: 5,
    question: "5. What new relationship does Baptism give?",
    conciseAnswer: "The baptised becomes an adopted child of God, is united with Christ and is incorporated into the Church.",
    theologicalContext: "Through Divine Filiation, God is truly our Father, Christ is our brother, and we belong to the mystical Body of Christ.",
    scriptureRef: "Romans 8:15"
  },
  {
    id: 6,
    question: "6. Does Baptism leave a permanent mark?",
    conciseAnswer: "Yes. It gives an indelible sacramental character and cannot be repeated.",
    theologicalContext: "This spiritual seal marks the soul as belonging to Christ forever, remaining even if faith is later neglected.",
    catechismRef: "CCC 1272"
  },
  {
    id: 7,
    question: "7. Why baptise infants?",
    conciseAnswer: "Because Baptism is God’s free gift of grace and the Church baptises infants in the faith of the Church, which is then nurtured as they grow.",
    theologicalContext: "From the earliest apostolic times, whole households were baptised. Infant baptism testifies that salvation begins with God's initiative, not human merit.",
    catechismRef: "CCC 1252"
  },
  {
    id: 8,
    question: "8. What is essential in the rite?",
    conciseAnswer: "A washing with true water together with the proper Trinitarian form and the intention to baptise as the Church does.",
    theologicalContext: "Matter: Natural water poured or immersed. Form: 'I baptise you in the name of the Father, and of the Son, and of the Holy Spirit.'",
    catechismRef: "CCC 1239-1240"
  },
  {
    id: 9,
    question: "9. Who ordinarily baptises?",
    conciseAnswer: "A bishop, priest or, in the Latin Church, a deacon.",
    theologicalContext: "These are the ordinary ordained ministers of the Church entrusted with the pastoral care of souls.",
    catechismRef: "Canon 861 §1"
  },
  {
    id: 10,
    question: "10. What do parents accept?",
    conciseAnswer: "The responsibility to raise the child in the Catholic faith.",
    theologicalContext: "Parents are the primary educators of their children in faith, morals, and Christian prayer.",
    catechismRef: "Canon 868 §1"
  },
  {
    id: 11,
    question: "11. What does a godparent do?",
    conciseAnswer: "Helps the parents and child live a Christian life faithful to Baptism.",
    theologicalContext: "Sponsors stand as representatives of the Church family to support, mentor, pray for, and guide the child.",
    catechismRef: "CCC 1255"
  },
  {
    id: 12,
    question: "12. How does the life begun in Baptism grow?",
    conciseAnswer: "Through prayer, Sunday Mass, the sacraments, Christian teaching, charity, repentance and life in the Church.",
    theologicalContext: "Baptism is the root; Christian life, Holy Communion, Confession, and active charity are the branches and fruits that blossom throughout life.",
    catechismRef: "CCC 1254"
  }
];

export const READINESS_ITEMS: ReadinessCheckItem[] = [
  {
    id: "r1",
    statement: "We understand that Baptism truly gives new life in Christ and is not merely a family ceremony.",
    clarification: "Recognizing the real spiritual transformation: remission of sin, sanctifying grace, and divine adoption.",
    relatedConversation: 1
  },
  {
    id: "r2",
    statement: "At least one parent or lawful guardian consents to the Baptism, and we sincerely ask the Church for it.",
    clarification: "Canonical requirement ensuring the child is presented with genuine parental desire.",
    relatedConversation: 1
  },
  {
    id: "r3",
    statement: "There is a real intention to raise the child in the Catholic faith, with concrete next steps such as Sunday Mass, prayer and sacramental life.",
    clarification: "A founded hope that the life of faith begun in the font will be nurtured at home.",
    relatedConversation: 3
  },
  {
    id: "r4",
    statement: "We understand that the renunciations and profession of faith are serious and are willing to make them sincerely.",
    clarification: "Rejecting evil and affirming the Creed from the heart during the rite.",
    relatedConversation: 2
  },
  {
    id: "r5",
    statement: "A suitable Catholic godparent has been chosen where possible, and we understand the difference between a Catholic sponsor and a Christian witness.",
    clarification: "Sponsors meet the canonical conditions and are ready to be faithful witnesses.",
    relatedConversation: 2
  },
  {
    id: "r6",
    statement: "We know the basic shape of the rite and the parish arrangements for the day.",
    clarification: "Familiarity with the 11 liturgical steps and practical times for the church celebration.",
    relatedConversation: 2
  },
  {
    id: "r7",
    statement: "We have spoken honestly about any distance from practice, family complexity, disability, language, transport or other needs that may affect the preparation or the day itself.",
    clarification: "Pastoral honesty allows the priest to support and welcome you without judgment.",
    relatedConversation: 3
  },
  {
    id: "r8",
    statement: "We know whom to ask if we have a question or need help after the Baptism.",
    clarification: "Maintaining connection with our parish priest and parish community.",
    relatedConversation: 3
  }
];

export const INITIAL_FAMILY_HABITS: FamilyRuleHabit[] = [
  {
    id: "h1",
    rhythm: "Daily",
    title: "Bedtime Blessing & Prayer",
    description: "Make the Sign of the Cross with the child; bless them at bedtime; pray one short family prayer.",
    selected: true
  },
  {
    id: "h2",
    rhythm: "At meals",
    title: "Table Grace",
    description: "Say grace simply and naturally before meals ('Bless us, O Lord, and these thy gifts...').",
    selected: true
  },
  {
    id: "h3",
    rhythm: "Weekly",
    title: "Sunday Mass as Family Anchor",
    description: "Keep Sunday Mass at the centre of family life; afterwards mention one thing you heard, saw or prayed about.",
    selected: true
  },
  {
    id: "h4",
    rhythm: "At home",
    title: "Sacred Art & Sacred Scripture",
    description: "Keep a crucifix, Bible or holy image visible; use holy water if this is part of your family practice.",
    selected: true
  },
  {
    id: "h5",
    rhythm: "Regularly",
    title: "Sacraments for Parents",
    description: "Parents receive the sacraments faithfully, including Confession; let children see that adults also need mercy and grace.",
    selected: false
  },
  {
    id: "h6",
    rhythm: "As the child grows",
    title: "Faith Formation & Stories",
    description: "Teach basic prayers, tell Gospel stories, name right and wrong calmly, practise forgiveness and prepare for the other sacraments.",
    selected: true
  },
  {
    id: "h7",
    rhythm: "With godparents",
    title: "Anniversary & Spiritual Connection",
    description: "Pray for the child, mark baptismal anniversaries, encourage the sacraments and remain a recognisable Catholic support.",
    selected: true
  },
  {
    id: "h8",
    rhythm: "When things go wrong",
    title: "Begin Again with Mercy",
    description: "Begin again. Return to prayer, Mass and Confession rather than allowing a difficult season to become permanent distance.",
    selected: true
  }
];

export const SCRIPTURE_AND_DOCTRINAL_REFERENCES = [
  {
    source: "Sacred Scripture",
    citations: [
      { ref: "Matthew 28:19–20", text: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
      { ref: "John 3:5", text: "No one can enter the kingdom of God unless they are born of water and the Spirit." },
      { ref: "Romans 6:3–4", text: "All of us who have been baptized into Christ Jesus were baptized into his death... so that we too might walk in newness of life." },
      { ref: "Titus 3:5", text: "He saved us through the water of rebirth and renewal by the Holy Spirit." },
      { ref: "Galatians 3:27", text: "As many of you as were baptized into Christ have clothed yourselves with Christ." }
    ]
  },
  {
    source: "Catechism of the Catholic Church (CCC)",
    citations: [
      { ref: "CCC 1213–1284", text: "The Sacrament of Baptism (Full treatise on origin, celebration, necessity, grace, and ministers)." },
      { ref: "CCC 1250–1255", text: "Infant Baptism: Born with a fallen nature, children have need of the new birth in Baptism; the faith of the Church and parents' role." },
      { ref: "CCC 1262–1274", text: "The Grace of Baptism: Purification from sins, new creature, incorporation into the Church, sacramental bond of unity, and indelible character." }
    ]
  },
  {
    source: "Code of Canon Law (CIC)",
    citations: [
      { ref: "Canons 849–878", text: "General canonical norms governing the celebration, ministers, persons to be baptised, and sponsors for Baptism." },
      { ref: "Canons 867–868", text: "Obligations of parents to baptise infants within the first weeks, parental consent, and founded hope of Catholic upbringing." },
      { ref: "Canons 872–874", text: "Canonical qualifications for sponsors (godparents) and Christian witnesses." }
    ]
  },
  {
    source: "Historic Catechetical Works",
    citations: [
      { ref: "Joseph Deharbe, S.J.", text: "A Full Catechism of the Catholic Religion, 'On Baptism' - clear systematic answers on form, matter, effects, and duties." },
      { ref: "Order of Baptism of Children", text: "The official liturgical book and pastoral introduction of the Catholic Church." }
    ]
  }
];

export const EMERGENCY_BAPTISM_GUIDE = {
  title: "If There is an Emergency (Danger of Death)",
  summary: "Contact a priest or deacon immediately if one is available. The Church does not delay Baptism when an unbaptised child is in danger of death.",
  steps: [
    {
      title: "1. Who may baptise?",
      text: "If no ordinary minister (bishop, priest, deacon) is available in an emergency, any person (even a non-Catholic) can baptise validly provided that person has the intention to do what the Church does."
    },
    {
      title: "2. The Required Matter & Action",
      text: "Use true, natural water. Pour the water over the child's head (or immerse)."
    },
    {
      title: "3. The Essential Words (Trinitarian Formula)",
      text: "While pouring the water, say clearly:\n' [Name], I BAPTISE YOU IN THE NAME OF THE FATHER, AND OF THE SON, AND OF THE HOLY SPIRIT.' "
    },
    {
      title: "4. Follow-up with Parish Priest",
      text: "If an emergency Baptism takes place, notify the parish priest as soon as possible so that the Baptism can be recorded in the sacramental register and the remaining liturgical rites supplied if the child recovers. Do not attempt to repeat the Baptism."
    }
  ]
};

export const COMMON_QUESTIONS = [
  {
    q: "Why does the Church baptise babies before they can choose for themselves?",
    a: "Because grace is a pure gift. Just as parents give life, nourishment, language, and love to their baby long before the child can ask for them, so in faith they ask God to give their child the gift of divine life, sanctifying grace, and membership in Christ's Church. The child's personal response of faith will be fostered as they grow.",
    tags: ["Infant Baptism", "Grace", "Filiation"]
  },
  {
    q: "Can a non-Catholic Christian be a godparent?",
    a: "Church law requires at least one practicing, confirmed Catholic sponsor. A baptised Christian of another communion (e.g. Anglican, Orthodox, Methodist) may serve as a 'Christian Witness' alongside the Catholic sponsor.",
    tags: ["Godparents", "Canon Law", "Sponsors"]
  },
  {
    q: "What if our family has been away from church or feels imperfect?",
    a: "You do not have to pretend to be a 'perfect' family. As Father John Owen notes, Baptism preparation is an honest opportunity to begin again. Talk openly with your parish priest; Christ meets us wherever we are.",
    tags: ["Family Life", "Returning", "Sunday Mass"]
  },
  {
    q: "What are the essential symbols used during the rite?",
    a: "The core signs are: True Water (cleansing & new life), Sacred Chrism (anointing as priest, prophet, and king), the White Garment (purity and being clothed in Christ), and the Baptismal Candle (the light of the Risen Christ).",
    tags: ["Symbols", "Liturgy", "Chrism", "Candle"]
  },
  {
    q: "Can a person be baptised more than once?",
    a: "No. Baptism imprints an indelible spiritual mark (character) on the soul that lasts forever. It can only be received once in a lifetime.",
    tags: ["Indelible Seal", "Sacramental Grace"]
  }
];
