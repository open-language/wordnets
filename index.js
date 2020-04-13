const path = require("path");

const basePath = path.resolve(__dirname, "data");

const wordnets = {
  en_wordnet_3_0: {
    home: "https://wordnet.princeton.edu/",
    download: "http://wordnetcode.princeton.edu/3.0/WordNet-3.0.tar.gz",
    path: path.resolve(basePath, "en-wordnet-3_0"),
  },
  en_wordnet_3_1: {
    home: "https://wordnet.princeton.edu/",
    download: "http://wordnetcode.princeton.edu/wn3.1.dict.tar.gz",
    path: path.resolve(basePath, "en-wordnet-3_1"),
  },
  msa_wordnet_r24: {
    home: "http://wn-msa.sourceforge.net/",
    download: "https://sourceforge.net/p/wn-msa/tab/HEAD/tree/trunk/",
    path: path.resolve(basePath, "msa-wordnet-r24"),
  },
};

module.exports = wordnets;
