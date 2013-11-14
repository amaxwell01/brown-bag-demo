/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'jobvite-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-webcam' : '&#xe000;',
			'icon-warning' : '&#xe001;',
			'icon-volume' : '&#xe002;',
			'icon-video-help' : '&#xe003;',
			'icon-upload-top' : '&#xe004;',
			'icon-upload-bottom' : '&#xe005;',
			'icon-unlock' : '&#xe006;',
			'icon-twitter-onecolor' : '&#xe007;',
			'icon-twitter-full-square' : '&#xe008;',
			'icon-thumbs-up' : '&#xe009;',
			'icon-thumbs-down' : '&#xe00a;',
			'icon-text-view' : '&#xe00b;',
			'icon-tasks' : '&#xe00c;',
			'icon-talentwise-full-square' : '&#xe00d;',
			'icon-tag' : '&#xe00e;',
			'icon-stop' : '&#xe00f;',
			'icon-step-forward' : '&#xe010;',
			'icon-step-back' : '&#xe011;',
			'icon-src-web-search' : '&#xe012;',
			'icon-src-web-page' : '&#xe013;',
			'icon-src-twitter' : '&#xe014;',
			'icon-src-social-network' : '&#xe015;',
			'icon-src-referral' : '&#xe016;',
			'icon-src-notification' : '&#xe017;',
			'icon-src-linkedin' : '&#xe018;',
			'icon-src-job-board' : '&#xe019;',
			'icon-src-internal' : '&#xe01a;',
			'icon-src-import' : '&#xe01b;',
			'icon-src-facebook' : '&#xe01c;',
			'icon-src-employee-role' : '&#xe01d;',
			'icon-src-email' : '&#xe01e;',
			'icon-src-custom' : '&#xe01f;',
			'icon-src-career-site' : '&#xe020;',
			'icon-snippet-view' : '&#xe021;',
			'icon-skip' : '&#xe022;',
			'icon-skip-circle' : '&#xe023;',
			'icon-share' : '&#xe024;',
			'icon-share-contact' : '&#xe025;',
			'icon-settings' : '&#xe026;',
			'icon-search' : '&#xe027;',
			'icon-save-copy' : '&#xe028;',
			'icon-right-arrow2' : '&#xe029;',
			'icon-rewind' : '&#xe02a;',
			'icon-retake' : '&#xe02b;',
			'icon-request' : '&#xe02c;',
			'icon-refresh3' : '&#xe02d;',
			'icon-refresh2' : '&#xe02e;',
			'icon-refresh' : '&#xe02f;',
			'icon-refer-a-friend' : '&#xe030;',
			'icon-record' : '&#xe031;',
			'icon-quick-view' : '&#xe032;',
			'icon-profile' : '&#xe033;',
			'icon-profile-circle' : '&#xe034;',
			'icon-print' : '&#xe035;',
			'icon-pop-out' : '&#xe036;',
			'icon-pop-in' : '&#xe037;',
			'icon-play' : '&#xe038;',
			'icon-play-circle' : '&#xe039;',
			'icon-pin' : '&#xe03a;',
			'icon-pause' : '&#xe03b;',
			'icon-panel-arrow' : '&#xe03c;',
			'icon-oneco-logo' : '&#xe03d;',
			'icon-note' : '&#xe03e;',
			'icon-move' : '&#xe03f;',
			'icon-movable' : '&#xe040;',
			'icon-mobile-phone' : '&#xe041;',
			'icon-mobile-next' : '&#xe042;',
			'icon-mobile-expand' : '&#xe043;',
			'icon-mobile-collapse' : '&#xe044;',
			'icon-mirror' : '&#xe045;',
			'icon-minimize' : '&#xe046;',
			'icon-microphone' : '&#xe047;',
			'icon-message' : '&#xe048;',
			'icon-menu-flyout' : '&#xe049;',
			'icon-maximize' : '&#xe04a;',
			'icon-logout' : '&#xe04b;',
			'icon-lock' : '&#xe04c;',
			'icon-list-view' : '&#xe04d;',
			'icon-linkedin-onecolor' : '&#xe04e;',
			'icon-linkedin-full-square' : '&#xe04f;',
			'icon-link' : '&#xe050;',
			'icon-left-arrow2' : '&#xe051;',
			'icon-left-arrow-circle2' : '&#xe052;',
			'icon-jobvite-logo' : '&#xe053;',
			'icon-insert' : '&#xe054;',
			'icon-import-people' : '&#xe055;',
			'icon-hireright-full-square' : '&#xe056;',
			'icon-help' : '&#xe057;',
			'icon-half-star' : '&#xe058;',
			'icon-grid-view' : '&#xe059;',
			'icon-graph-point' : '&#xe05a;',
			'icon-graph-line' : '&#xe05b;',
			'icon-graph-bar' : '&#xe05c;',
			'icon-globe' : '&#xe05d;',
			'icon-full-star' : '&#xe05e;',
			'icon-find-duplicates' : '&#xe05f;',
			'icon-fast-forward' : '&#xe060;',
			'icon-facebook-onecolor' : '&#xe061;',
			'icon-expand' : '&#xe062;',
			'icon-exclamation' : '&#xe063;',
			'icon-empty-star' : '&#xe064;',
			'icon-edit' : '&#xe065;',
			'icon-download' : '&#xe066;',
			'icon-down-triangle' : '&#xe067;',
			'icon-document' : '&#xe068;',
			'icon-delete' : '&#xe069;',
			'icon-contacts' : '&#xe06a;',
			'icon-contact' : '&#xe06b;',
			'icon-collapse' : '&#xe06c;',
			'icon-close' : '&#xe06d;',
			'icon-close-circle' : '&#xe06e;',
			'icon-clone' : '&#xe06f;',
			'icon-check' : '&#xe070;',
			'icon-chat' : '&#xe071;',
			'icon-calendar' : '&#xe072;',
			'icon-attachment' : '&#xe073;',
			'icon-arrow3' : '&#xe074;',
			'icon-arrow' : '&#xe075;',
			'icon-arrow-up' : '&#xe076;',
			'icon-arrow-down' : '&#xe077;',
			'icon-arrow-circle' : '&#xe078;',
			'icon-announcement' : '&#xe079;',
			'icon-add' : '&#xe07a;',
			'icon-add-task' : '&#xe07b;',
			'icon-add-tag' : '&#xe07c;',
			'icon-add-requisition' : '&#xe07d;',
			'icon-add-note' : '&#xe07e;',
			'icon-add-message' : '&#xe07f;',
			'icon-add-link' : '&#xe080;',
			'icon-add-folder' : '&#xe081;',
			'icon-add-document' : '&#xe082;',
			'icon-add-contact' : '&#xe083;',
			'icon-add-candidate' : '&#xe084;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};