# wordnets

![](assets/logo.png)

Wordnets is a package which makes [Princeton University's Wordnet](https://wordnet.princeton.edu/) and [Wordnet Bahasa](http://wn-msa.sourceforge.net/index.eng.html) available as one gzip package. It merged the [en-wordnet](https://github.com/open-language/en-wordnet) and [id-wordnet](https://github.com/open-language/id-wordnet) repos, which are now archived.

## About

Princeton University defines the WordNet as

> WordNet® is a large lexical database of English. Nouns, verbs, adjectives and adverbs are grouped into sets of cognitive synonyms (synsets), each expressing a distinct concept. Synsets are interlinked by means of conceptual-semantic and lexical relations. The resulting network of meaningfully related words and concepts can be navigated with the browser. WordNet is also freely and publicly available for download. WordNet's structure makes it a useful tool for computational linguistics and natural language processing.

Inspired by [Princeton WordNet](https://wordnet.princeton.edu/) and the [Global WordNet Grid](http://globalwordnet.org/), the team at Wordnet Bahasa decided to create a large, freely available, semantic dictionary of the Malay languages (Malaysian and Indonesian)

![](https://img.shields.io/travis/open-language/wordnets.svg)
![](https://img.shields.io/codecov/c/github/open-language/wordnets/master.svg)

## Getting started

We use [bun](https://bun.sh/) for this project.

```bash
curl -fsSL https://bun.sh/install | bash
bun install
bun test
```

## Where did you find this?

The latest version of the Princeton Wordnet can be found at the [website](https://wordnet.princeton.edu/download/current-version). There are links to both the 3.0 version and the 3.1 version.

The latest version of the Bahasa Wordnet can be found at their [website](https://sourceforge.net/projects/wn-msa/) which is hosted on SourceForge. You can find more information about the project [here](http://wn-msa.sourceforge.net/index.eng.html).

## Is this credible?

WordNet is probably one of _the_ most credible sources of lexical data in english on the internet right now. If you would like to try it out for yourself, please [go here](http://wordnetweb.princeton.edu/perl/webwn).

In their own works, the creators of Bahasa Wordnet say this:

> Disclaimer: We estimate that this release contains errors in as many as 5–10% of entries. We decided to initially spend more effort in increasing the cover than in checking each entry. As we translate the glosses and sense tag text, we expect to fix many of the errors. We also welcome [feedback](wn-msa-devel@lists.sourceforge.net).

This means that not everything can be used, but the ones which can be are very clearly identified. The documentation shares this

> Y = hand checked and good
> O = automatic high quality (good)
> All others can be ignored, if you're looking for quality output only

If you would like to try it out for yourself, please [go here](http://compling.hss.ntu.edu.sg/omw/cgi-bin/wn-gridx.cgi?usrname=&gridmode=wnbahasa).

## Are there things that are missing

Yes, there are other files which I have completely ignored so far. [Standoff Files](https://wordnet.princeton.edu/download/standoff-files) and [Old Versions](https://wordnet.princeton.edu/download/old-versions) have been completely skipped. I will not be adding them till I can find a use case for it, if you have one, please share.

Please raise an issue if you find something is incorrect.

## How do I actually use this data?

The Parser for wordnet DB files will be in a separate repository. I did this because there are other significant pieces of work which follow the specifications set up by Wordnet (like the [Open MultiLingual Wordnet](http://compling.hss.ntu.edu.sg/omw/index.html)) and the parser would be able to utilize all of those to provide multi-lingual support. You can try the [lana school dictionary](https://github.com/lana-school/dictionary) for examples on how to parse this data in node.js.

## How to I understand the data structures

The file format used for the bahasa wordnet is `synset\tlang\tgoodness\tlemma`. synset is the offset-pos from Princeton wordnet 3.0.

- Language:
  - B (Bahasa = msa);
  - I (Indonesian = ind);
  - M (Malay = zsm)
- Goodness (or Quality)
  - Y = hand checked and good
  - O = automatic high quality (good)
  - M = automatic medium quality (ok) - should be ignored
  - L = automatic, probably bad (low) - should be ignored
  - X = hand checked and bad - should be ignored

The data structure for the Princeton project for english defined in these two documents

- [wndb](https://wordnet.princeton.edu/documentation/wndb5wn), which talks about index._ and data._ files
- [wninput](https://wordnet.princeton.edu/documentation/wninput5wn), which talks about the lexicographer file format and the word syntax

## This is released under which license?

The complete license for Wordnet can be found on [their website](https://wordnet.princeton.edu/license-and-commercial-use) and on [this repo](https://github.com/open-language/wordnets/blob/master/LICENSE)

## Credits

- [Princeton Univerysity's Wordnet](https://wordnet.princeton.edu/) for bringing so much sanity in the world
- [Wordnet Bahasa](http://wn-msa.sourceforge.net/index.eng.html) team for taking the efforts in creating this
- [TJ Holowaychuk](https://github.com/tj) for showing us how to use black and white beautifully to create the image on the top of the readme. Inspiration from [apex/up](https://github.com/apex/up). The image that we used on this repo was created [here](https://docs.google.com/presentation/d/1Ihlxqwq6_0y8jbSygGNkpudg5L2AfAKJNKd7WdS-QE8/edit#slide=id.p)
