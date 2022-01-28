/**
 * Pokemon Showdown Dex Data
 *
 * A collection of data and definitions for src/battle-dex.ts.
 *
 * Larger data has their own files in data/, so this is just for small
 * miscellaneous data that doesn't need its own file.
 *
 * Licensing note: PS's client has complicated licensing:
 * - The client as a whole is AGPLv3
 * - The battle replay/animation engine (battle-*.ts) by itself is MIT
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

/**
 * String that contains only lowercase alphanumeric characters.
 */
type ID = string & {__isID: true};

const BattleNatures: {[k in NatureName]: {plus?: StatName, minus?: StatName}} = {
	Adamant: {
		plus: 'atk',
		minus: 'spa',
	},
	Bashful: {},
	Bold: {
		plus: 'def',
		minus: 'atk',
	},
	Brave: {
		plus: 'atk',
		minus: 'spe',
	},
	Calm: {
		plus: 'spd',
		minus: 'atk',
	},
	Careful: {
		plus: 'spd',
		minus: 'spa',
	},
	Docile: {},
	Gentle: {
		plus: 'spd',
		minus: 'def',
	},
	Hardy: {},
	Hasty: {
		plus: 'spe',
		minus: 'def',
	},
	Impish: {
		plus: 'def',
		minus: 'spa',
	},
	Jolly: {
		plus: 'spe',
		minus: 'spa',
	},
	Lax: {
		plus: 'def',
		minus: 'spd',
	},
	Lonely: {
		plus: 'atk',
		minus: 'def',
	},
	Mild: {
		plus: 'spa',
		minus: 'def',
	},
	Modest: {
		plus: 'spa',
		minus: 'atk',
	},
	Naive: {
		plus: 'spe',
		minus: 'spd',
	},
	Naughty: {
		plus: 'atk',
		minus: 'spd',
	},
	Quiet: {
		plus: 'spa',
		minus: 'spe',
	},
	Quirky: {},
	Rash: {
		plus: 'spa',
		minus: 'spd',
	},
	Relaxed: {
		plus: 'def',
		minus: 'spe',
	},
	Sassy: {
		plus: 'spd',
		minus: 'spe',
	},
	Serious: {},
	Timid: {
		plus: 'spe',
		minus: 'atk',
	},
};
const BattleStatIDs: {[k: string]: StatName | undefined} = {
	HP: 'hp',
	hp: 'hp',
	Atk: 'atk',
	atk: 'atk',
	Def: 'def',
	def: 'def',
	SpA: 'spa',
	SAtk: 'spa',
	SpAtk: 'spa',
	spa: 'spa',
	spc: 'spa',
	Spc: 'spa',
	SpD: 'spd',
	SDef: 'spd',
	SpDef: 'spd',
	spd: 'spd',
	Spe: 'spe',
	Spd: 'spe',
	spe: 'spe',
};
/** Stat short names */
const BattleStatNames = {
	hp: 'HP',
	atk: 'Atk',
	def: 'Def',
	spa: 'SpA',
	spd: 'SpD',
	spe: 'Spe',
} as const;

const BattleBaseSpeciesChart = [
	"unown", "burmy", "shellos", "gastrodon", "deerling", "sawsbuck", "vivillon", "flabebe", "floette", "florges", "furfrou", "minior", "alcremie", "pokestarufo", "pokestarbrycenman", "pokestarmt", "pokestarmt2", "pokestartransport", "pokestargiant", "pokestarhumanoid", "pokestarmonster", "pokestarf00", "pokestarf002", "pokestarspirit", "pokestarblackdoor", "pokestarwhitedoor", "pokestarblackbelt",
] as ID[];

const BattlePokemonIconIndexes: {[id: string]: number} = {
	egg: 900 + 1,
	pikachubelle: 900 + 2,
	pikachulibre: 900 + 3,
	pikachuphd: 900 + 4,
	pikachupopstar: 900 + 5,
	pikachurockstar: 900 + 6,
	pikachucosplay: 900 + 7,
	unownexclamation: 900 + 8,
	unownquestion: 900 + 9,
	unownb: 900 + 10,
	unownc: 900 + 11,
	unownd: 900 + 12,
	unowne: 900 + 13,
	unownf: 900 + 14,
	unowng: 900 + 15,
	unownh: 900 + 16,
	unowni: 900 + 17,
	unownj: 900 + 18,
	unownk: 900 + 19,
	unownl: 900 + 20,
	unownm: 900 + 21,
	unownn: 900 + 22,
	unowno: 900 + 23,
	unownp: 900 + 24,
	unownq: 900 + 25,
	unownr: 900 + 26,
	unowns: 900 + 27,
	unownt: 900 + 28,
	unownu: 900 + 29,
	unownv: 900 + 30,
	unownw: 900 + 31,
	unownx: 900 + 32,
	unowny: 900 + 33,
	unownz: 900 + 34,
	castformrainy: 900 + 35,
	castformsnowy: 900 + 36,
	castformsunny: 900 + 37,
	deoxysattack: 900 + 38,
	deoxysdefense: 900 + 39,
	deoxysspeed: 900 + 40,
	burmysandy: 900 + 41,
	burmytrash: 900 + 42,
	wormadamsandy: 900 + 43,
	wormadamtrash: 900 + 44,
	cherrimsunshine: 900 + 45,
	shelloseast: 900 + 46,
	gastrodoneast: 900 + 47,
	rotomfan: 900 + 48,
	rotomfrost: 900 + 49,
	rotomheat: 900 + 50,
	rotommow: 900 + 51,
	rotomwash: 900 + 52,
	giratinaorigin: 900 + 53,
	shayminsky: 900 + 54,
	unfezantf: 900 + 55,
	basculinbluestriped: 900 + 56,
	darmanitanzen: 900 + 57,
	deerlingautumn: 900 + 58,
	deerlingsummer: 900 + 59,
	deerlingwinter: 900 + 60,
	sawsbuckautumn: 900 + 61,
	sawsbucksummer: 900 + 62,
	sawsbuckwinter: 900 + 63,
	frillishf: 900 + 64,
	jellicentf: 900 + 65,
	tornadustherian: 900 + 66,
	thundurustherian: 900 + 67,
	landorustherian: 900 + 68,
	kyuremblack: 900 + 69,
	kyuremwhite: 900 + 70,
	keldeoresolute: 900 + 71,
	meloettapirouette: 900 + 72,
	vivillonarchipelago: 900 + 73,
	vivilloncontinental: 900 + 74,
	vivillonelegant: 900 + 75,
	vivillonfancy: 900 + 76,
	vivillongarden: 900 + 77,
	vivillonhighplains: 900 + 78,
	vivillonicysnow: 900 + 79,
	vivillonjungle: 900 + 80,
	vivillonmarine: 900 + 81,
	vivillonmodern: 900 + 82,
	vivillonmonsoon: 900 + 83,
	vivillonocean: 900 + 84,
	vivillonpokeball: 900 + 85,
	vivillonpolar: 900 + 86,
	vivillonriver: 900 + 87,
	vivillonsandstorm: 900 + 88,
	vivillonsavanna: 900 + 89,
	vivillonsun: 900 + 90,
	vivillontundra: 900 + 91,
	pyroarf: 900 + 92,
	flabebeblue: 900 + 93,
	flabebeorange: 900 + 94,
	flabebewhite: 900 + 95,
	flabebeyellow: 900 + 96,
	floetteblue: 900 + 97,
	floetteeternal: 900 + 98,
	floetteorange: 900 + 99,
	floettewhite: 900 + 100,
	floetteyellow: 900 + 101,
	florgesblue: 900 + 102,
	florgesorange: 900 + 103,
	florgeswhite: 900 + 104,
	florgesyellow: 900 + 105,
	furfroudandy: 900 + 106,
	furfroudebutante: 900 + 107,
	furfroudiamond: 900 + 108,
	furfrouheart: 900 + 109,
	furfroukabuki: 900 + 110,
	furfroulareine: 900 + 111,
	furfroumatron: 900 + 112,
	furfroupharaoh: 900 + 113,
	furfroustar: 900 + 114,
	meowsticf: 900 + 115,
	aegislashblade: 900 + 116,
	xerneasneutral: 900 + 117,
	hoopaunbound: 900 + 118,
	rattataalola: 900 + 119,
	raticatealola: 900 + 120,
	raichualola: 900 + 121,
	sandshrewalola: 900 + 122,
	sandslashalola: 900 + 123,
	vulpixalola: 900 + 124,
	ninetalesalola: 900 + 125,
	diglettalola: 900 + 126,
	dugtrioalola: 900 + 127,
	meowthalola: 900 + 128,
	persianalola: 900 + 129,
	geodudealola: 900 + 130,
	graveleralola: 900 + 131,
	golemalola: 900 + 132,
	grimeralola: 900 + 133,
	mukalola: 900 + 134,
	exeggutoralola: 900 + 135,
	marowakalola: 900 + 136,
	greninjaash: 900 + 137,
	zygarde10: 900 + 138,
	zygardecomplete: 900 + 139,
	oricoriopompom: 900 + 140,
	oricoriopau: 900 + 141,
	oricoriosensu: 900 + 142,
	lycanrocmidnight: 900 + 143,
	wishiwashischool: 900 + 144,
	miniormeteor: 900 + 145,
	miniororange: 900 + 146,
	minioryellow: 900 + 147,
	miniorgreen: 900 + 148,
	miniorblue: 900 + 149,
	miniorindigo: 900 + 150,
	miniorviolet: 900 + 151,
	magearnaoriginal: 900 + 152,
	pikachuoriginal: 900 + 153,
	pikachuhoenn: 900 + 154,
	pikachusinnoh: 900 + 155,
	pikachuunova: 900 + 156,
	pikachukalos: 900 + 157,
	pikachualola: 900 + 158,
	pikachupartner: 900 + 159,
	lycanrocdusk: 900 + 160,
	necrozmaduskmane: 900 + 161,
	necrozmadawnwings: 900 + 162,
	necrozmaultra: 900 + 163,
	pikachustarter: 900 + 164,
	eeveestarter: 900 + 165,
	meowthgalar: 900 + 166,
	ponytagalar: 900 + 167,
	rapidashgalar: 900 + 168,
	farfetchdgalar: 900 + 169,
	weezinggalar: 900 + 170,
	mrmimegalar: 900 + 171,
	corsolagalar: 900 + 172,
	zigzagoongalar: 900 + 173,
	linoonegalar: 900 + 174,
	darumakagalar: 900 + 175,
	darmanitangalar: 900 + 176,
	darmanitangalarzen: 900 + 177,
	yamaskgalar: 900 + 178,
	stunfiskgalar: 900 + 179,
	cramorantgulping: 900 + 180,
	cramorantgorging: 900 + 181,
	toxtricitylowkey: 900 + 182,
	sinisteaantique: 854,
	polteageistantique: 855,
	alcremierubycream: 900 + 183,
	alcremiematchacream: 900 + 184,
	alcremiemintcream: 900 + 185,
	alcremielemoncream: 900 + 186,
	alcremiesaltedcream: 900 + 187,
	alcremierubyswirl: 900 + 188,
	alcremiecaramelswirl: 900 + 189,
	alcremierainbowswirl: 900 + 190,
	eiscuenoice: 900 + 191,
	indeedeef: 900 + 192,
	morpekohangry: 900 + 193,
	zaciancrowned: 900 + 194,
	zamazentacrowned: 900 + 195,
	slowpokegalar: 900 + 196,
	slowbrogalar: 900 + 197,
	zarudedada: 900 + 198,
	pikachuworld: 900 + 199,
	articunogalar: 900 + 200,
	zapdosgalar: 900 + 201,
	moltresgalar: 900 + 202,
	slowkinggalar: 900 + 203,
	calyrexice: 900 + 204,
	calyrexshadow: 900 + 205,

	gumshoostotem: 735,
	raticatealolatotem: 900 + 120,
	marowakalolatotem: 900 + 136,
	araquanidtotem: 752,
	lurantistotem: 754,
	salazzletotem: 758,
	vikavolttotem: 738,
	togedemarutotem: 777,
	mimikyutotem: 778,
	mimikyubustedtotem: 778,
	ribombeetotem: 743,
	kommoototem: 784,

	venusaurmega: 1116 + 0,
	charizardmegax: 1116 + 1,
	charizardmegay: 1116 + 2,
	blastoisemega: 1116 + 3,
	beedrillmega: 1116 + 4,
	pidgeotmega: 1116 + 5,
	alakazammega: 1116 + 6,
	slowbromega: 1116 + 7,
	gengarmega: 1116 + 8,
	kangaskhanmega: 1116 + 9,
	pinsirmega: 1116 + 10,
	gyaradosmega: 1116 + 11,
	aerodactylmega: 1116 + 12,
	mewtwomegax: 1116 + 13,
	mewtwomegay: 1116 + 14,
	ampharosmega: 1116 + 15,
	steelixmega: 1116 + 16,
	scizormega: 1116 + 17,
	heracrossmega: 1116 + 18,
	houndoommega: 1116 + 19,
	tyranitarmega: 1116 + 20,
	sceptilemega: 1116 + 21,
	blazikenmega: 1116 + 22,
	swampertmega: 1116 + 23,
	gardevoirmega: 1116 + 24,
	sableyemega: 1116 + 25,
	mawilemega: 1116 + 26,
	aggronmega: 1116 + 27,
	medichammega: 1116 + 28,
	manectricmega: 1116 + 29,
	sharpedomega: 1116 + 30,
	cameruptmega: 1116 + 31,
	altariamega: 1116 + 32,
	banettemega: 1116 + 33,
	absolmega: 1116 + 34,
	glaliemega: 1116 + 35,
	salamencemega: 1116 + 36,
	metagrossmega: 1116 + 37,
	latiasmega: 1116 + 38,
	latiosmega: 1116 + 39,
	kyogreprimal: 1116 + 40,
	groudonprimal: 1116 + 41,
	rayquazamega: 1116 + 42,
	lopunnymega: 1116 + 43,
	garchompmega: 1116 + 44,
	lucariomega: 1116 + 45,
	abomasnowmega: 1116 + 46,
	gallademega: 1116 + 47,
	audinomega: 1116 + 48,
	dianciemega: 1116 + 49,
	charizardgmax: 1116 + 50,
	butterfreegmax: 1116 + 51,
	pikachugmax: 1116 + 52,
	meowthgmax: 1116 + 53,
	machampgmax: 1116 + 54,
	gengargmax: 1116 + 55,
	kinglergmax: 1116 + 56,
	laprasgmax: 1116 + 57,
	eeveegmax: 1116 + 58,
	snorlaxgmax: 1116 + 59,
	garbodorgmax: 1116 + 60,
	melmetalgmax: 1116 + 61,
	corviknightgmax: 1116 + 62,
	orbeetlegmax: 1116 + 63,
	drednawgmax: 1116 + 64,
	coalossalgmax: 1116 + 65,
	flapplegmax: 1116 + 66,
	appletungmax: 1116 + 67,
	sandacondagmax: 1116 + 68,
	toxtricitygmax: 1116 + 69,
	toxtricitylowkeygmax: 1116 + 69,
	centiskorchgmax: 1116 + 70,
	hatterenegmax: 1116 + 71,
	grimmsnarlgmax: 1116 + 72,
	alcremiegmax: 1116 + 73,
	copperajahgmax: 1116 + 74,
	duraludongmax: 1116 + 75,
	eternatuseternamax: 1116 + 76,
	venusaurgmax: 1116 + 77,
	blastoisegmax: 1116 + 78,
	rillaboomgmax: 1116 + 79,
	cinderacegmax: 1116 + 80,
	inteleongmax: 1116 + 81,
	urshifugmax: 1116 + 82,
	urshifurapidstrikegmax: 1116 + 83,

	syclant: 1308 + 0,
	revenankh: 1308 + 1,
	pyroak: 1308 + 2,
	fidgit: 1308 + 3,
	stratagem: 1308 + 4,
	arghonaut: 1308 + 5,
	kitsunoh: 1308 + 6,
	cyclohm: 1308 + 7,
	colossoil: 1308 + 8,
	krilowatt: 1308 + 9,
	voodoom: 1308 + 10,
	tomohawk: 1308 + 11,
	necturna: 1308 + 12,
	mollux: 1308 + 13,
	aurumoth: 1308 + 14,
	malaconda: 1308 + 15,
	cawmodore: 1308 + 16,
	volkraken: 1308 + 17,
	plasmanta: 1308 + 18,
	naviathan: 1308 + 19,
	crucibelle: 1308 + 20,
	crucibellemega: 1308 + 21,
	kerfluffle: 1308 + 22,
	pajantom: 1308 + 23,
	jumbao: 1308 + 24,
	caribolt: 1308 + 25,
	smokomodo: 1308 + 26,
	snaelstrom: 1308 + 27,
	equilibra: 1308 + 28,
	astrolotl: 1308 + 29,
	miasmaw: 1308 + 30,
	chromera: 1308 + 31,
	venomicon: 1308 + 32,
	venomiconepilogue: 1308 + 33,

	syclar: 1344 + 0,
	embirch: 1344 + 1,
	flarelm: 1344 + 2,
	breezi: 1344 + 3,
	scratchet: 1344 + 4,
	necturine: 1344 + 5,
	cupra: 1344 + 6,
	argalis: 1344 + 7,
	brattler: 1344 + 8,
	cawdet: 1344 + 9,
	volkritter: 1344 + 10,
	snugglow: 1344 + 11,
	floatoy: 1344 + 12,
	caimanoe: 1344 + 13,
	pluffle: 1344 + 14,
	rebble: 1344 + 15,
	tactite: 1344 + 16,
	privatyke: 1344 + 17,
	nohface: 1344 + 18,
	monohm: 1344 + 19,
	duohm: 1344 + 20,
	protowatt: 1344 + 21,
	voodoll: 1344 + 22,
	mumbao: 1344 + 23,
	fawnifer: 1344 + 24,
	electrelk: 1344 + 25,
	smogecko: 1344 + 26,
	smoguana: 1344 + 27,
	swirlpool: 1344 + 28,
	coribalis: 1344 + 29,
	justyke: 1344 + 30,
	solotl: 1344 + 31,
	miasmite: 1344 + 32,
	dorsoil: 1344 + 33,

	chibisanae: 1500 + 1,
	sanae: 1500 + 2,
	chibialice: 1500 + 3,
	alice: 1500 + 4,
	chibireisen: 1500 + 5,
	reisen: 1500 + 6,
	chibililywhite: 1500 + 7,
	lilywhite: 1500 + 8,
	chibililyblack: 1500 + 9,
	lilyblack: 1500 + 10,
	chibimomiji: 1500 + 11,
	momiji: 1500 + 12,
	chibishizuha: 1500 + 13,
	shizuha: 1500 + 14,
	chibimedicine: 1500 + 15,
	medicine: 1500 + 16,
	chibikoakuma: 1500 + 17,
	koakuma: 1500 + 18,
	chibinazrin: 1500 + 19,
	nazrin: 1500 + 20,
	chibitokiko: 1500 + 21,
	tokiko: 1500 + 22,
	chibiremilia: 1500 + 23,
	remilia: 1500 + 24,
	chibicirno: 1500 + 25,
	cirno: 1500 + 26,
	chibirumia: 1500 + 27,
	rumia: 1500 + 28,
	shanghai: 1500 + 29,
	chibiflandre: 1500 + 30,
	flandre: 1500 + 31,
	hourai: 1500 + 32,
	chibiyoumu: 1500 + 33,
	youmu: 1500 + 34,
	chibiyukari: 1500 + 35,
	yukari: 1500 + 36,
	chibisuika: 1500 + 37,
	suika: 1500 + 38,
	chibimystia: 1500 + 39,
	mystia: 1500 + 40,
	chibiminoriko: 1500 + 41,
	minoriko: 1500 + 42,
	chibikeine: 1500 + 43,
	keine: 1500 + 44,
	attackkeine: 1500 + 45,
	chibiiku: 1500 + 46,
	iku: 1500 + 47,
	chibikoishi: 1500 + 48,
	koishi: 1500 + 49,
	chibiyamame: 1500 + 50,
	yamame: 1500 + 51,
	chibichen: 1500 + 52,
	chen: 1500 + 53,
	chibiyorihime: 1500 + 54,
	yorihime: 1500 + 55,
	chibikaguya: 1500 + 56,
	kaguya: 1500 + 57,
	chibimokou: 1500 + 58,
	mokou: 1500 + 59,
	chibihatate: 1500 + 60,
	hatate: 1500 + 61,
	chibiletty: 1500 + 62,
	letty: 1500 + 63,
	chibipatchouli: 1500 + 64,
	patchouli: 1500 + 65,
	chibiyuugi: 1500 + 66,
	yuugi: 1500 + 67,
	chibitenshi: 1500 + 68,
	tenshi: 1500 + 69,
	chibiparsee: 1500 + 70,
	parsee: 1500 + 71,
	chibimurasa: 1500 + 72,
	murasa: 1500 + 73,
	chibikisume: 1500 + 74,
	kisume: 1500 + 75,
	chibikogasa: 1500 + 76,
	kogasa: 1500 + 77,
	chibisatori: 1500 + 78,
	satori: 1500 + 79,
	chibieirin: 1500 + 80,
	eirin: 1500 + 81,
	chibiran: 1500 + 82,
	ran: 1500 + 83,
	chibidaiyousei: 1500 + 84,
	daiyousei: 1500 + 85,
	chibinitori: 1500 + 86,
	nitori: 1500 + 87,
	chibihina: 1500 + 88,
	hina: 1500 + 89,
	chibikomachi: 1500 + 90,
	komachi: 1500 + 91,
	chibiyuyuko: 1500 + 92,
	yuyuko: 1500 + 93,
	chibimeiling: 1500 + 94,
	meiling: 1500 + 95,
	chibisakuya: 1500 + 96,
	sakuya: 1500 + 97,
	chibilunasa: 1500 + 98,
	lunasa: 1500 + 99,
	chibimerlin: 1500 + 100,
	merlin: 1500 + 101,
	chibilyrica: 1500 + 102,
	lyrica: 1500 + 103,
	chibilayla: 1500 + 104,
	layla: 1500 + 105,
	chibikanako: 1500 + 106,
	kanako: 1500 + 107,
	chibirin: 1500 + 108,
	rin: 1500 + 109,
	chibiutsuho: 1500 + 110,
	utsuho: 1500 + 111,
	chibiichirin: 1500 + 112,
	ichirin: 1500 + 113,
	chibisunnymilk: 1500 + 114,
	sunnymilk: 1500 + 115,
	chibilunachild: 1500 + 116,
	lunachild: 1500 + 117,
	chibistarsapphire: 1500 + 118,
	starsapphire: 1500 + 119,
	chibiyuuka: 1500 + 120,
	yuuka: 1500 + 121,
	chibiaya: 1500 + 122,
	aya: 1500 + 123,
	chibieiki: 1500 + 124,
	eiki: 1500 + 125,
	chibishou: 1500 + 126,
	shou: 1500 + 127,
	chibiwriggle: 1500 + 128,
	wriggle: 1500 + 129,
	chibitewi: 1500 + 130,
	tewi: 1500 + 131,
	kedama: 1500 + 132,
	chibinue: 1500 + 133,
	nue: 1500 + 134,
	chibisuwako: 1500 + 135,
	suwako: 1500 + 136,
	gyokuto: 1500 + 137,
	chibimarisa: 1500 + 138,
	marisa: 1500 + 139,
	chibireimu: 1500 + 140,
	reimu: 1500 + 141,
	chibibyakuren: 1500 + 142,
	byakuren: 1500 + 143,
	konngara: 1500 + 144,
	kikuri: 1500 + 145,
	yuugenmagan: 1500 + 146,
	chibitoyohime: 1500 + 147,
	toyohime: 1500 + 148,
	goliathdoll: 1500 + 149,
	sariel: 1500 + 150,
	akyuu: 1500 + 151,
	genji: 1500 + 152,
	tori: 1500 + 153,
	namazu: 1500 + 154,
	chibielly: 1500 + 155,
	elly: 1500 + 156,
	chibiorange: 1500 + 157,
	orange: 1500 + 158,
	youki: 1500 + 159,
	chibichiyuri: 1500 + 160,
	chiyuri: 1500 + 161,
	chibiyumemi: 1500 + 162,
	yumemi: 1500 + 163,
	chibiellen: 1500 + 164,
	ellen: 1500 + 165,
	chibikazami: 1500 + 166,
	kazami: 1500 + 167,
	chibimeira: 1500 + 168,
	meira: 1500 + 169,
	chibisara: 1500 + 170,
	sara: 1500 + 171,
	chibiluize: 1500 + 172,
	luize: 1500 + 173,
	chibimargatroid: 1500 + 174,
	margatroid: 1500 + 175,
	chibikana: 1500 + 176,
	kana: 1500 + 177,
	chibihakurei: 1500 + 178,
	hakurei: 1500 + 179,
	chibikirisame: 1500 + 180,
	kirisame: 1500 + 181,
	chibikotohime: 1500 + 182,
	kotohime: 1500 + 183,
	chibiyumeko: 1500 + 184,
	yumeko: 1500 + 185,
	chibishinki: 1500 + 186,
	shinki: 1500 + 187,
	mimichan: 1500 + 188,
	ruukoto: 1500 + 189,
	chibirika: 1500 + 190,
	rika: 1500 + 191,
	chibimugetsu: 1500 + 192,
	mugetsu: 1500 + 193,
	chibigengetsu: 1500 + 194,
	gengetsu: 1500 + 195,
	chibikurumi: 1500 + 196,
	kurumi: 1500 + 197,
	chibirikako: 1500 + 198,
	rikako: 1500 + 199,
	chibiyuki: 1500 + 200,
	yuki: 1500 + 201,
	chibimai: 1500 + 202,
	mai: 1500 + 203,
	defensesunnymilk: 1500 + 204,
	technicallunachild: 1500 + 205,
	helperstarsapphire: 1500 + 206,
	attacknitori: 1500 + 207,
	technicalnitori: 1500 + 208,
	attackmokou: 1500 + 209,
	defensemokou: 1500 + 210,
	defensereisen: 1500 + 211,
	technicalreisen: 1500 + 212,
	technicalsakuya: 1500 + 213,
	helpersakuya: 1500 + 214,
	attackrumia: 1500 + 215,
	speedrumia: 1500 + 216,
	helpermystia: 1500 + 217,
	attackmystia: 1500 + 218,
	attackchen: 1500 + 219,
	technicalchen: 1500 + 220,
	defenseyoumu: 1500 + 221,
	speedyoumu: 1500 + 222,
	attackyuuka: 1500 + 223,
	technicalyuuka: 1500 + 224,
	speedaya: 1500 + 225,
	technicalaya: 1500 + 226,
	attacktenshi: 1500 + 227,
	defensetenshi: 1500 + 228,
	defenseparsee: 1500 + 239,
	technicalparsee: 1500 + 230,
	attackkoishi: 1500 + 231,
	speedkoishi: 1500 + 232,
	defensebyakuren: 1500 + 233,
	technicalbyakuren: 1500 + 234,
	defenseichirin: 1500 + 235,
	technicalichirin: 1500 + 236,
	attackkanako: 1500 + 237,
	defensekanako: 1500 + 238,
	attackkaguya: 1500 + 239,
	defensekaguya: 1500 + 240,
	shingyokuorb: 1500 + 241,
	shingyokupriest: 1500 + 242,
	shingyokupriestess: 1500 + 243,
	attackutsuho: 1500 + 244,
	speedutsuho: 1500 + 245,
	defensemomiji: 1500 + 246,
	elis: 1500 + 247,
	mima: 1500 + 248,
	speedkomachi: 1500 + 249,
	attackkomachi: 1500 + 250,
	attackeirin: 1500 + 251,
	helpereirin: 1500 + 252,
	defenseyukari: 1500 + 253,
	technicalyukari: 1500 + 254,
	attackalice: 1500 + 255,
	technicalalice: 1500 + 256,
	attackreimu: 1500 + 257,
	defensereimu: 1500 + 258,
	speedcirno: 1500 + 259,
	technicalcirno: 1500 + 260,
	defenseyuyuko: 1500 + 261,
	attackyuyuko: 1500 + 262,
	helperlunasa: 1500 + 263,
	helpermerlin: 1500 + 264,
	helperlyrica: 1500 + 265,
	attackran: 1500 + 266,
	helperran: 1500 + 267,
	attackmedicine: 1500 + 268,
	technicalmedicine: 1500 + 269,
	attackhina: 1500 + 270,
	defensehina: 1500 + 271,
	speedshizuha: 1500 + 272,
	speedrin: 1500 + 273,
	attackrin: 1500 + 274,
	zombiefairy: 1500 + 275,
	helpershizuha: 1500 + 276,
	attacksuwako: 1500 + 277,
	attackshou: 1500 + 278,
	technicalshou: 1500 + 279,
	attacktokiko: 1500 + 280,
	defensesuwako: 1500 + 281,
	speedyamame: 1500 + 282,
	speedkogasa: 1500 + 283,
	technicalkogasa: 1500 + 284,
	defenseremilia: 1500 + 285,
	speedflandre: 1500 + 286,
	defensewriggle: 1500 + 287,
	defensemeiling: 1500 + 288,
	tensoku: 1500 + 289,
	attacksunnymilk: 1500 + 290,
	attacklunachild: 1500 + 291,
	speedwriggle: 1500 + 292,
	helperkoakuma: 1500 + 293,
	speedmeiling: 1500 + 294,
	chibielis: 1500 + 295,
	chibisariel: 1500 + 296,
	adventmystia: 1500 + 297,
	technicalhatate: 1500 + 298,
	defensehatate: 1500 + 299,
	akisisters: 1500 + 300,
	defenselayla: 1500 + 301,
	defensekeine: 1500 + 302,
	attackremilia: 1500 + 303,
	defensetewi: 1500 + 304,
	attacktewi: 1500 + 305,
	defenseeiki: 1500 + 306,
	defenseminoriko: 1500 + 307,
	technicalsuika: 1500 + 308,
	attacksanae: 1500 + 309,
	technicalsanae: 1500 + 310,
	attackflandre: 1500 + 311,
	attackdaiyousei: 1500 + 312,
	attackeiki: 1500 + 313,
	technicaltoyohime: 1500 + 314,
	chibikonngara: 1500 + 315,
	chibiyuugenmagan: 1500 + 316,
	attacksuika: 1500 + 317,
	helperlilywhite: 1500 + 318,
	speedlilyblack: 1500 + 319,
	attacknue: 1500 + 320,
	technicalnue: 1500 + 321,
	defensepatchouli: 1500 + 322,
	defenseletty: 1500 + 323,
	helperletty: 1500 + 324,
	speedyorihime: 1500 + 325,
	chibishingyoku: 1500 + 326,
	attacklilyblack: 1500 + 327,
	defenseyuugi: 1500 + 328,
	technicalnazrin: 1500 + 329,
	helpernazrin: 1500 + 330,
	technicalkisume: 1500 + 331,
	attackyuugi: 1500 + 332,
	helperkeine: 1500 + 333,
	defenseiku: 1500 + 334,
	technicaliku: 1500 + 335,
	attackminoriko: 1500 + 336,
	rinnosuke: 1500 + 337,
	adventcirno: 1500 + 338,
	adventreisen: 1500 + 339,
	speedsariel: 1500 + 340,
	attacklilywhite: 1500 + 341,
	chibimima: 1500 + 342,
	chibikikuri: 1500 + 343,
	adventmeiling: 1500 + 344,
	attackpatchouli: 1500 + 345,
	speedmarisa: 1500 + 346,
	attackmarisa: 1500 + 347,
	defensemurasa: 1500 + 348,
	attackmurasa: 1500 + 349,
	attackstarsapphire: 1500 + 350,
	attackkazami: 1500 + 351,
	speedmedicine: 1500 + 352,
	defensedaiyousei: 1500 + 353,
	technicalyamame: 1500 + 354,
	technicalsatori: 1500 + 355,
	defensesatori: 1500 + 356,
	adventletty: 1500 + 357,
	adventtewi: 1500 + 358,
	adventmarisa: 1500 + 359,
	adventalice: 1500 + 360,
	adventmokou: 1500 + 361,
	adventyukari: 1500 + 362,
	adventran: 1500 + 363,
	adventchen: 1500 + 364,
	darkalice: 1500 + 365,
	tenma: 1500 + 366,
	sendai: 1500 + 367,
	chibikyouko: 1500 + 368,
	kyouko: 1500 + 369,
	chibiyoshika: 1500 + 370,
	yoshika: 1500 + 371,
	chibiseiga: 1500 + 372,
	seiga: 1500 + 373,
	chibitojiko: 1500 + 374,
	tojiko: 1500 + 375,
	chibifuto: 1500 + 376,
	futo: 1500 + 377,
	chibimiko: 1500 + 378,
	miko: 1500 + 379,
	chibimamizou: 1500 + 380,
	mamizou: 1500 + 381,
};

const BattlePokemonIconIndexesLeft: {[id: string]: number} = {
	pikachubelle: 1200 + 0,
	pikachupopstar: 1200 + 1,
	clefairy: 1200 + 2,
	clefable: 1200 + 3,
	jigglypuff: 1200 + 4,
	wigglytuff: 1200 + 5,
	dugtrioalola: 1200 + 6,
	poliwhirl: 1200 + 7,
	poliwrath: 1200 + 8,
	mukalola: 1200 + 9,
	kingler: 1200 + 10,
	croconaw: 1200 + 11,
	cleffa: 1200 + 12,
	igglybuff: 1200 + 13,
	politoed: 1200 + 14,
	unownb: 1200 + 15,
	unownc: 1200 + 16,
	unownd: 1200 + 17,
	unowne: 1200 + 18,
	unownf: 1200 + 19,
	unowng: 1200 + 20,
	unownh: 1200 + 21,
	unownj: 1200 + 22,
	unownk: 1200 + 23,
	unownl: 1200 + 24,
	unownm: 1200 + 25,
	unownn: 1200 + 26,
	unownp: 1200 + 27,
	unownq: 1200 + 28,
	unownquestion: 1200 + 29,
	unownr: 1200 + 30,
	unowns: 1200 + 31,
	unownt: 1200 + 32,
	unownv: 1200 + 33,
	unownz: 1200 + 34,
	sneasel: 1200 + 35,
	teddiursa: 1200 + 36,
	roselia: 1200 + 37,
	zangoose: 1200 + 38,
	seviper: 1200 + 39,
	castformsnowy: 1200 + 40,
	absolmega: 1200 + 41,
	absol: 1200 + 42,
	regirock: 1200 + 43,
	torterra: 1200 + 44,
	budew: 1200 + 45,
	roserade: 1200 + 46,
	magmortar: 1200 + 47,
	togekiss: 1200 + 48,
	rotomwash: 1200 + 49,
	shayminsky: 1200 + 50,
	emboar: 1200 + 51,
	pansear: 1200 + 52,
	simisear: 1200 + 53,
	drilbur: 1200 + 54,
	excadrill: 1200 + 55,
	sawk: 1200 + 56,
	lilligant: 1200 + 57,
	garbodor: 1200 + 58,
	solosis: 1200 + 59,
	vanilluxe: 1200 + 60,
	amoonguss: 1200 + 61,
	klink: 1200 + 62,
	klang: 1200 + 63,
	klinklang: 1200 + 64,
	litwick: 1200 + 65,
	golett: 1200 + 66,
	golurk: 1200 + 67,
	kyuremblack: 1200 + 68,
	kyuremwhite: 1200 + 69,
	kyurem: 1200 + 70,
	keldeoresolute: 1200 + 71,
	meloetta: 1200 + 72,
	greninja: 1200 + 73,
	greninjaash: 1200 + 74,
	furfroudebutante: 1200 + 75,
	barbaracle: 1200 + 76,
	clauncher: 1200 + 77,
	clawitzer: 1200 + 78,
	sylveon: 1200 + 79,
	klefki: 1200 + 80,
	zygarde: 1200 + 81,
	zygarde10: 1200 + 82,
	zygardecomplete: 1200 + 83,
	dartrix: 1200 + 84,
	steenee: 1200 + 85,
	tsareena: 1200 + 86,
	comfey: 1200 + 87,
	miniormeteor: 1200 + 88,
	minior: 1200 + 89,
	miniororange: 1200 + 90,
	minioryellow: 1200 + 91,
	miniorgreen: 1200 + 92,
	miniorblue: 1200 + 93,
	miniorviolet: 1200 + 94,
	miniorindigo: 1200 + 95,
	dhelmise: 1200 + 96,
	necrozma: 1200 + 97,
	marshadow: 1200 + 98,
	pikachuoriginal: 1200 + 99,
	pikachupartner: 1200 + 100,
	necrozmaduskmane: 1200 + 101,
	necrozmadawnwings: 1200 + 102,
	necrozmaultra: 1200 + 103,
	stakataka: 1200 + 104,
	blacephalon: 1200 + 105,
};

const BattleAvatarNumbers: {[k: string]: string} = {
	1: 'lucas',
	2: 'dawn',
	3: 'youngster-gen4dp',
	4: 'lass-gen4dp',
	5: 'camper',
	6: 'picnicker',
	7: 'bugcatcher-gen4dp',
	8: 'aromalady',
	9: 'twins-gen4dp',
	10: 'hiker-gen4',
	11: 'battlegirl-gen4',
	12: 'fisherman-gen4',
	13: 'cyclist-gen4',
	14: 'cyclistf-gen4',
	15: 'blackbelt-gen4dp',
	16: 'artist-gen4',
	17: 'pokemonbreeder-gen4',
	18: 'pokemonbreederf-gen4',
	19: 'cowgirl',
	20: 'jogger',
	21: 'pokefan-gen4',
	22: 'pokefanf-gen4',
	23: 'pokekid',
	24: 'youngcouple-gen4dp',
	25: 'acetrainer-gen4dp',
	26: 'acetrainerf-gen4dp',
	27: 'waitress-gen4',
	28: 'veteran-gen4',
	29: 'ninjaboy',
	30: 'dragontamer',
	31: 'birdkeeper-gen4dp',
	32: 'doubleteam',
	33: 'richboy-gen4',
	34: 'lady-gen4',
	35: 'gentleman-gen4dp',
	36: 'madame-gen4dp',
	37: 'beauty-gen4dp',
	38: 'collector',
	39: 'policeman-gen4',
	40: 'pokemonranger-gen4',
	41: 'pokemonrangerf-gen4',
	42: 'scientist-gen4dp',
	43: 'swimmer-gen4dp',
	44: 'swimmerf-gen4dp',
	45: 'tuber',
	46: 'tuberf',
	47: 'sailor',
	48: 'sisandbro',
	49: 'ruinmaniac',
	50: 'psychic-gen4',
	51: 'psychicf-gen4',
	52: 'gambler',
	53: 'guitarist-gen4',
	54: 'acetrainersnow',
	55: 'acetrainersnowf',
	56: 'skier',
	57: 'skierf-gen4dp',
	58: 'roughneck-gen4',
	59: 'clown',
	60: 'worker-gen4',
	61: 'schoolkid-gen4dp',
	62: 'schoolkidf-gen4',
	63: 'roark',
	64: 'barry',
	65: 'byron',
	66: 'aaron',
	67: 'bertha',
	68: 'flint',
	69: 'lucian',
	70: 'cynthia-gen4',
	71: 'bellepa',
	72: 'rancher',
	73: 'mars',
	74: 'galacticgrunt',
	75: 'gardenia',
	76: 'crasherwake',
	77: 'maylene',
	78: 'fantina',
	79: 'candice',
	80: 'volkner',
	81: 'parasollady-gen4',
	82: 'waiter-gen4dp',
	83: 'interviewers',
	84: 'cameraman',
	85: 'reporter',
	86: 'idol',
	87: 'cyrus',
	88: 'jupiter',
	89: 'saturn',
	90: 'galacticgruntf',
	91: 'argenta',
	92: 'palmer',
	93: 'thorton',
	94: 'buck',
	95: 'darach',
	96: 'marley',
	97: 'mira',
	98: 'cheryl',
	99: 'riley',
	100: 'dahlia',
	101: 'ethan',
	102: 'lyra',
	103: 'twins-gen4',
	104: 'lass-gen4',
	105: 'acetrainer-gen4',
	106: 'acetrainerf-gen4',
	107: 'juggler',
	108: 'sage',
	109: 'li',
	110: 'gentleman-gen4',
	111: 'teacher',
	112: 'beauty',
	113: 'birdkeeper',
	114: 'swimmer-gen4',
	115: 'swimmerf-gen4',
	116: 'kimonogirl',
	117: 'scientist-gen4',
	118: 'acetrainercouple',
	119: 'youngcouple',
	120: 'supernerd',
	121: 'medium',
	122: 'schoolkid-gen4',
	123: 'blackbelt-gen4',
	124: 'pokemaniac',
	125: 'firebreather',
	126: 'burglar',
	127: 'biker-gen4',
	128: 'skierf',
	129: 'boarder',
	130: 'rocketgrunt',
	131: 'rocketgruntf',
	132: 'archer',
	133: 'ariana',
	134: 'proton',
	135: 'petrel',
	136: 'eusine',
	137: 'lucas-gen4pt',
	138: 'dawn-gen4pt',
	139: 'madame-gen4',
	140: 'waiter-gen4',
	141: 'falkner',
	142: 'bugsy',
	143: 'whitney',
	144: 'morty',
	145: 'chuck',
	146: 'jasmine',
	147: 'pryce',
	148: 'clair',
	149: 'will',
	150: 'koga',
	151: 'bruno',
	152: 'karen',
	153: 'lance',
	154: 'brock',
	155: 'misty',
	156: 'ltsurge',
	157: 'erika',
	158: 'janine',
	159: 'sabrina',
	160: 'blaine',
	161: 'blue',
	162: 'red',
	163: 'red',
	164: 'silver',
	165: 'giovanni',
	166: 'unknownf',
	167: 'unknown',
	168: 'unknown',
	169: 'hilbert',
	170: 'hilda',
	171: 'youngster',
	172: 'lass',
	173: 'schoolkid',
	174: 'schoolkidf',
	175: 'smasher',
	176: 'linebacker',
	177: 'waiter',
	178: 'waitress',
	179: 'chili',
	180: 'cilan',
	181: 'cress',
	182: 'nurseryaide',
	183: 'preschoolerf',
	184: 'preschooler',
	185: 'twins',
	186: 'pokemonbreeder',
	187: 'pokemonbreederf',
	188: 'lenora',
	189: 'burgh',
	190: 'elesa',
	191: 'clay',
	192: 'skyla',
	193: 'pokemonranger',
	194: 'pokemonrangerf',
	195: 'worker',
	196: 'backpacker',
	197: 'backpackerf',
	198: 'fisherman',
	199: 'musician',
	200: 'dancer',
	201: 'harlequin',
	202: 'artist',
	203: 'baker',
	204: 'psychic',
	205: 'psychicf',
	206: 'cheren',
	207: 'bianca',
	208: 'plasmagrunt-gen5bw',
	209: 'n',
	210: 'richboy',
	211: 'lady',
	212: 'pilot',
	213: 'workerice',
	214: 'hoopster',
	215: 'scientistf',
	216: 'clerkf',
	217: 'acetrainerf',
	218: 'acetrainer',
	219: 'blackbelt',
	220: 'scientist',
	221: 'striker',
	222: 'brycen',
	223: 'iris',
	224: 'drayden',
	225: 'roughneck',
	226: 'janitor',
	227: 'pokefan',
	228: 'pokefanf',
	229: 'doctor',
	230: 'nurse',
	231: 'hooligans',
	232: 'battlegirl',
	233: 'parasollady',
	234: 'clerk',
	235: 'clerk-boss',
	236: 'backers',
	237: 'backersf',
	238: 'veteran',
	239: 'veteranf',
	240: 'biker',
	241: 'infielder',
	242: 'hiker',
	243: 'madame',
	244: 'gentleman',
	245: 'plasmagruntf-gen5bw',
	246: 'shauntal',
	247: 'marshal',
	248: 'grimsley',
	249: 'caitlin',
	250: 'ghetsis-gen5bw',
	251: 'depotagent',
	252: 'swimmer',
	253: 'swimmerf',
	254: 'policeman',
	255: 'maid',
	256: 'ingo',
	257: 'alder',
	258: 'cyclist',
	259: 'cyclistf',
	260: 'cynthia',
	261: 'emmet',
	262: 'hilbert-wonderlauncher',
	263: 'hilda-wonderlauncher',
	264: 'hugh',
	265: 'rosa',
	266: 'nate',
	267: 'colress',
	268: 'beauty-gen5bw2',
	269: 'ghetsis',
	270: 'plasmagrunt',
	271: 'plasmagruntf',
	272: 'iris-gen5bw2',
	273: 'brycenman',
	274: 'shadowtriad',
	275: 'rood',
	276: 'zinzolin',
	277: 'cheren-gen5bw2',
	278: 'marlon',
	279: 'roxie',
	280: 'roxanne',
	281: 'brawly',
	282: 'wattson',
	283: 'flannery',
	284: 'norman',
	285: 'winona',
	286: 'tate',
	287: 'liza',
	288: 'juan',
	289: 'guitarist',
	290: 'steven',
	291: 'wallace',
	292: 'bellelba',
	293: 'benga',
	294: 'ash',
	'#bw2elesa': 'elesa-gen5bw2',
	'#teamrocket': 'teamrocket',
	'#yellow': 'yellow',
	'#zinnia': 'zinnia',
	'#clemont': 'clemont',
	'#wally': 'wally',
	breeder: 'pokemonbreeder',
	breederf: 'pokemonbreederf',
	'hilbert-dueldisk': 'hilbert-wonderlauncher',
	'hilda-dueldisk': 'hilda-wonderlauncher',
	'nate-dueldisk': 'nate-wonderlauncher',
	'rosa-dueldisk': 'rosa-wonderlauncher',

	1001: '#1001',
	1002: '#1002',
	1003: '#1003',
	1005: '#1005',
	1010: '#1010',
};

type StatName = 'hp' | 'atk' | 'def' | 'spa' | 'spd' | 'spe';
type NatureName = 'Adamant' | 'Bashful' | 'Bold' | 'Brave' | 'Calm' | 'Careful' | 'Docile' | 'Gentle' |
	'Hardy' | 'Hasty' | 'Impish' | 'Jolly' | 'Lax' | 'Lonely' | 'Mild' | 'Modest' | 'Naive' | 'Naughty' |
	'Quiet' | 'Quirky' | 'Rash' | 'Relaxed' | 'Sassy' | 'Serious' | 'Timid';
type StatNameExceptHP = 'atk' | 'def' | 'spa' | 'spd' | 'spe';
type TypeName = 'Normal' | 'Fighting' | 'Flying' | 'Poison' | 'Ground' | 'Rock' | 'Bug' | 'Ghost' | 'Steel' |
	'Fire' | 'Water' | 'Grass' | 'Electric' | 'Psychic' | 'Ice' | 'Dragon' | 'Dark' | 'Fairy' | '???';
type StatusName = 'par' | 'psn' | 'frz' | 'slp' | 'brn';
type BoostStatName = 'atk' | 'def' | 'spa' | 'spd' | 'spe' | 'evasion' | 'accuracy' | 'spc';
type GenderName = 'M' | 'F' | 'N';

interface Effect {
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly effectType: 'Item' | 'Move' | 'Ability' | 'Species' | 'PureEffect';
	/**
	 * Do we have data on this item/move/ability/species?
	 * WARNING: Always false if the relevant data files aren't loaded.
	 */
	readonly exists: boolean;
}

class PureEffect implements Effect {
	readonly effectType = 'PureEffect';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;
	constructor(id: ID, name: string) {
		this.id = id;
		this.name = name;
		this.gen = 0;
		this.exists = false;
	}
}

class Item implements Effect {
	// effect
	readonly effectType = 'Item';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	readonly num: number;
	readonly spritenum: number;
	readonly desc: string;
	readonly shortDesc: string;

	readonly megaStone: string;
	readonly megaEvolves: string;
	readonly zMove: string | true | null;
	readonly zMoveType: TypeName | '';
	readonly zMoveFrom: string;
	readonly zMoveUser: readonly string[] | null;
	readonly onPlate: TypeName;
	readonly onMemory: TypeName;
	readonly onDrive: TypeName;
	readonly fling: any;
	readonly naturalGift: any;
	readonly isPokeball: boolean;
	readonly itemUser?: readonly string[];

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);

		this.num = data.num || 0;
		this.spritenum = data.spritenum || 0;
		this.desc = data.desc || data.shortDesc || '';
		this.shortDesc = data.shortDesc || this.desc;

		this.megaStone = data.megaStone || '';
		this.megaEvolves = data.megaEvolves || '';
		this.zMove = data.zMove || null;
		this.zMoveType = data.zMoveType || '';
		this.zMoveFrom = data.zMoveFrom || '';
		this.zMoveUser = data.zMoveUser || null;
		this.onPlate = data.onPlate || '';
		this.onMemory = data.onMemory || '';
		this.onDrive = data.onDrive || '';
		this.fling = data.fling || null;
		this.naturalGift = data.naturalGift || null;
		this.isPokeball = !!data.isPokeball;
		this.itemUser = data.itemUser;

		if (!this.gen) {
			if (this.num >= 577) {
				this.gen = 6;
			} else if (this.num >= 537) {
				this.gen = 5;
			} else if (this.num >= 377) {
				this.gen = 4;
			} else {
				this.gen = 3;
			}
		}
	}
}

interface MoveFlags {
	/** The move has an animation when used on an ally. */
	allyanim?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability. */
	bite?: 1 | 0;
	/** Has no effect on Pokemon with the Bulletproof Ability. */
	bullet?: 1 | 0;
	/** Ignores a target's substitute. */
	bypasssub?: 1 | 0;
	/** The user is unable to make a move between turns. */
	charge?: 1 | 0;
	/** Makes contact. */
	contact?: 1 | 0;
	/** When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move. */
	dance?: 1 | 0;
	/** Thaws the user if executed successfully while the user is frozen. */
	defrost?: 1 | 0;
	/** Can target a Pokemon positioned anywhere in a Triple Battle. */
	distance?: 1 | 0;
	/** Prevented from being executed or selected during Gravity's effect. */
	gravity?: 1 | 0;
	/** Prevented from being executed or selected during Heal Block's effect. */
	heal?: 1 | 0;
	/** Can be copied by Mirror Move. */
	mirror?: 1 | 0;
	/** Prevented from being executed or selected in a Sky Battle. */
	nonsky?: 1 | 0;
	/** Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles. */
	powder?: 1 | 0;
	/** Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield. */
	protect?: 1 | 0;
	/** Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability. */
	pulse?: 1 | 0;
	/** Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability. */
	punch?: 1 | 0;
	/** If this move is successful, the user must recharge on the following turn and cannot make a move. */
	recharge?: 1 | 0;
	/** Bounced back to the original user by Magic Coat or the Magic Bounce Ability. */
	reflectable?: 1 | 0;
	/** Can be stolen from the original user and instead used by another Pokemon using Snatch. */
	snatch?: 1 | 0;
	/** Has no effect on Pokemon with the Soundproof Ability. */
	sound?: 1 | 0;
}

type MoveTarget = 'normal' | 'any' | 'adjacentAlly' | 'adjacentFoe' | 'adjacentAllyOrSelf' | // single-target
	'self' | 'randomNormal' | // single-target, automatic
	'allAdjacent' | 'allAdjacentFoes' | // spread
	'allySide' | 'foeSide' | 'all'; // side and field

class Move implements Effect {
	// effect
	readonly effectType = 'Move';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	readonly basePower: number;
	readonly accuracy: number | true;
	readonly pp: number;
	readonly type: TypeName;
	readonly category: 'Physical' | 'Special' | 'Status';
	readonly priority: number;
	readonly target: MoveTarget;
	readonly pressureTarget: MoveTarget;
	readonly flags: Readonly<MoveFlags>;
	readonly critRatio: number;

	readonly desc: string;
	readonly shortDesc: string;
	readonly isNonstandard: string | null;
	readonly isZ: ID;
	readonly zMove?: {
		basePower?: number,
		effect?: string,
		boost?: {[stat in StatName]?: number},
	};
	readonly isMax: boolean | string;
	readonly maxMove: {basePower: number};
	readonly ohko: true | 'Ice' | null;
	readonly recoil: number[] | null;
	readonly heal: number[] | null;
	readonly multihit: number[] | number | null;
	readonly hasCrashDamage: boolean;
	readonly noPPBoosts: boolean;
	readonly secondaries: ReadonlyArray<any> | null;
	readonly noSketch: boolean;
	readonly num: number;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);

		this.basePower = data.basePower || 0;
		this.accuracy = data.accuracy || 0;
		this.pp = data.pp || 1;
		this.type = data.type || '???';
		this.category = data.category || 'Physical';
		this.priority = data.priority || 0;
		this.target = data.target || 'normal';
		this.pressureTarget = data.pressureTarget || this.target;
		this.flags = data.flags || {};
		this.critRatio = data.critRatio === 0 ? 0 : (data.critRatio || 1);

		// TODO: move to text.js
		this.desc = data.desc;
		this.shortDesc = data.shortDesc;
		this.isNonstandard = data.isNonstandard || null;
		this.isZ = data.isZ || '';
		this.zMove = data.zMove || {};
		this.ohko = data.ohko || null;
		this.recoil = data.recoil || null;
		this.heal = data.heal || null;
		this.multihit = data.multihit || null;
		this.hasCrashDamage = data.hasCrashDamage || false;
		this.noPPBoosts = data.noPPBoosts || false;
		this.secondaries = data.secondaries || (data.secondary ? [data.secondary] : null);
		this.noSketch = !!data.noSketch;

		this.isMax = data.isMax || false;
		this.maxMove = data.maxMove || {basePower: 0};
		if (this.category !== 'Status' && !this.maxMove?.basePower) {
			if (this.isZ || this.isMax) {
				this.maxMove = {basePower: 1};
			} else if (!this.basePower) {
				this.maxMove = {basePower: 100};
			} else if (['Fighting', 'Poison'].includes(this.type)) {
				if (this.basePower >= 150) {
					this.maxMove = {basePower: 100};
				} else if (this.basePower >= 110) {
					this.maxMove = {basePower: 95};
				} else if (this.basePower >= 75) {
					this.maxMove = {basePower: 90};
				} else if (this.basePower >= 65) {
					this.maxMove = {basePower: 85};
				} else if (this.basePower >= 55) {
					this.maxMove = {basePower: 80};
				} else if (this.basePower >= 45) {
					this.maxMove = {basePower: 75};
				} else  {
					this.maxMove = {basePower: 70};
				}
			} else {
				if (this.basePower >= 150) {
					this.maxMove = {basePower: 150};
				} else if (this.basePower >= 110) {
					this.maxMove = {basePower: 140};
				} else if (this.basePower >= 75) {
					this.maxMove = {basePower: 130};
				} else if (this.basePower >= 65) {
					this.maxMove = {basePower: 120};
				} else if (this.basePower >= 55) {
					this.maxMove = {basePower: 110};
				} else if (this.basePower >= 45) {
					this.maxMove = {basePower: 100};
				} else  {
					this.maxMove = {basePower: 90};
				}
			}
		}

		if (this.category !== 'Status' && !this.isZ && !this.isMax) {
			let basePower = this.basePower;
			this.zMove = {};
			if (Array.isArray(this.multihit)) basePower *= 3;
			if (!basePower) {
				this.zMove.basePower = 100;
			} else if (basePower >= 140) {
				this.zMove.basePower = 200;
			} else if (basePower >= 130) {
				this.zMove.basePower = 195;
			} else if (basePower >= 120) {
				this.zMove.basePower = 190;
			} else if (basePower >= 110) {
				this.zMove.basePower = 185;
			} else if (basePower >= 100) {
				this.zMove.basePower = 180;
			} else if (basePower >= 90) {
				this.zMove.basePower = 175;
			} else if (basePower >= 80) {
				this.zMove.basePower = 160;
			} else if (basePower >= 70) {
				this.zMove.basePower = 140;
			} else if (basePower >= 60) {
				this.zMove.basePower = 120;
			} else {
				this.zMove.basePower = 100;
			}
			if (data.zMove) this.zMove.basePower = data.zMove.basePower;
		}

		this.num = data.num || 0;
		if (!this.gen) {
			if (this.num >= 743) {
				this.gen = 8;
			} else if (this.num >= 622) {
				this.gen = 7;
			} else if (this.num >= 560) {
				this.gen = 6;
			} else if (this.num >= 468) {
				this.gen = 5;
			} else if (this.num >= 355) {
				this.gen = 4;
			} else if (this.num >= 252) {
				this.gen = 3;
			} else if (this.num >= 166) {
				this.gen = 2;
			} else if (this.num >= 1) {
				this.gen = 1;
			}
		}
	}
}

class Ability implements Effect {
	// effect
	readonly effectType = 'Ability';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	readonly num: number;
	readonly shortDesc: string;
	readonly desc: string;

	readonly rating: number;
	readonly isPermanent: boolean;
	readonly isNonstandard: boolean;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);
		this.num = data.num || 0;
		this.shortDesc = data.shortDesc || data.desc || '';
		this.desc = data.desc || data.shortDesc || '';
		this.rating = data.rating || 1;
		this.isPermanent = !!data.isPermanent;
		this.isNonstandard = !!data.isNonstandard;
		if (!this.gen) {
			if (this.num >= 234) {
				this.gen = 8;
			} else if (this.num >= 192) {
				this.gen = 7;
			} else if (this.num >= 165) {
				this.gen = 6;
			} else if (this.num >= 124) {
				this.gen = 5;
			} else if (this.num >= 77) {
				this.gen = 4;
			} else if (this.num >= 1) {
				this.gen = 3;
			}
		}
	}
}

class Species implements Effect {
	// effect
	readonly effectType = 'Species';
	readonly id: ID;
	readonly name: string;
	readonly gen: number;
	readonly exists: boolean;

	// name
	readonly baseSpecies: string;
	readonly forme: string;
	readonly formeid: string;
	readonly spriteid: string;
	readonly baseForme: string;

	// basic data
	readonly num: number;
	readonly types: ReadonlyArray<TypeName>;
	readonly abilities: Readonly<{
		0: string, 1?: string, H?: string, S?: string,
	}>;
	readonly baseStats: Readonly<{
		hp: number, atk: number, def: number, spa: number, spd: number, spe: number,
	}>;
	readonly weightkg: number;

	// flavor data
	readonly heightm: number;
	readonly gender: GenderName;
	readonly color: string;
	readonly genderRatio: Readonly<{M: number, F: number}> | null;
	readonly eggGroups: ReadonlyArray<string>;
	readonly tags: ReadonlyArray<string>;

	// format data
	readonly otherFormes: ReadonlyArray<string> | null;
	readonly cosmeticFormes: ReadonlyArray<string> | null;
	readonly evos: ReadonlyArray<string> | null;
	readonly prevo: string;
	readonly evoType: 'trade' | 'useItem' | 'levelMove' | 'levelExtra' | 'levelFriendship' | 'levelHold' | 'other' | '';
	readonly evoLevel: number;
	readonly evoMove: string;
	readonly evoItem: string;
	readonly evoCondition: string;
	readonly requiredItems: ReadonlyArray<string>;
	readonly tier: string;
	readonly isTotem: boolean;
	readonly isMega: boolean;
	readonly canGigantamax: boolean;
	readonly isPrimal: boolean;
	readonly battleOnly: string | string[] | undefined;
	readonly isNonstandard: string | null;
	readonly unreleasedHidden: boolean | 'Past';
	readonly changesFrom: string | undefined;

	constructor(id: ID, name: string, data: any) {
		if (!data || typeof data !== 'object') data = {};
		if (data.name) name = data.name;
		this.name = Dex.sanitizeName(name);
		this.id = id;
		this.gen = data.gen || 0;
		this.exists = ('exists' in data ? !!data.exists : true);
		this.baseSpecies = data.baseSpecies || name;
		this.forme = data.forme || '';
		const baseId = toID(this.baseSpecies);
		this.formeid = (baseId === this.id ? '' : '-' + toID(this.forme));
		this.spriteid = baseId + this.formeid;
		if (this.spriteid.slice(-5) === 'totem') this.spriteid = this.spriteid.slice(0, -5);
		if (this.spriteid.slice(-1) === '-') this.spriteid = this.spriteid.slice(0, -1);
		this.baseForme = data.baseForme || '';

		this.num = data.num || 0;
		this.types = data.types || ['???'];
		this.abilities = data.abilities || {0: "No Ability"};
		this.baseStats = data.baseStats || {hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0};
		this.weightkg = data.weightkg || 0;

		this.heightm = data.heightm || 0;
		this.gender = data.gender || '';
		this.color = data.color || '';
		this.genderRatio = data.genderRatio || null;
		this.eggGroups = data.eggGroups || [];
		this.tags = data.tags || [];

		this.otherFormes = data.otherFormes || null;
		this.cosmeticFormes = data.cosmeticFormes || null;
		this.evos = data.evos || null;
		this.prevo = data.prevo || '';
		this.evoType = data.evoType || '';
		this.evoLevel = data.evoLevel || 0;
		this.evoMove = data.evoMove || '';
		this.evoItem = data.evoItem || '';
		this.evoCondition = data.evoCondition || '';
		this.requiredItems = data.requiredItems || (data.requiredItem ? [data.requiredItem] : []);
		this.tier = data.tier || '';

		this.isTotem = false;
		this.isMega = !!(this.forme && ['-mega', '-megax', '-megay'].includes(this.formeid));
		this.canGigantamax = !!data.canGigantamax;
		this.isPrimal = !!(this.forme && this.formeid === '-primal');
		this.battleOnly = data.battleOnly || undefined;
		this.isNonstandard = data.isNonstandard || null;
		this.unreleasedHidden = data.unreleasedHidden || false;
		this.changesFrom = data.changesFrom || undefined;
		if (!this.gen) {
			if (this.num >= 810 || this.formeid.startsWith('-galar')) {
				this.gen = 8;
			} else if (this.num >= 722 || this.formeid === '-alola' || this.formeid === '-starter') {
				this.gen = 7;
			} else if (this.isMega || this.isPrimal) {
				this.gen = 6;
				this.battleOnly = this.baseSpecies;
			} else if (this.formeid === '-totem' || this.formeid === '-alolatotem') {
				this.gen = 7;
				this.isTotem = true;
			} else if (this.num >= 650) {
				this.gen = 6;
			} else if (this.num >= 494) {
				this.gen = 5;
			} else if (this.num >= 387) {
				this.gen = 4;
			} else if (this.num >= 252) {
				this.gen = 3;
			} else if (this.num >= 152) {
				this.gen = 2;
			} else if (this.num >= 1) {
				this.gen = 1;
			}
		}
	}
}

interface Type extends Effect {
	damageTaken?: AnyObject;
	HPivs?: Partial<StatsTable>;
	HPdvs?: Partial<StatsTable>;
}

if (typeof require === 'function') {
	// in Node
	(global as any).BattleBaseSpeciesChart = BattleBaseSpeciesChart;
	(global as any).BattleNatures = BattleNatures;
	(global as any).PureEffect = PureEffect;
	(global as any).Species = Species;
	(global as any).Ability = Ability;
	(global as any).Item = Item;
	(global as any).Move = Move;
}
