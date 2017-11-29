 

import { 
    Component, TemplateRef, ViewChild, ViewContainerRef,
    ViewEncapsulation, OnInit, ElementRef
  } from '@angular/core';
  import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
  import { DomSanitizer } from '@angular/platform-browser';
  
  import { FileUploaderOptions, FileUploader } from 'ng2-file-upload';
  
  import { DrawerService } from '@swimlane/ngx-ui';
  import { DialogService, AlertService } from '@swimlane/ngx-ui';
  import { NotificationService } from '@swimlane/ngx-ui';
  import { InjectionService , LoadingService,IconRegisteryService,HotkeysService, Hotkey } from '@swimlane/ngx-ui';


  import { rgb } from 'd3-color';
  
  export function getComputedStyle(elem, key) {
    let view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = window;
    }
    const computed = view.getComputedStyle(elem);
    return computed.getPropertyValue(key) || computed[key];
  }
  export var icons=[
    "3d-rotate",
    "add-circle-filled",
    "add-circle",
    "add-edge",
    "add-new",
    "add-node",
    "advanced-pie",
    "alert",
    "app-store",
    "apps-grid",
    "apps",
    "area-chart",
    "arrow-down",
    "arrow-left",
    "arrow-right",
    "arrow-up",
    "assets",
    "attachment",
    "back-arrow",
    "bars",
    "bell",
    "bold",
    "bolt",
    "broom",
    "browser-size",
    "bug",
    "builder",
    "calendar-clock",
    "calendar",
    "calender-clock",
    "cards",
    "center-align",
    "chart-area",
    "chart-bar-bar",
    "chart-bar-horizontal",
    "chart-bubble",
    "chart-donut",
    "chart-full-stacked-area",
    "chart-heat",
    "chart-horz-bar",
    "chart-horz-full-stack-bar",
    "chart-number-card",
    "chart-pie-grid",
    "chart-pie",
    "chart-scatter",
    "chart-stacked-area",
    "chart-vert-bar",
    "chart-vert-bar2",
    "chart-vert-stacked-bar",
    "check-filled",
    "check-square-filled",
    "check",
    "circle-filled",
    "circle",
    "circles",
    "circuit-board",
    "clipboard",
    "clock",
    "cloud-download",
    "cloud-upload",
    "code",
    "cog",
    "commandline",
    "comments",
    "copy-app",
    "copy-filled",
    "copy",
    "credit-card",
    "dashboard",
    "database",
    "devil",
    "document",
    "domain",
    "dots-horz",
    "dots-vert",
    "double-down",
    "double-left",
    "double-right",
    "double-up",
    "down",
    "edit-app",
    "edit",
    "email",
    "expand",
    "explore",
    "export-filled",
    "export",
    "eye-disabled",
    "eye",
    "field-created-by",
    "field-created-date",
    "field-date",
    "field-edited-by",
    "field-edited-date",
    "field-grid",
    "field-html",
    "field-json",
    "field-list",
    "field-multiselect",
    "field-numeric",
    "field-richtext",
    "field-single-select",
    "field-singleline",
    "field-text",
    "field-textarea",
    "field-users",
    "filter-bar",
    "filter",
    "find-page",
    "flame",
    "folder",
    "folders",
    "font",
    "format-indent-decrease",
    "format-indent-increase",
    "formula",
    "full-align",
    "gauge",
    "gear-square",
    "gear",
    "globe",
    "graph",
    "grid-view",
    "guage",
    "hand",
    "handle",
    "heat",
    "helper",
    "history",
    "horz-bar-graph-grouped",
    "horz-stacked-bar",
    "html-code",
    "info-fulled",
    "inspect",
    "integration",
    "integrations",
    "ip",
    "italic",
    "keyboard",
    "layer",
    "left-align",
    "line-chart",
    "line-graph",
    "linear-gauge",
    "link",
    "list-1",
    "list-view",
    "list",
    "loading",
    "location",
    "lock",
    "mail",
    "map",
    "menu",
    "mic",
    "minus",
    "money",
    "multi-line",
    "new-app",
    "numbered-list",
    "open",
    "paragraph",
    "pause",
    "phone",
    "pie-chart",
    "pin",
    "plan",
    "play",
    "plus",
    "prev",
    "printer",
    "profile-filled",
    "profile",
    "question-filled",
    "question",
    "radio-button",
    "reference-grid",
    "reference-multi",
    "reference-single",
    "reference",
    "refresh-circle",
    "refresh",
    "remove-edge",
    "remove-node",
    "remove-users",
    "reports",
    "right-align",
    "rocket",
    "rotate",
    "save",
    "screen",
    "search",
    "section",
    "select-all",
    "select-user",
    "select-users",
    "server",
    "shield",
    "shrink",
    "skip",
    "smartphone",
    "smiley-frown",
    "snapshot",
    "split-handle",
    "square-filled",
    "square",
    "star-filled",
    "star",
    "stopwatch",
    "superscript",
    "switch",
    "table",
    "tabs",
    "tracking-id",
    "trash",
    "tree-collapse",
    "tree-expand",
    "tree",
    "trending",
    "underline",
    "upload-app",
    "user-add",
    "user-circle",
    "user-groups",
    "user",
    "users",
    "vert-bar-graph-grouped",
    "vert-full-stack-bar",
    "wand",
    "warning-filled",
    "workflow",
    "workspaces",
    "workstation",
    "wrench",
    "x-filled",
    "x"
   ];
  export function rgb2hex(color) {
    color = rgb(color).toString();
    color = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    color = (color && color.length === 4) ? '#' +
      ('0' + parseInt(color[1], 10).toString(16)).slice(-2) +
      ('0' + parseInt(color[2], 10).toString(16)).slice(-2) +
      ('0' + parseInt(color[3], 10).toString(16)).slice(-2) : '';
    return color.toUpperCase();
  }
  
  

@Component({
    selector: 'app-home',
    providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



    ngOnInit() {
    }

 
  
    @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
    @ViewChild('dialogTmpl') dialogTpl: TemplateRef<any>;
  
    tooltipModel = {
      text: 'foo'
    };
  
    searchInputValue: string = '';
  
    leftSplit = '30%';
    rightSplit = '70%';
  
    chars = `
      ​‌‘ ​‌? ​‌’ ​‌“ ​‌! ​‌” ​‌( ​‌%​‌ )​‌ [ ​‌# ​‌]​‌ { ​‌@ ​‌}​‌ /​‌& ​‌<​‌
      - ​‌+​ ‌÷​ ‌×​ ‌= ​‌> ​‌® ​‌© ​‌$ ​‌€ ​‌£ ​‌¥ ​‌¢ ​‌: ​‌; ​‌, ​‌. ​‌*
    `;
  
    nums = `
      1​‌ 2 ​‌3 ​‌4 ​‌5 ​‌6 ​‌7 ​‌8 ​‌9 ​‌0
    `;
  
    letters = `
      ​‌A​‌ B ​‌C ​‌Ć ​‌D ​‌E ​‌F ​‌G ​‌H ​‌I ​‌J ​‌K ​‌L ​‌M ​‌
      N​‌ O​‌ P​‌ Q ​‌R ​‌S​‌ Š​‌ T ​‌U​‌ V ​‌W​‌ X ​‌Y ​‌Z ​‌Ž​‌
    `;
  
    lettersLower = `
      a b​‌ c ​‌ć​‌ d​‌ e​‌ f​‌ g​‌ h​‌ i ​‌j ​‌k​‌ l ​‌m​‌
      n​‌ o ​‌p​‌ q​‌ r ​‌s ​‌š​‌ t​‌ u​‌ v​‌ w​‌ x​‌ y​‌ z​‌ ž​‌
    `;
  
    fontStyles = {
      Light: 'font-weight: 300; font-style: normal',
      'Light Italic': 'font-weight: 300; font-style: italic',
      Regular: 'font-weight: 400; font-style: normal',
      'Regular Italic': 'font-weight: 400; font-style: italic',
      'Semi-Bold': 'font-weight: 600; font-style: normal',
      'Semi-Bold Italic': 'font-weight: 600; font-style: italic',
      Bold: 'font-weight: bold; font-style: normal',
      'Bold Italic': 'font-weight: bold; font-style: italic'
    };
  
    fontKeys = Object.keys(this.fontStyles);
  
    dynamicVal = `Attack at ${new Date()}`;
  
    chartColorsOrdinal = [
      {
        name: 'Vivid',
        colors: [
          '#62CD8C',
          '#3D4EB4',
          '#1594F2',
          '#00B965',
          '#B7DF3F',
          '#99B726',
          '#F4E667',
          '#FF990D',
          '#FF5821',
          '#D24018'
        ]
      },
      {
        name: 'Natural',
        colors: [
          '#C09E77',
          '#EA9551',
          '#D9A05B',
          '#F2E0A8',
          '#F2E0A8',
          '#A4D7C6',
          '#7693B1',
          '#AFAFAF',
          '#707160',
          '#D9D5C3'
        ]
      },
      {
        name: 'Cool',
        colors: [
          '#ACCCED',
          '#A9E3F5',
          '#7CD2ED',
          '#4DAACC',
          '#79A2E4',
          '#8695BF',
          '#A27DA7',
          '#AE6785',
          '#AA5963',
          '#A9375C'
        ]
      },
      {
        name: 'Fire',
        colors: [
          '#FF3E00',
          '#C0370A',
          '#FF900B',
          '#FF7002',
          '#FF3E00',
          '#FF5821',
          '#E75200',
          '#FFCC31',
          '#FFAC12',
          '#FF7002'
        ]
      }
    ];
  
    chartColorsSequential = [
      {
        name: 'Solar',
        colors: [
          '#FFF8E1',
          '#FFEDB4',
          '#FFE184',
          '#FFD654',
          '#FFCC31',
          '#FFC31B',
          '#FFB414',
          '#FFA10F',
          '#FF900B',
          '#FF7002'
        ]
      },
      {
        name: 'Air',
        colors: [
          '#E1F5FE',
          '#B2E5FC',
          '#7FD3F9',
          '#4AC2F6',
          '#1EB5F5',
          '#00A7F3',
          '#0099E4',
          '#0086D0',
          '#0075BC',
          '#00559A'
        ]
      },
      {
        name: 'Aqua',
        colors: [
          '#E0F7FA',
          '#B1EBF2',
          '#7EDEEA',
          '#48D0E1',
          '#1AC6DA',
          '#00BBD4',
          '#00ACC1',
          '#0097A7',
          '#00838F',
          '#006064'
        ]
      }
    ];
  
    themes = [
      'day',
      'night',
      'moonlight'
    ];
  
    selects = function() {
      let i = 50;
      const results = [];
      while(i--) {
        results.push({
          name: `Breach Level: ${i}`,
          attr: `${i}_intrusion_breach`,
          address: `${i}.${i}.${i}.12`,
          disabled: i === 48
        });
      }
  
      return results;
    }();
  
    icons = icons;
    iconFx = [
      'inverse',
      'rotate-90',
      'rotate-180',
      'rotate-270',
      'flip',
      'flip-y',
      'half-sized',
      'dbl-sized',
      'badge',
      'spinning',
      'spinning-rev'
    ];
  
    toggleChk = true;
  
    code = `var foo = true;
  var bar = false;
  
  function moo() {
    console.log(foo);
  }`;
    
    curDate: any = new Date();
    minDate: any = new Date('10/2/2016');
    maxDate: any = new Date('10/22/2016');
    curDate2: any = new Date('10/10/2016');
    invalidDate: any = 'foo';
    emptyDate: any = null;
    editorResult: any;
    numericValue: any;
    inputValue: any;
    inputValue1: any;
    inputValue2: any;
    inputValue3: any;
    input5: any;
    usernameValue: any;
    passwordValue: any;
    shown: any;
    output: any;
    sliderEvent1: any;
    sliderEvent2: any;
    sliderEvent3: any;
    sliderEvent4: any;
    sliderEvent5: any;
    sliderEvent6: any;
    sliderEvent7: any;
    sliderEvent8: any;
    dialogVis: any;
  
    prefix = '$USD';
    suffix = '.00';
    helptext = `<i>
    Enter currency in
    <a href="http://www.x-rates.com/table/?from=USD&amount=1">USD</a>
  </i>`;
    label =  'Net Profit';
    showHelp = true;
  
    hideAlertArea = false;
    hideFixedSidebar = false;
  
    get state() {
      return (window as any).state;
    }
  
    set state(val) {
      (window as any).state = val;
    }
  
    editorConfig = {
      lineNumbers: true,
      theme: 'dracula',
      mode: {
        name: 'javascript',
        json: true
      }
    };
  
    sliderValue = 85;
  
    gradients = [
      'gradient-blue',
      'gradient-blue-green',
      'gradient-blue-red',
      'gradient-blue-purple',
      'gradient-red-orange',
      'gradient-orange-purple',
    ];
  
    toolbarMenu = [
      {
        label: 'File',
        click: () => {
          console.log('File clicked');
        }
      },
      {
        label: 'Run',
        disabled: true
      },
      {
        label: 'Edit',
        dropdown: true,
        click: () => {
          console.log('Edit clicked');
        }
      }
    ];
  
    rows: any[] = (function() {
      const res = [];
  
      let i = 0;
      while(i++ < 50) {
        res.push({
          type: i % 2 ? 'DDOS' : 'Malware',
          os: 'Linux',
          user: 'cody'
        });
      }
  
      return res;
    })();
  
    shadows = [];
  
    uploadOptions = {
      url: 'https://evening-anchorage-3159.herokuapp.com/api/',
      autoUpload: true
    };
  
    uploaderInstance = new FileUploader({
      url: 'https://evening-anchorage-3159.herokuapp.com/api/',
      autoUpload: false
    });
  
    deps: any;
  
    nodes: any[] = [
      { label: 'Node 1' },
      {
          label: 'Node 2',
          expandable: true,
          expanded: true,
          children: [
            { label: 'Node 1' },
            { label: 'Node 2' },
            {
              label: 'Node 3',
              expanded: false,
              expandable: true,
              children: [
                { label: 'Node 1' },
                { label: 'Node 2' },
                { label: 'Node 3' },
                { label: 'Node 4' }
              ]
            },
            {
              label: 'Node 4',
              expandable: true,
              expanded: true,
              children: [
                { label: 'Node 1' },
                { label: 'Node 2' },
                { label: 'Node 3' },
                { label: 'Node 4' }
              ]
            }
          ]
      },
      { label: 'Node 3' },
      {
        label: 'Node 4',
        children: [
          { label: 'Node 1' },
          { label: 'Node 2' },
          { label: 'Node 3' },
          { label: 'Node 4' }
        ],
        expandable: true
      }
    ];
  
    nodes1: any[] = [
      {
        label: 'Node1', model: { type: 'Array', count: 1 }
      },
      {
        label: 'Node2',
        expandable: true,
        model: { type: 'Object' },
        children: [
          {
            label: 'Node1', model: { type: 'Array', count: 1 }
          }
        ]
      },
      {
        label: 'Node3', model: { type: 'Array', count: 1 }
      }
    ];
  
    inputDefaultVal: string = 'Defaulted!';
  
    jsonObject = JSON.parse(`{
      "firstName": "John",
      "lastName": "Smith",
      "isAlive": true,
      "age": 25,
      "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
      },
      "phoneNumbers": [
        {
          "type": "home",
          "number": "212 555-1234"
        },
        {
          "type": "office",
          "number": "646 555-4567"
        },
        {
          "type": "mobile",
          "number": "123 456-7890"
        }
      ],
      "children": [],
      "spouse": null
    }`);
  
    buttonPromise: any = undefined;
    currentTheme = 'night';
  
    nags = [];
  
    constructor(
      public viewContainerRef: ViewContainerRef,
      public drawerMngr: DrawerService,
      public dialogMngr: DialogService,
      public notificationService: NotificationService,
      public injectionService: InjectionService,
      public alertService: AlertService,
      public loadingService: LoadingService,
      public hotkeysService: HotkeysService,
      public iconRegisteryService: IconRegisteryService,
      public location: Location,
      private sanitizer: DomSanitizer
      ) {
  
      // uncomment for testing
      // this.injectionService.setRootViewContainer(this.viewContainerRef);
  
      let i = 1;
      while(i <= 24) {
        this.shadows.push(i++);
      }
  
     // this.deps = DEPS;
  
      this.state = this.location.path(true);
  
      iconRegisteryService.add('frown-upside-down', 'smiley-frown fx-flip-y');
      iconRegisteryService.add('x-spinning', 'x fx-spinning');
      iconRegisteryService.add('x-spinning-red', 'x-spinning :text-red');
      iconRegisteryService.add('turbine', ['square-filled', 'x-spinning-red']);
  
      iconRegisteryService.add('app:create', 'new-app');
      iconRegisteryService.add('app:edit', 'edit-app');
      iconRegisteryService.add('app:copy', 'copy-app');
  
      this.hotkeysService.add('mod+h', {
        callback: () => {
          alert('Hotkey activated');
        },
        description: 'Show message',
        component: this
      });
  
      this.hotkeysService.add('mod+alt+s', {
        callback: () => {
          this.switchThemes();
        },
        description: 'Switch themes',
        component: this,
        visible: false
      });
  
      this.getPanelState();
  
      this.fontKeys.forEach(key => {
        this.fontStyles[key] = sanitizer.bypassSecurityTrustStyle(this.fontStyles[key]);
      });
    }
  
    @Hotkey('mod+s', 'Switch themes')
    switchThemes() {
      let idx = this.themes.indexOf(this.currentTheme);
      idx = (idx + 1) % 3;
      this.setTheme(this.themes[idx]);
    }
  
    @Hotkey(
      'up up down down left right left right b a enter', 
      'Do some magic!', 
      { visible: false })
    onKey() {
      alert('BOSS!');
    }
  
    getBackgroundColor(el) {
      const bgColor = getComputedStyle(el, 'background-color');
      return rgb2hex(bgColor);
    }
  
    dateChanged(val) {
      console.log('date changed!', val);
    }
  
    setTheme(theme) {
      this.currentTheme = theme;
      const elm = document.querySelector('body');
  
      // remove old
      elm.classList.remove('day-theme');
      elm.classList.remove('night-theme');
      elm.classList.remove('moonlight-theme');
  
      // add new
      elm.classList.add(`${theme}-theme`);
    }
  
    openDrawer(direction = 'left', size?) {
      this.drawerMngr.create({
        direction,
        template: this.editTmpl,
        size,
        context: 'Alert Everyone!'
      });
    }
  
    addNag() {
      this.nags.push({
        type: 'Alert',
        id: Math.trunc(Math.random() * 10000)
      });
    }
  
    openDialog(options) {
      this.dialogMngr.create(options);
    }
  
    openDialogAndPauseHotkeys(options) {
      const dlg = this.dialogMngr.create(options);
      this.hotkeysService.pauseOthers(dlg.instance);
      dlg.instance.close.subscribe(() => {
        this.hotkeysService.unpauseOthers(dlg.instance);
      });
    }
  
    menuClicked(event) {
      console.log('Menu clicked', event);
    }
  
    onToggleChange(event) {
      console.log('check?', event);
    }
  
    onSelectKeyUp(event) {
      console.log('key up', event);
    }
  
    onEvent(name: string, event: any): void {
      console.log(name, event);
    }
  
    onClick(msg) {
      console.log('Demo app click: ', msg);
      this.buttonPromise = new Promise((resolve, reject) => {
        setTimeout(function(){
          if (Math.random() < 0.5) {
            resolve('Success!');
          } else {
            reject('I fail you!');
          }
        }, 3000);
      });
  
      this.buttonPromise.then(() => {
        console.log('success');
      }).catch((error) => {
        console.log('fail');
      });
    }
  
    onPromptClick() {
      const subject = this.alertService.prompt({
        title: 'Alert SOC',
        content: 'What type of compromise?'
      });
  
      console.log('Prompt subject', subject);
  
      subject.subscribe({
        next: (v) => console.log('Prompt next', v),
        error: (err) => console.log('Prompt err', err),
        complete: (v) => console.log('Complete', v)
      });
    }
  
    panelStateChanged() {
      localStorage.setItem('hideAlertArea', this.hideAlertArea.toString());
      localStorage.setItem('hideFixedSidebar', this.hideFixedSidebar.toString());
    }
  
    getPanelState() {
      this.hideAlertArea = localStorage.getItem('hideAlertArea') === 'true';
      this.hideFixedSidebar = localStorage.getItem('hideFixedSidebar') === 'true';
    }
  }
  