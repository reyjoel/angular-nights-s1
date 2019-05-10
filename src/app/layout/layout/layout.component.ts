import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module'

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: [ './layout.component.scss' ]
})
export class LayoutComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	goHome() {
		this.router.navigate([ '/home' ])
	}

	goProfile() {
		this.router.navigate([ '/profile' ])
	}

	logout() {
		this.router.navigate([ '/login' ])
	}
}
