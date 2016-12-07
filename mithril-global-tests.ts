// Just test the global mithril objects

const comp = {
	view() {
		return m('span', "Test")
	}
}

m.mount(document.getElementById('comp'), comp)
