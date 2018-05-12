//import axios from 'axios'
import PreservationState from '@/components/PreservationState.vue'
import BusyButton from '@/components/BusyButton.vue'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

const fields = [
	{ label: "id",      key: "id",      sortable: true },
	{ label: "title",   key: "title",   sortable: true },
	{ label: "owner",   key: "owner",   sortable: true },
	{ label: "created", key: "created", sortable: true, formatter: 'friendlyDate' },
	{ label: "state",   key: "state",   sortable: false },
]

/*
The preservation state is one of the following integers:
0 = Initialized
10 = Proposed for digital preservation
20 = Technical metadata generated
30 = Technical metadata generation failed
40 = Invalid metadata
50 = Metadata validation failed
60 = Validated metadata updated
70 = Valid metadata
80 = Accepted to digital preservation
90 = in packaging service
100 = Packaging failed
110 = SIP sent to ingestion in digital preservation service
120 = in digital preservation
130 = Rejected in digital preservation service
140 = in dissemination
*/





const records = [
	{
		id: "613",
		title: "Corine maanpeite 2006",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:14.573889",
		state: "10",
	},
	{
		id: "612",
		title: "Vanhan rakennuslain mukaisesti vahvistettujen yleiskaavojen rasterit",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "40",
	},
	{
		id: "789",
		title: "Jfwoejf wlkej lwkej kwjeflk wlkefjlwkjefljwelfjlkj",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2016-10-12T07:16:13.185609",
		state: undefined,
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "0",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "10",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "20",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "30",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "40",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "50",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "60",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "70",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "80",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "90",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "100",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "110",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "120",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "130",
	},
	{
		id: "789",
		title: "Lorum ipsum",
		owner: "Wouter Van Hemel",
		uid: "053bffbcc41edad4853bea91fc42ea18",
		created: "2017-10-12T07:16:13.185609",
		state: "140",
	},
]

const myGroups = [
	{
		id: "053bffbcc41edad4853bea91fc42ea18",
		name: "Wouter's project group",
	},
	{
		id: "053bffbcc41edad4853bea91fc42ea18",
		name: "Treehuggers' Project",
	},
]

const AUTH_UID = "053bffbcc41edad4853bea91fc42ea18"

/*	
function parseApiResults(json) {
	if (json['status'] !== "OK") return;
	if (typeof json['results'] !== 'object') return;
	if (typeof json['results'].length < 1) return;
	if (typeof json['results'][0]['geometry']['location'] !== 'object') return;
	let coords = json.results[0].geometry.location
	return {
		latitude: coords['lat'],
		longitude: coords['lng'],
	}
}
*/

export default {
	name: "record-lister",
	data: function() {
		return {
			fields: fields,
			records: records,
			ownerSelect: null,
			filterString: null,
			myGroupsOptions: [],
			recordSource: {
				local: false,
				metax: false,
			},
		}
	},
	methods: {
		getAddress: function() {
			/*
			axios.get('http://maps.google.com/maps/api/geocode/json', {
				params: {address: this.address},
			 timeout: 3000,
			 responseType: 'json',
			})
			.then(response => {
				//this.sources = response.data.sources;
				this.addressState = 'valid'
				this.addressError = ""
				let coords = parseApiResults(response.data)
				console.log("coords:", coords)
				if (coords) {
					this.coordinates.latitude = coords.latitude
					this.coordinates.longitude = coords.longitude
					this.$store.commit('updateValue', { p: this.parent, prop: this.property, val: this.coordinates })
				}
			})
			.catch(error => {
				this.addressState = 'invalid'
				this.addressError = error
				console.log(error)
			})
			*/
		},
		getGroups: function() {
			this.myGroupsOptions = []
			myGroups.forEach(
				grp => {
					this.myGroupsOptions.push({
						text: grp.name,
						value: grp.id,
					})
				})
		},
		friendlyDate: function(iso) {
			return distanceInWordsToNow(iso)
		},
		filterTitles: function(item) {
			if (!this.filterString) return true // don't filter null.toString()
			//let regex = new RegExp('.*' + this.filterString + '.*', 'ig')
			let regex = this.filterRegExp
			const test = regex.test(item.title)
			regex.lastIndex = 0
			return test
		},
		fetch: function(source) {
			this.toggleSource(source)
		},
		toggleSource: function(source) {
			Object.keys(this.recordSource).forEach(x => this.recordSource[x] = x === source)
		},
	},
	computed: {
		filterRegExp: function() {
			return new RegExp('.*' + this.filterString + '.*', 'ig')
		},
	},
	components: {
		PreservationState,
		BusyButton,
	},
	created: function() {
		this.getGroups()
		this.ownerSelect = this.$auth.user.id
	},
}
