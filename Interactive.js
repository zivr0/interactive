(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Interactive_atlas_", frames: [[103,0,84,108],[104,110,87,83],[0,0,101,149],[104,195,96,28],[0,151,102,85]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.סרטונים = function() {
	this.spriteSheet = ss["Interactive_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.סאונד = function() {
	this.spriteSheet = ss["Interactive_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.פונטים = function() {
	this.spriteSheet = ss["Interactive_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.קודתכנות1 = function() {
	this.spriteSheet = ss["Interactive_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.תמונות1 = function() {
	this.spriteSheet = ss["Interactive_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vsitehlhitbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.149)").s().p("EhDSAFaIAAq0MCGkAAAIAAK0g");
	this.shape.setTransform(430.7,34.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.vsitehl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.149)").s().p("EhDSAFaIAAq0MCGkAAAIAAK0g");
	this.shape.setTransform(430.7,34.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.vsitehl, new cjs.Rectangle(0,0,861.3,69.3), null);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwAnIAcgFIgYhcIAaAAIAPAzIAGAiQAGgEAFgIQADgIABgMIAFg1IAbAAIgFAxQgBAPgEAKQgNAfgnAHIgkAGg");
	this.shape.setTransform(174.4,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBFIAJgrIAOgyIg6AAIAAgrIAbAAIAAAXIA6AAIAAARIgPA1IgJArg");
	this.shape_1.setTransform(164,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AACA6IAAgVIAVAAIAAgoQAAgPgCgGIgEgGQgEgGgJAAQgEAAgCADIgHAEQgFAFgCAFIgBACIgHBLIgaAAIAHhHIAAgIQAAgQgGgSIAZAAIADAIIACAJIACAAIABgBIAEgFIAGgGQAEgDAFgCQAGgCAHAAQAIAAAGADQAGADAEAFQAEAFADAGQAEAMAAASIAAA/g");
	this.shape_2.setTransform(147.9,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbA6IAAgVIAbAAQABgGAAgOIAAgmQAAgLgEgCQgCgCgDAAIgNACIAAgVQAHgBAJgBQAHABAGABQAGACAEADQAEADACAFQAEAIAAANIAAAtIgBARIgCAMIgBAFg");
	this.shape_3.setTransform(137.8,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag0A4IAAgVIAJACIAGgBIADgEQACgDAAgGIAAg6IgNACIAAgVQAbgDAagBQATAAAKAGQAFACADADQAEADABAFIADAKIAAANIAABJIgbAAIAAhJQAAgVgWAAIgKAAIAAA8QAAAVgKAHQgDADgGADQgHABgHAAQgHAAgGgCg");
	this.shape_4.setTransform(127.5,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHBFIAJgrIAOgyIg6AAIAAgrIAbAAIAAAXIA6AAIAAARIgPA1IgJArg");
	this.shape_5.setTransform(112,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AATA6IAAhJQAAgVgWAAIgSABIgRACIgGABIAAgVIAUgDIAYgBIARABQAHACAFADQAFACAEADQADADABAFIADAKIAAANIAABJgAgsA6IAAhIIAbAAIAABIg");
	this.shape_6.setTransform(101.2,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag0A4IAAgVIAJACIAGgBIADgEQACgDAAgGIAAg6IgNACIAAgVQAbgDAagBQATAAAKAGQAFACADADQAEADABAFIADAKIAAANIAABJIgbAAIAAhJQAAgVgWAAIgKAAIAAA8QAAAVgKAHQgDADgGADQgHABgHAAQgHAAgGgCg");
	this.shape_7.setTransform(88.6,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATA6IAAhJQAAgVgWAAIgOAAIAABeIgbAAIAAhvIAUgDIAYgBIARABQAHACAFADQAFACAEADQADADABAFIADAKIAAANIAABJg");
	this.shape_8.setTransform(76.8,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMAlIAAhJIAZAAIAAAzIgQAWg");
	this.shape_9.setTransform(68.3,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHBFIAJgrIAOgyIg6AAIAAgrIAbAAIAAAXIA6AAIAAARIgPA1IgJArg");
	this.shape_10.setTransform(60.8,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRAWQAHgWACgVIAYAAIABACQgEASgLAXg");
	this.shape_11.setTransform(53,7.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgsA6IAAgVIAyAAIAAg0QAAgVgWAAIgYABIgEABIAAgVQANgBATgBQAbAAAKALQAEAGACAIQABAGAAALIAAA0IANAAIAAAVg");
	this.shape_12.setTransform(41,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATA6IAAhJQAAgVgWAAIgOAAIAABeIgbAAIAAhvIAUgDIAYgBIARABQAHACAFADQAFACAEADQADADABAFIADAKIAAANIAABJg");
	this.shape_13.setTransform(29.7,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAMA6IAAhJQAAgVgVAAQgMAAgRACIAAgVIAdgCIATABQAIACAFADQAFACADADQADADACAFIACAKIABANIAABJg");
	this.shape_14.setTransform(18.6,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAUA5Ighg4QgEABgBAEQgCAEAAAGIAAApIgbAAIAAgpIAAgIIACgHIAEgGQACgDAFgDQAEgDAGgCIgZgoIAeAAIAWAnIALARQAEgBACgEQABgEAAgGIAAgpIAbAAIAAApQAAAPgGAGQgCAEgFACQgEADgGACIAZAog");
	this.shape_15.setTransform(3.8,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag0A4IAAgVIAJACIAGgBIADgEQACgDAAgGIAAg6IgNACIAAgVQAbgDAagBQATAAAKAGQAFACADADQAEADABAFIADAKIAAANIAABJIgbAAIAAhJQAAgVgWAAIgKAAIAAA8QAAAVgKAHQgDADgGADQgHABgHAAQgHAAgGgCg");
	this.shape_16.setTransform(-8.7,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgiArQgNgPAAgcQAAgKAEgKQAFgKAFgFIAAgBIgMABIAAgUQAUgCAZgBQAXABAMAPQANAPAAAbQAAAcgNAPQgNAQgWgBQgVABgNgQgAgTAAQAAAlATAAQAUAAAAglQAAglgUAAIgJAAQgKAOAAAXg");
	this.shape_17.setTransform(-24.9,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgMA5IAAhxIAaAAIAABxg");
	this.shape_18.setTransform(-33.2,1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfA6IACgaIADABIADAAIAGAAIAIgBQAHgDADgGQAEgGAAgJIAAgeQAAgLgFgCQgBgCgEAAQgHAAgFACIgCABIAAgWQAHgCAKAAQAIABAHABQAGACAEADQADADACAFIADAKIABALIAABPIgVAAIgDgRIgBAAIgFAGIgEAGIgJAFQgGABgEAAIgKAAg");
	this.shape_19.setTransform(-40.5,1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATA6IAAhJQAAgVgWAAIgSABIgRACIgGABIAAgVIAUgDIAYgBIARABQAHACAFADQAFACAEADQADADABAFIADAKIAAANIAABJgAgsA6IAAhIIAbAAIAABIg");
	this.shape_20.setTransform(-54.9,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AACA6IAAgVIAVAAIAAgoQAAgPgCgGIgEgGQgEgGgJAAQgEAAgCADIgHAEQgFAFgCAFIgBACIgHBLIgaAAIAHhHIAAgIQAAgQgGgSIAZAAIADAIIACAJIACAAIABgBIAEgFIAGgGQAEgDAFgCQAGgCAHAAQAIAAAGADQAGADAEAFQAEAFADAGQAEAMAAASIAAA/g");
	this.shape_21.setTransform(-67.3,1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AADA5IAAhGQAAgFABgEIAEgGQADgFAEgBIABgBIAAAAIg8AAIAAgVIBZAAIAAAUIgIAEQgEADgCAFQgBAEAAAHIAABGg");
	this.shape_22.setTransform(-78.1,1.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgMAlIAAhJIAZAAIAAAzIgQAWg");
	this.shape_23.setTransform(-85.6,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AATA6IAAhJQAAgVgWAAIgSABIgRACIgGABIAAgVIAUgDIAYgBIARABQAHACAFADQAFACAEADQADADABAFIADAKIAAANIAABJgAgsA6IAAhIIAbAAIAABIg");
	this.shape_24.setTransform(-94.1,1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMA5IAAhxIAaAAIAABxg");
	this.shape_25.setTransform(-107.5,1.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHBFIAJgrIAOgyIg6AAIAAgrIAbAAIAAAXIA6AAIAAARIgPA1IgJArg");
	this.shape_26.setTransform(-115.1,0.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AATA6IAAhJQAAgVgWAAIgOAAIAABeIgbAAIAAhvIAUgDIAYgBIARABQAHACAFADQAFACAEADQADADABAFIADAKIAAANIAABJg");
	this.shape_27.setTransform(-125.9,1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUBOIAAhcIgag/IAeAAIASA3IAAABIAFABQAHAAADgEQADgEAAgIIAAgpIAbAAIAAAoQAAATgKAJQgEADgGACQgGACgJAAIgHAAIAABQg");
	this.shape_28.setTransform(-137.4,3.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgxAnIAegFIgZhcIAbAAIANAzIAGAiQAIgEADgIQAEgIACgMIAEg1IAaAAIgEAxQgBAPgFAKQgMAfgoAHIgkAGg");
	this.shape_29.setTransform(-152.7,1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHBFIAJgrIAOgyIg6AAIAAgrIAbAAIAAAXIA6AAIAAARIgPA1IgJArg");
	this.shape_30.setTransform(-163.1,0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgMAlIAAhJIAZAAIAAAzIgQAWg");
	this.shape_31.setTransform(-170.6,-0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AATA6IAAhJQAAgVgWAAIgSABIgRACIgGABIAAgVIAUgDIAYgBIARABQAHACAFADQAFACAEADQADADABAFIADAKIAAANIAABJgAgsA6IAAhIIAbAAIAABIg");
	this.shape_32.setTransform(-179.1,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-14.2,374.1,28.5);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgcABIgGAAIACgLIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJgAgvA2IAPhDIAOAAIgPBDg");
	this.shape.setTransform(228.8,54.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEA2IADgKIAVAAIAOg9IABgHQAAgHgCgDQgFgIgMAAIgIACIgHADIgIAHIgBABIgaBTIgOAAIAZhRIABgJIAAgLIgBgFIANAAQACAEAAAHIAAAAQAIgIAMgDIAMgBQAPAAAGAJQAEAGAAAIIgCAMIgPBIg");
	this.shape_1.setTransform(218.3,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaA0QgHgDgEgHQgGgJAAgNQAAgJACgLQAEgPAFgKQAGgLAHgGIgLABIADgMIAmgBQAUAAAIANQAFAIAAANQAAAJgCAMQgDANgGALQgFAKgIAHQgHAGgIAEQgHADgJAAQgJAAgGgDgAgSgXQgGAMgCALQgDAKAAAJQAAAJADAGQADAEAEADQAFACAGAAQAGAAAEgCQAGgDADgEQAFgEACgFQAIgPADgUIABgHIAAgDQAAgKgFgGQgFgGgLAAIgOAAQgIAHgFAMg");
	this.shape_2.setTransform(208.8,54.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRA2IAVhqIAOAAIgWBqg");
	this.shape_3.setTransform(201.8,54.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjA2IADgKIAkAAQADgHACgJIALg0QABgGAAgDIgCgFQgCgCgDgBIgGgBIgKABIACgLQAGgBAIAAQAWAAgBASIgBAKIgLA1IgEANIgEAKIgBADg");
	this.shape_4.setTransform(195.7,54.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgjA2IADgKIAkAAQADgHACgJIALg0QABgGAAgDIgCgFQgBgCgDgBIgHgBIgKABIACgLQAGgBAJAAQAUAAAAASIgBAKIgLA1IgEANIgEAKIgBADg");
	this.shape_5.setTransform(188.4,54.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAkIANhGIAPAAIgNA3IgMAPg");
	this.shape_6.setTransform(183.8,52.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgvA2IAXhpQAPgCAVAAQAQAAAJAEQAHADACAGQACAEAAAEIgBAIIgRBOgAgJgpIgEAAIgSBVIAyAAIAOhCIABgFIAAgEIgCgDIgCgDIgDgCIgDgBIgEgBIgEAAIgIgBIgRABg");
	this.shape_7.setTransform(175.9,54.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag1AtIAhgFIgFhfIAPAAIACAwIABAsQAZgJALgkIAOgvIAOAAIgOAvQgGASgJAMIgIAJIgMAJIgOAHQgIADgKABIggAFg");
	this.shape_8.setTransform(161.2,54.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWBBIARgqIAZg2Ig3AAIAHghIANAAIgEAXIA3AAIgCAKIgaA2IgRAqg");
	this.shape_9.setTransform(153.2,53.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmA2IgEgBIACgMIAEABIAMABIAOAAQAHAAAFgCQAFgDAEgEQAEgEADgFQAGgLADgOQACgKAAgHQAAgLgDgFQgDgFgEgCQgEgDgGABQgHgBgEACQgFACgEACIgGAGQgFAHgCAIIgBAJQAAAFADACQADAGALABIADACIgEAKIgDgBQgOgCgHgJQgFgGAAgIIABgJQACgJAGgHQAFgIAGgEQAPgKAOAAQASAAAJANQAFAIAAAOQAAAJgCAMQgDAMgGALQgFAKgHAHQgPANgQAAQgPAAgMgBg");
	this.shape_10.setTransform(138.7,54.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgNAkIANhGIAPAAIgNA3IgMAPg");
	this.shape_11.setTransform(132.5,52.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag1AtIAhgFIgFhfIAPAAIACAwIABAsQAZgJALgkIAOgvIAOAAIgOAvQgGASgJAMIgIAJIgMAJIgOAHQgIADgKABIggAFg");
	this.shape_12.setTransform(120.3,54.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWBBIARgqIAZg2Ig3AAIAGghIAPAAIgFAXIA3AAIgCAKIgaA2IgRAqg");
	this.shape_13.setTransform(112.3,53.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRA2IAVhqIAOAAIgWBqg");
	this.shape_14.setTransform(105.1,54.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag0A2IADgMIAGABQAMAAACgOIAQhGIgMABIADgLQAWgDAQAAQAQAAAKAFQALAGAAAPIgBAIIgQBKIgOAAIAQhKIABgGIgBgFQgCgFgEgCQgHgEgMAAIgNAAIgOBFQgDANgHAIQgIAHgMAAIgIgBg");
	this.shape_15.setTransform(97.1,54.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRA2IAVhqIAOAAIgWBqg");
	this.shape_16.setTransform(85.9,54.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgcABIgGAAIACgLIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJgAgvA2IAPhDIAOAAIgPBDg");
	this.shape_17.setTransform(78.4,54.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgiA2IAEgNIALABQAGAAAIgEIAHgHIAGgJQADgGACgGIAHgiIABgHIgBgGQgBgDgDgBQgDgCgFAAIgKACIACgLQAGgCAIAAQAVAAAAATIgBAJIgRBQIgLAAIACgSIgBAAIgFAFIgGAHQgDADgGACQgFACgEAAIgMgBg");
	this.shape_18.setTransform(69.3,54.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgpA2IACgKIA0AAIANhAIABgIIgBgFIgCgEIgEgDQgFgCgHAAIgYABIgEAAIACgLIAegBQASAAAHAHQAFAFAAAJIgCANIgOA/IANAAIgDAKg");
	this.shape_19.setTransform(61.2,54.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgWBBIARgqIAZg2Ig3AAIAGghIAPAAIgFAXIA3AAIgCAKIgaA2IgRAqg");
	this.shape_20.setTransform(54.4,53.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag0A2IADgMIAGABQAMAAACgOIAQhGIgMABIADgLQAWgDAQAAQAQAAAJAFQAMAGAAAPIgBAIIgQBKIgOAAIAQhKIABgGIgBgFQgCgFgEgCQgHgEgMAAIgNAAIgOBFQgDANgHAIQgIAHgMAAIgIgBg");
	this.shape_21.setTransform(43.2,54.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag7A2IAOhqIAOAAIgIA6IAMgDQANgDAHgUIAJggIANAAIgIAcQgGASgIAJQgEADgGAEQgFADgHABIgMADIgCAaIAYAAQAQAAANgMQAHgFAFgLQAHgJADgMIAPguIANAAIgOAuQgFATgLANIgJALIgMAJQgGADgIACQgJACgJABg");
	this.shape_22.setTransform(28.5,54.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOAkIAPhGIANAAIgMA3IgNAPg");
	this.shape_23.setTransform(20.5,52.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgEA2IADgKIAVAAIAOg9IABgHQAAgHgCgDQgFgIgMAAIgIACIgHADIgIAHIgBABIgaBTIgOAAIAZhRIABgJIAAgLIgBgFIANAAQACAEAAAHIAAAAQAIgIAMgDIAMgBQAPAAAGAJQAEAGAAAIIgCAMIgPBIg");
	this.shape_24.setTransform(12.5,54.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgRA2IAVhqIAOAAIgWBqg");
	this.shape_25.setTransform(5.9,54.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag7A2IAOhqIAOAAIgIA6IAMgDQAOgDAFgUIAJggIAPAAIgJAcQgGASgJAJQgDADgGAEQgFADgHABIgMADIgDAaIAZAAQARAAAMgMQAHgFAGgLQAFgJAFgMIANguIAOAAIgOAuQgGATgKANIgJALIgMAJQgGADgIACQgJACgKABg");
	this.shape_26.setTransform(-1.7,54.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHAJQgCgCAAgEQAAgGADgEQAEgDAEAAQAEAAACACQACACAAAFQAAAEgDAEQgDAEgFAAQgEAAgCgCg");
	this.shape_27.setTransform(-11.3,59);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgcA2IgIgBIgCgBIACgNQAKAEANAAQAHAAAGgDQAFgDADgDIAHgJQAEgIABgIIAEgQIABgNQAAgGgBgEIgEgGQgCgDgEgCQgEgBgGAAIgMABIgIACIgDABIADgMIAKgDIANgBQAHAAAGABQAFACAEADQADACACAEQAFAJAAAMIgBANIgEARIgBAEIgCAHIgEAJIgHAJIgJAJQgFADgGADQgIACgHAAIgNgBg");
	this.shape_28.setTransform(230,27.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAOA2IgPgtIgJgSQgEABgBABQgKAHgDANIgIApIgOAAIAHgjIADgKIADgJIAGgIQACgDAFgDIAKgFIgNgiIAPAAIAPAqIAKAVQAGgEAEgGQAEgEABgJIAJgoIAOAAIgIAjQgEASgGAIQgDADgEADQgEADgGACIAOAjg");
	this.shape_29.setTransform(221.7,27.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgTBKIAYhzQABgKAAgHIAAgPIANAAIABAIIAAAIQAAAJgCAHIgXBzg");
	this.shape_30.setTransform(214.5,29.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag0A2IADgMIAGABQAMAAADgOIAPhGIgMABIADgLQAWgDAQAAQAQAAAKAFQALAGAAAPIgBAIIgQBKIgOAAIAQhKIABgGIgBgFQgCgFgDgCQgIgEgMAAIgNAAIgOBFQgDANgIAIQgHAHgMAAIgIgBg");
	this.shape_31.setTransform(202.8,27.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgRA2IAVhrIAOAAIgWBrg");
	this.shape_32.setTransform(196,27.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgcA2IgIgBIgCgBIACgNQAKAEANAAQAHAAAGgDQAFgDADgDIAHgJQAEgIABgIIAEgQIABgNQAAgGgBgEIgEgGQgCgDgEgCQgEgBgGAAIgMABIgIACIgDABIADgMIAKgDIANgBQAHAAAGABQAFACAEADQADACACAEQAFAJAAAMIgBANIgEARIgBAEIgCAHIgEAJIgHAJIgJAJQgFADgGADQgIACgHAAIgNgBg");
	this.shape_33.setTransform(189.6,27.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgXBBIASgqIAZg2Ig3AAIAGggIAPAAIgFAVIA3AAIgCALIgaA2IgQAqg");
	this.shape_34.setTransform(183.3,26.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgRA2IAVhrIAOAAIgWBrg");
	this.shape_35.setTransform(176.1,27.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgXBBIASgqIAZg2Ig3AAIAGggIAOAAIgEAVIA3AAIgCALIgaA2IgQAqg");
	this.shape_36.setTransform(166.7,26.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgEA2IADgKIAVAAIAOg9IABgHQAAgHgCgDQgFgIgMAAIgIACIgHADIgIAHIgBABIgaBTIgOAAIAZhRIABgJIAAgLIgBgFIANAAQACAEAAAHIAAAAQAIgIAMgDIAMgBQAPAAAGAJQAEAGAAAIIgCAMIgPBIg");
	this.shape_37.setTransform(155.9,27.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgyA2IACgLIAuAAIARABIgSgmIgZg6IAQAAIATAzIACADQAIgDAFgJQAFgJAFgOIAGgUIANAAIgGAVIgCAFIgDAJIgDAHIgDAFIgEAFIgFAEQgFAFgGADIAQAgIgDALg");
	this.shape_38.setTransform(146.6,27.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgRA2IAVhrIAOAAIgWBrg");
	this.shape_39.setTransform(140,27.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAOA2IgPgtIgJgSQgEABgBABQgKAHgDANIgIApIgOAAIAHgjIADgKIADgJIAGgIQACgDAFgDIAKgFIgNgiIAPAAIAPAqIAKAVQAGgEAEgGQAEgEABgJIAJgoIAOAAIgIAjQgEASgGAIQgDADgEADQgEADgGACIAOAjg");
	this.shape_40.setTransform(133.1,27.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag2BKIAWhoIANAAIgVBogAgFAhIAAgDIAFgQIAHgOIALgWIAVgoIhAAAIACgLIBOAAIgDALIgVAqIgQAgQgHAOAAAEIgBADg");
	this.shape_41.setTransform(119.2,29.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgNAkIANhHIAOAAIgLA4IgOAPg");
	this.shape_42.setTransform(112.9,25.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag7A2IAOhrIAOAAIgIA8IAMgFQAOgDAFgSIAJgiIAPAAIgJAcQgGAUgJAHQgDAFgGADQgFACgHACIgMADIgDAaIAZAAQARAAAMgMQAHgGAGgJQAFgKAFgMIANgvIAOAAIgOAvQgGASgKAOIgJAKIgMAKQgGADgIADQgJACgKAAg");
	this.shape_43.setTransform(104.9,27.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgRA2IAVhrIAOAAIgWBrg");
	this.shape_44.setTransform(96.3,27.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAA2IAQhKIAAgEIAAgEIgBgEIgDgEIgEgDIgFgCIgNgBIgTABIACgMIAVAAIAOABQAGABAFACQAFADACAEQAEAGAAAIIgBAJIgQBJg");
	this.shape_45.setTransform(90.5,27.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgOAkIAPhHIANAAIgLA4IgOAPg");
	this.shape_46.setTransform(84.7,25.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgvA2IAXhpQAPgCAVAAQAQAAAIAEQAIADACAGQACAEAAAEIAAAIIgRBOgAgKgpIgCAAIgSBVIAxAAIAOhCIABgFIgBgEIgBgDIgCgDIgDgCIgDgBIgDgBIgFAAIgJgBIgRABg");
	this.shape_47.setTransform(76.9,27.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgXBBIASgqIAZg2Ig3AAIAGggIAOAAIgEAVIA3AAIgCALIgaA2IgQAqg");
	this.shape_48.setTransform(64.6,26.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAOA2IgPgtIgJgSIgFACQgKAHgDANIgIApIgOAAIAHgjIADgKIADgJIAGgIQACgDAFgDIAKgFIgNgiIAPAAIAPAqIAKAVQAGgEAEgGQAEgEABgJIAJgoIAOAAIgIAjQgEASgGAIQgDADgEADQgEADgGACIAOAjg");
	this.shape_49.setTransform(54.5,27.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag0A2IADgMIAGABQAMAAADgOIAPhGIgMABIADgLQAWgDAQAAQAQAAAKAFQALAGAAAPIgBAIIgQBKIgOAAIAQhKIAAgGIAAgFQgBgFgEgCQgIgEgMAAIgNAAIgOBFQgDANgIAIQgHAHgMAAIgIgBg");
	this.shape_50.setTransform(43.8,27.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAAA2IAQhKIAAgEIAAgEIgBgEIgDgEIgEgDIgFgCIgNgBIgTABIACgMIAVAAIAOABQAGABAFACQAFADACAEQAEAGAAAIIgBAJIgQBJg");
	this.shape_51.setTransform(35.3,27.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgNAkIANhHIAPAAIgMA4IgNAPg");
	this.shape_52.setTransform(29.5,25.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgvA2IAXhpQAPgCAVAAQAQAAAIAEQAIADACAGQACAEAAAEIgBAIIgRBOgAgJgpIgDAAIgSBVIAxAAIAOhCIABgFIAAgEIgCgDIgCgDIgDgCIgDgBIgEgBIgEAAIgIgBIgRABg");
	this.shape_53.setTransform(21.7,27.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgEA2IADgKIAVAAIAOg9IABgHQAAgHgCgDQgFgIgMAAIgIACIgHADIgIAHIgBABIgaBTIgOAAIAZhRIABgJIAAgLIgBgFIANAAQACAEAAAHIAAAAQAIgIAMgDIAMgBQAPAAAGAJQAEAGAAAIIgCAMIgPBIg");
	this.shape_54.setTransform(6.7,27.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgRA2IAVhrIAOAAIgWBrg");
	this.shape_55.setTransform(0.1,27.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgEA2IADgKIAVAAIAOg9IABgHQAAgHgCgDQgFgIgMAAIgIACIgHADIgIAHIgBABIgaBTIgOAAIAZhRIABgJIAAgLIgBgFIANAAQACAEAAAHIAAAAQAIgIAMgDIAMgBQAPAAAGAJQAEAGAAAIIgCAMIgPBIg");
	this.shape_56.setTransform(-7.6,27.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgXBBIASgqIAZg2Ig3AAIAGggIAOAAIgEAVIA3AAIgCALIgaA2IgQAqg");
	this.shape_57.setTransform(-15.1,26.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgyA2IACgLIAtAAIASABIgSgmIgZg6IAPAAIAVAzIACADQAGgDAGgJQAFgJAEgOIAHgUIANAAIgGAVIgBAFIgEAJIgDAHIgDAFIgEAFIgEAEQgGAFgGADIAQAgIgCALg");
	this.shape_58.setTransform(-25,27.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgOAkIAOhHIAPAAIgNA4IgMAPg");
	this.shape_59.setTransform(-31,25.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgvA2IAXhpQAPgCAVAAQAQAAAJAEQAHADACAGQACAEAAAEIgBAIIgRBOgAgJgpIgEAAIgSBVIAyAAIAOhCIABgFIAAgEIgCgDIgCgDIgCgCIgEgBIgEgBIgEAAIgIgBIgRABg");
	this.shape_60.setTransform(-38.8,27.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgWBBIARgqIAZg2Ig3AAIAHggIANAAIgEAVIA3AAIgCALIgaA2IgRAqg");
	this.shape_61.setTransform(-51.1,26.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ag7A2IAOhrIAOAAIgIA8IAMgFQANgDAHgSIAJgiIANAAIgIAcQgGAUgIAHQgFAFgFADQgGACgGACIgMADIgCAaIAYAAQAQAAANgMQAHgGAFgJQAHgKADgMIAPgvIANAAIgOAvQgFASgLAOIgJAKIgMAKQgHADgHADQgJACgKAAg");
	this.shape_62.setTransform(-61.9,27.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgOAkIAPhHIANAAIgMA4IgMAPg");
	this.shape_63.setTransform(-69.9,25.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgEA2IADgKIAVAAIAOg9IABgHQAAgHgCgDQgFgIgMAAIgIACIgHADIgIAHIgBABIgaBTIgOAAIAZhRIABgJIAAgLIgBgFIANAAQACAEAAAHIAAAAQAIgIAMgDIAMgBQAPAAAGAJQAEAGAAAIIgCAMIgPBIg");
	this.shape_64.setTransform(-77.9,27.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgRA2IAVhrIAOAAIgWBrg");
	this.shape_65.setTransform(-84.5,27.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ag7A2IAOhrIAOAAIgIA8IAMgFQAOgDAFgSIAJgiIAPAAIgJAcQgGAUgJAHQgEAFgFADQgGACgGACIgLADIgEAaIAZAAQARAAAMgMQAHgGAGgJQAFgKAFgMIANgvIAOAAIgOAvQgGASgJAOIgKAKIgMAKQgGADgIADQgJACgKAAg");
	this.shape_66.setTransform(-92.1,27.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgQAVIAQgpIAQAAIABACQgKASgMAVg");
	this.shape_67.setTransform(-102,32.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgOAjIAPhGIANAAIgMA4IgMAOg");
	this.shape_68.setTransform(233,-1.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("Ag7A1IAOhqIAOAAIgIA7IAMgDQANgEAHgTIAJghIANAAIgIAcQgGAUgIAIQgFADgFADQgFAEgHABIgLADIgDAaIAYAAQAQAAANgLQAHgHAGgKQAFgJAEgMIAPgvIANAAIgOAvQgFASgKAOIgKAKIgMAJQgGAEgIADQgJABgJAAg");
	this.shape_69.setTransform(225,0.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgWBAIARgpIAZg2Ig3AAIAGggIAPAAIgFAVIA3AAIgCALIgaA2IgRApg");
	this.shape_70.setTransform(211.1,-0.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgcABIgGAAIACgLIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJgAgvA2IAPhDIAOAAIgPBDg");
	this.shape_71.setTransform(200.4,0.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("Ag7A1IAOhqIAOAAIgIA7IAMgDQAOgEAGgTIAIghIAPAAIgJAcQgGAUgIAIQgEADgGADQgFAEgHABIgMADIgDAaIAZAAQAQAAANgLQAHgHAFgKQAGgJAFgMIANgvIAOAAIgOAvQgGASgKAOIgJAKIgMAJQgHAEgHADQgJABgKAAg");
	this.shape_72.setTransform(189.9,0.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("Ag0A2IACgMIAHABQAMAAADgOIAPhGIgMABIACgLQAXgDAQAAQAQAAAKAFQALAGAAAPIgBAIIgQBKIgOAAIAQhKIAAgGIAAgFQgBgFgEgCQgIgEgMAAIgNAAIgOBFQgDANgIAIQgHAHgMAAIgIgBg");
	this.shape_73.setTransform(177.3,0.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgEA2IADgKIAVAAIAOg9IABgHQAAgHgCgDQgFgIgMAAIgIACIgHADIgIAHIgBABIgaBTIgOAAIAZhRIABgJIAAgLIgBgFIANAAQACAEAAAHIAAAAQAIgIAMgDIAMgBQAPAAAGAJQAEAGAAAIIgCAMIgPBIg");
	this.shape_74.setTransform(166.9,0.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ag7A1IAOhqIAOAAIgIA7IAMgDQANgEAHgTIAJghIANAAIgIAcQgGAUgIAIQgEADgGADQgFAEgHABIgLADIgDAaIAYAAQAQAAANgLQAHgHAFgKQAHgJADgMIAPgvIANAAIgOAvQgFASgKAOIgKAKIgMAJQgGAEgIADQgJABgJAAg");
	this.shape_75.setTransform(156.7,0.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgpA2IACgKIA0AAIANhAIABgIIgBgFIgCgEIgEgDQgFgCgHAAIgYABIgEAAIACgLIAegBQASAAAHAHQAFAFAAAJIgCANIgOA/IANAAIgDAKg");
	this.shape_76.setTransform(140.5,0.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgUABIgVBfIgOAAIAXhqIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJg");
	this.shape_77.setTransform(131.1,0.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgRA1IAVhqIAOAAIgWBqg");
	this.shape_78.setTransform(124.2,0.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEA2IADgKIAVAAIAOg9IABgHQAAgHgCgDQgFgIgMAAIgIACIgHADIgIAHIgBABIgaBTIgOAAIAZhRIABgJIAAgLIgBgFIANAAQACAEAAAHIAAAAQAIgIAMgDIAMgBQAPAAAGAJQAEAGAAAIIgCAMIgPBIg");
	this.shape_79.setTransform(116.5,0.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAAA2IAQhKIAAgEIAAgEIgBgEIgDgEIgEgDIgFgCIgNgBIgTABIACgMIAVAAIAOABQAGABAFACQAFADACAEQAEAGAAAIIgBAJIgQBJg");
	this.shape_80.setTransform(108.2,0.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgNAjIANhGIAPAAIgMA4IgOAOg");
	this.shape_81.setTransform(102.4,-1.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgvA2IAXhpQAPgCAVAAQAQAAAIAEQAIADACAGQACAEAAAEIgBAIIgRBOgAgJgpIgDAAIgSBVIAxAAIAOhCIABgFIAAgEIgCgDIgCgDIgDgCIgDgBIgEgBIgEAAIgIgBIgRABg");
	this.shape_82.setTransform(94.6,0.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgEA2IADgKIAVAAIAOg9IABgHQAAgHgCgDQgFgIgMAAIgIACIgHADIgIAHIgBABIgaBTIgOAAIAZhRIABgJIAAgLIgBgFIANAAQACAEAAAHIAAAAQAIgIAMgDIAMgBQAPAAAGAJQAEAGAAAIIgCAMIgPBIg");
	this.shape_83.setTransform(79.6,0.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgcABIgGAAIACgLIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJgAgvA2IAPhDIAOAAIgPBDg");
	this.shape_84.setTransform(69.5,0.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAOA1IgPgsIgJgSIgFACQgKAHgDAOIgIAnIgOAAIAHgjIADgJIADgJIAGgIQACgDAFgDIAKgFIgNgiIAPAAIAPAqIAKAUQAGgDAEgGQAEgEABgJIAJgoIAOAAIgIAjQgEASgGAHQgDAEgEADQgEAEgGABIAOAig");
	this.shape_85.setTransform(59.7,0.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgNAjIAOhGIANAAIgLA4IgOAOg");
	this.shape_86.setTransform(53.6,-1.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgiA2IACgKIAkAAQADgHACgJIALg0QACgGgBgDIgCgFQgBgCgEgBIgFgBIgLABIACgLQAGgBAIAAQAWAAAAASIgCAKIgMA1IgDANIgDAKIgCADg");
	this.shape_87.setTransform(47.1,0.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgaA0QgHgDgFgHQgFgJAAgOQAAgIADgLIALg1IAOAAIgMA1QgBALgBAHQAAALADAFQADAEAEADQAFADAFgBQAHABAFgDQAFgDAEgEQADgDADgGQAIgPAEgUIAAgKIgBgJIgEgIQgDgFgMgBIgKABIABgLIANgBQAIAAAGADQAHADAEAHQAFAIAAANQAAAKgCALQgDANgGALQgGAKgGAHQgIAGgHAEQgIADgJAAQgJAAgGgDg");
	this.shape_88.setTransform(39,0.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAAA2IAQhKIAAgEIAAgEIgBgEIgDgEIgEgDIgFgCIgNgBIgTABIACgMIAVAAIAOABQAGABAFACQAFADACAEQAEAGAAAIIgBAJIgQBJg");
	this.shape_89.setTransform(29.7,0.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgiA2IACgKIAkAAQADgHACgJIALg0QABgGAAgDIgCgFQgCgCgDgBIgFgBIgLABIACgLQAGgBAIAAQAWAAAAASIgCAKIgMA1IgDANIgEAKIgBADg");
	this.shape_90.setTransform(21.3,0.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgaA0QgHgDgEgHQgGgJAAgOQAAgIACgLIAMg1IAOAAIgMA1QgBALAAAHQAAALACAFQADAEAEADQAFADAFgBQAHABAEgDQAGgDADgEQAFgDACgGQAJgPACgUIABgKIgBgJIgDgIQgEgFgMgBIgKABIABgLIANgBQAIAAAGADQAHADAEAHQAFAIAAANQAAAKgCALQgDANgGALQgFAKgIAHQgHAGgHAEQgIADgIAAQgKAAgGgDg");
	this.shape_91.setTransform(13.1,0.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgpA2IACgKIA0AAIANhAIABgIIgBgFIgCgEIgEgDQgFgCgHAAIgYABIgEAAIACgLIAegBQASAAAHAHQAFAFAAAJIgCANIgOA/IANAAIgDAKg");
	this.shape_92.setTransform(-1.9,0.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgyA2IACgLIAuAAIARABIgSgmIgZg6IAQAAIATAzIACADQAIgDAFgJQAFgJAFgOIAFgUIAOAAIgGAVIgCAFIgDAJIgDAHIgDAFIgEAFIgFAEQgFAFgGADIAQAgIgDALg");
	this.shape_93.setTransform(-10.5,0.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgRA1IAVhqIAOAAIgWBqg");
	this.shape_94.setTransform(-17.2,0.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAAA2IAQhKIAAgEIAAgEIgBgEIgDgEIgEgDIgFgCIgNgBIgTABIACgMIAVAAIAOABQAGABAFACQAFADACAEQAEAGAAAIIgBAJIgQBJg");
	this.shape_95.setTransform(-23,0.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgcABIgGAAIACgLIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJgAgvA2IAPhDIAOAAIgPBDg");
	this.shape_96.setTransform(-32.9,0.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgjA2IADgKIAkAAQADgHACgJIALg0QACgGgBgDIgCgFQgBgCgDgBIgHgBIgKABIACgLQAGgBAJAAQAUAAAAASIgBAKIgLA1IgEANIgDAKIgCADg");
	this.shape_97.setTransform(-46.3,0.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgcA2IgIgBIgCgBIACgMQAKADANAAQAHAAAGgCQAFgDADgFIAHgIQAEgIABgJIAEgPIABgNQAAgGgBgEIgEgHQgCgCgEgBQgEgCgGAAIgMABIgIACIgDABIADgMIAKgDIANgBQAHAAAGABQAFACAEADQADADACAEQAFAHAAANIgBAMIgEASIgBAFIgCAHIgEAJIgHAJIgJAIQgFADgGADQgIACgHAAIgNgBg");
	this.shape_98.setTransform(-53.9,0.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgRA1IAVhqIAOAAIgWBqg");
	this.shape_99.setTransform(-59.3,0.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgiA2IACgKIAkAAQADgHACgJIALg0QACgGgBgDIgCgFQgBgCgEgBIgFgBIgLABIACgLQAGgBAIAAQAWAAAAASIgCAKIgMA1IgDANIgDAKIgCADg");
	this.shape_100.setTransform(-65.4,0.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgcABIgGAAIACgLIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJgAgvA2IAPhDIAOAAIgPBDg");
	this.shape_101.setTransform(-74.1,0.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgRA1IAVhqIAOAAIgWBqg");
	this.shape_102.setTransform(-85.5,0.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgpA2IACgKIA0AAIANhAIABgIIgBgFIgCgEIgEgDQgFgCgHAAIgYABIgEAAIACgLIAegBQASAAAHAHQAFAFAAAJIgCANIgOA/IANAAIgDAKg");
	this.shape_103.setTransform(-92.7,0.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgaA0QgHgDgFgHQgFgJAAgOQAAgIACgLIALg1IAPAAIgLA1QgCALgBAHQABALADAFQACAEAEADQAEADAHgBQAGABAEgDQAGgDADgEQAFgDADgGQAHgPADgUIABgKIgBgJIgDgIQgFgFgKgBIgLABIABgLIANgBQAIAAAHADQAGADAEAHQAFAIAAANQAAAKgDALQgCANgGALQgGAKgHAHQgHAGgIAEQgHADgJAAQgIAAgHgDg");
	this.shape_104.setTransform(-101.5,0.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgRA1IAVhqIAOAAIgWBqg");
	this.shape_105.setTransform(-109,0.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgUABIgVBfIgOAAIAXhqIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJg");
	this.shape_106.setTransform(-116.5,0.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgcABIgGAAIACgLIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJgAgvA2IAPhDIAOAAIgPBDg");
	this.shape_107.setTransform(-127,0.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgHAJQgCgCAAgEQAAgGADgEQAEgDAEAAQAEAAACACQACACAAAFQAAAEgDAEQgDAEgFAAQgEAAgCgCg");
	this.shape_108.setTransform(-134.8,4.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgpA2IACgKIA0AAIANhAIABgIIgBgFIgCgEIgEgDQgFgCgHAAIgYABIgEAAIACgLIAegBQASAAAHAHQAFAFAAAJIgCANIgOA/IANAAIgDAKg");
	this.shape_109.setTransform(229.2,-27);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAOA2IgPgtIgJgSIgFADQgKAFgDAOIgIApIgOAAIAHgjIADgKIADgJIAGgHQACgEAFgDIAKgFIgNghIAPAAIAPApIAKAVQAGgEAEgGQAEgEABgJIAJgnIAOAAIgIAiQgEASgGAHQgDAEgEADQgEADgGACIAOAjg");
	this.shape_110.setTransform(220.4,-26.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgOAkIAPhGIANAAIgLA3IgOAPg");
	this.shape_111.setTransform(214.3,-28.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgiA2IACgKIAkAAQADgHACgJIALg0QACgGgBgDIgCgFQgCgCgCgBIgGgBIgLABIACgLQAGgBAJAAQAUAAABASIgCAKIgMA1IgDANIgDAKIgCADg");
	this.shape_112.setTransform(207.9,-27);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgaA0QgHgDgFgHQgFgJAAgNQAAgJADgLIAKg0IAPAAIgMA0QgCALAAAHQAAALADAFQADAEAEADQAFACAFAAQAHAAAFgCQAFgDAEgEQADgEADgFQAIgPAEgUIAAgLIgBgJIgEgHQgEgFgKAAIgLAAIABgLIANgBQAIAAAHADQAGADAEAHQAFAIAAANQAAAJgDAMQgCANgGALQgGAKgGAHQgHAGgIAEQgIADgJAAQgJAAgGgDg");
	this.shape_113.setTransform(199.7,-26.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAAA2IAQhKIAAgEIAAgEIgBgEIgDgEIgEgDIgFgCIgNgBIgTABIACgMIAVAAIAOABQAGABAFACQAFADACAEQAEAGAAAIIgBAJIgQBJg");
	this.shape_114.setTransform(190.5,-27);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgiA2IACgKIAkAAQADgHACgJIALg0QACgGgBgDIgCgFQgBgCgEgBIgFgBIgLABIACgLQAGgBAIAAQAWAAAAASIgCAKIgMA1IgDANIgEAKIgBADg");
	this.shape_115.setTransform(182,-27);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgaA0QgHgDgEgHQgGgJAAgNQAAgJADgLIALg0IAOAAIgMA0QgBALAAAHQAAALACAFQADAEAEADQAFACAFAAQAHAAAEgCQAGgDADgEQAFgEACgFQAJgPACgUIABgLIgBgJIgEgHQgDgFgMAAIgKAAIABgLIANgBQAIAAAGADQAHADAEAHQAFAIAAANQAAAJgCAMQgDANgGALQgFAKgIAHQgHAGgHAEQgIADgIAAQgKAAgGgDg");
	this.shape_116.setTransform(173.9,-26.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgcABIgGAAIACgLIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJgAgvA2IAPhDIAOAAIgPBDg");
	this.shape_117.setTransform(158.5,-27);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgcA3IgIgCIgCgBIACgNQAKAEANAAQAHAAAGgDQAFgCADgFIAHgIQAEgIABgIIAEgPIABgPQAAgFgBgEIgEgHQgCgCgEgCQgEgBgGAAIgMABIgIACIgDABIADgMIAKgDIANgBQAHAAAGACQAFABAEADQADADACAEQAFAHAAANIgBANIgEARIgBAEIgCAIIgEAJIgHAJIgJAIQgFAEgGACQgIACgHAAIgNAAg");
	this.shape_118.setTransform(149.2,-26.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgRA2IAVhqIAOAAIgWBqg");
	this.shape_119.setTransform(143.8,-26.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgXBBIASgqIAZg2Ig3AAIAGghIAOAAIgEAXIA3AAIgCAKIgaA2IgQAqg");
	this.shape_120.setTransform(138.8,-28);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgYA2IAOg/QABgFADgHIAGgJQAEgHAFgDIABgBIAAgBIgYAAIABgKIAlAAIgCAKIgEADIgGAHIgFAJIgEAOIgNA/g");
	this.shape_121.setTransform(127.6,-26.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgEA2IADgKIAVAAIAOg9IABgHQAAgHgCgDQgFgIgMAAIgIACIgHADIgIAHIgBABIgaBTIgOAAIAZhRIABgJIAAgLIgBgFIANAAQACAEAAAHIAAAAQAIgIAMgDIAMgBQAPAAAGAJQAEAGAAAIIgCAMIgPBIg");
	this.shape_122.setTransform(118.5,-27);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgOAkIAOhGIAPAAIgNA3IgMAPg");
	this.shape_123.setTransform(112.6,-28.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgTBKIAXhyQACgKAAgIIgBgPIAOAAIABAIIAAAIQAAAIgCAJIgXByg");
	this.shape_124.setTransform(107.7,-24.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgpA2IACgKIA0AAIANhAIABgIIgBgFIgCgEIgEgDQgFgCgHAAIgYABIgEAAIACgLIAegBQASAAAHAHQAFAFAAAJIgCANIgOA/IANAAIgDAKg");
	this.shape_125.setTransform(96.8,-27);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("Ag2BKIAWhoIANAAIgVBogAgFAhIAAgDIAFgQIAHgPIALgVIAVgpIhAAAIACgKIBOAAIgDAKIgVArIgQAhQgHAOAAADIgBADg");
	this.shape_126.setTransform(88.1,-24.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgWBBIARgqIAZg2Ig3AAIAHghIANAAIgEAXIA3AAIgCAKIgaA2IgRAqg");
	this.shape_127.setTransform(80.3,-28);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgRA2IAVhqIAOAAIgWBqg");
	this.shape_128.setTransform(73.1,-26.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("Ag0A2IADgMIAGABQAMAAACgOIAQhGIgMABIADgLQAWgDAQAAQAQAAAKAFQALAGAAAPIgBAIIgQBKIgOAAIAQhKIABgGIgBgFQgCgFgDgCQgIgEgMAAIgNAAIgOBFQgDANgIAIQgHAHgMAAIgIgBg");
	this.shape_129.setTransform(65.1,-26.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgQAVIAQgpIAQAAIABACQgKASgMAVg");
	this.shape_130.setTransform(57,-21.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAOA2IgPgtIgJgSIgFADQgKAFgDAOIgIApIgOAAIAHgjIADgKIADgJIAGgHQACgEAFgDIAKgFIgNghIAPAAIAPApIAKAVQAGgEAEgGQAEgEABgJIAJgnIAOAAIgIAiQgEASgGAHQgDAEgEADQgEADgGACIAOAjg");
	this.shape_131.setTransform(46.9,-26.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgGBLIAUhlQACgHAAgHQAAgFgCgFIgDgGQgDgDgEgBQgEgCgFAAIgMABIgJACIgDABIADgMIAKgDIAPgBQAGAAAFACQAGABADADQAEADACAEQAFAIAAAMIgBANIgXBng");
	this.shape_132.setTransform(38.4,-24.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgWBBIARgqIAZg2Ig3AAIAHghIAOAAIgFAXIA3AAIgCAKIgaA2IgRAqg");
	this.shape_133.setTransform(26.8,-28);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAOA2IgPgtIgJgSIgFADQgKAFgDAOIgIApIgOAAIAHgjIADgKIADgJIAGgHQACgEAFgDIAKgFIgNghIAPAAIAPApIAKAVQAGgEAEgGQAEgEABgJIAJgnIAOAAIgIAiQgEASgGAHQgDAEgEADQgEADgGACIAOAjg");
	this.shape_134.setTransform(16.8,-26.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgpA2IACgKIA0AAIANhAIABgIIgBgFIgCgEIgEgDQgFgCgHAAIgYABIgEAAIACgLIAegBQASAAAHAHQAFAFAAAJIgCANIgOA/IANAAIgDAKg");
	this.shape_135.setTransform(2.5,-27);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgcABIgGAAIACgLIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJgAgvA2IAPhDIAOAAIgPBDg");
	this.shape_136.setTransform(-6.9,-27);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgcA3IgIgCIgCgBIACgNQAKAEANAAQAHAAAGgDQAFgCADgFIAHgIQAEgIABgIIAEgPIABgPQAAgFgBgEIgEgHQgCgCgEgCQgEgBgGAAIgMABIgIACIgDABIADgMIAKgDIANgBQAHAAAGACQAFABAEADQADADACAEQAFAHAAANIgBANIgEARIgBAEIgCAIIgEAJIgHAJIgJAIQgFAEgGACQgIACgHAAIgNAAg");
	this.shape_137.setTransform(-16.2,-26.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgRA2IAVhqIAOAAIgWBqg");
	this.shape_138.setTransform(-21.6,-26.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgXBBIASgqIAZg2Ig3AAIAHghIANAAIgEAXIA3AAIgCAKIgaA2IgQAqg");
	this.shape_139.setTransform(-26.6,-28);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgEA2IADgKIAVAAIAOg9IABgHQAAgHgCgDQgFgIgMAAIgIACIgHADIgIAHIgBABIgaBTIgOAAIAZhRIABgJIAAgLIgBgFIANAAQACAEAAAHIAAAAQAIgIAMgDIAMgBQAPAAAGAJQAEAGAAAIIgCAMIgPBIg");
	this.shape_140.setTransform(-41.8,-27);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgRA2IAVhqIAOAAIgWBqg");
	this.shape_141.setTransform(-48.4,-26.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("Ag0A2IACgMIAHABQAMAAADgOIAPhGIgMABIACgLQAXgDAQAAQAQAAAJAFQAMAGAAAPIgBAIIgQBKIgOAAIAQhKIAAgGIAAgFQgCgFgEgCQgHgEgMAAIgNAAIgOBFQgDANgIAIQgHAHgMAAIgIgBg");
	this.shape_142.setTransform(-56.4,-26.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAAA2IAQhKIAAgEIAAgEIgBgEIgDgEIgEgDIgFgCIgNgBIgTABIACgMIAVAAIAOABQAGABAFACQAFADACAEQAEAGAAAIIgBAJIgQBJg");
	this.shape_143.setTransform(-64.9,-27);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgXBBIASgqIAZg2Ig3AAIAHghIANAAIgEAXIA3AAIgCAKIgaA2IgQAqg");
	this.shape_144.setTransform(-76.6,-28);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgcABIgGAAIACgLIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJgAgvA2IAPhDIAOAAIgPBDg");
	this.shape_145.setTransform(-87.3,-27);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("Ag7A2IAOhqIAOAAIgIA6IAMgDQAOgDAFgUIAJggIAOAAIgIAcQgGASgJAJQgEADgFAEQgGADgGABIgLADIgEAaIAZAAQARAAAMgMQAHgFAGgLQAGgJAEgMIANguIAOAAIgOAuQgGATgJANIgKALIgMAJQgHADgHACQgJACgJABg");
	this.shape_146.setTransform(-97.8,-26.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("Ag0A2IADgMIAGABQAMAAACgOIAQhGIgMABIADgLQAWgDAQAAQAQAAAKAFQALAGAAAPIgBAIIgQBKIgOAAIAQhKIABgGIgBgFQgCgFgDgCQgIgEgMAAIgNAAIgOBFQgDANgIAIQgHAHgMAAIgIgBg");
	this.shape_147.setTransform(-110.4,-26.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgEA2IADgKIAVAAIAOg9IABgHQAAgHgCgDQgFgIgMAAIgIACIgHADIgIAHIgBABIgaBTIgOAAIAZhRIABgJIAAgLIgBgFIANAAQACAEAAAHIAAAAQAIgIAMgDIAMgBQAPAAAGAJQAEAGAAAIIgCAMIgPBIg");
	this.shape_148.setTransform(-120.8,-27);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("Ag7A2IAOhqIAOAAIgIA6IAMgDQAOgDAFgUIAJggIAPAAIgJAcQgGASgJAJQgDADgGAEQgFADgHABIgMADIgDAaIAZAAQAQAAANgMQAHgFAFgLQAGgJAFgMIANguIAOAAIgOAuQgGATgKANIgJALIgMAJQgHADgHACQgJACgKABg");
	this.shape_149.setTransform(-131,-26.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgpA2IACgKIA0AAIANhAIABgIIgBgFIgCgEIgEgDQgFgCgHAAIgYABIgEAAIACgLIAegBQASAAAHAHQAFAFAAAJIgCANIgOA/IANAAIgDAKg");
	this.shape_150.setTransform(-147.2,-27);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAOA2IgPgtIgJgSIgFADQgKAFgDAOIgIApIgOAAIAHgjIADgKIADgJIAGgHQACgEAFgDIAKgFIgNghIAPAAIAPApIAKAVQAGgEAEgGQAEgEABgJIAJgnIAOAAIgIAiQgEASgGAHQgDAEgEADQgEADgGACIAOAjg");
	this.shape_151.setTransform(-155.9,-26.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgRA2IAVhqIAOAAIgWBqg");
	this.shape_152.setTransform(-162.7,-26.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgmA2IgEgBIACgMIAEABIAMABIAOAAQAHAAAFgCQAFgDAEgEQAEgEADgFQAGgLADgOQACgKAAgHQAAgLgDgFQgDgFgEgCQgEgDgGABQgHgBgEACQgFACgEACIgGAGQgFAHgCAIIgBAJQAAAFADACQADAGALABIADACIgEAKIgDgBQgOgCgHgJQgFgGAAgIIABgJQACgJAGgHQAFgIAGgEQAPgKAOAAQASAAAJANQAFAIAAAOQAAAJgCAMQgDAMgGALQgFAKgHAHQgPANgQAAQgPAAgMgBg");
	this.shape_153.setTransform(-169.6,-26.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgTBKIAXhyQACgKABgIIgCgPIAOAAIABAIIAAAIQAAAIgCAJIgYByg");
	this.shape_154.setTransform(-177,-24.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AARA2IAQhKIABgEIgBgEIgBgEIgDgEIgEgDIgFgCIgMgBIgUABIgVBfIgOAAIAXhqIAjgBQAZAAAIALQAEAGAAAIIgBAJIgQBJg");
	this.shape_155.setTransform(-188.2,-27);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgRA2IAVhqIAOAAIgWBqg");
	this.shape_156.setTransform(-195.2,-26.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgmA2IgEgBIACgMIAEABIAMABIAOAAQAHAAAFgCQAFgDAEgEQAEgEADgFQAGgLADgOQACgKAAgHQAAgLgDgFQgDgFgEgCQgEgDgGABQgHgBgEACQgFACgEACIgGAGQgFAHgCAIIgBAJQAAAFADACQADAGALABIADACIgEAKIgDgBQgOgCgHgJQgFgGAAgIIABgJQACgJAGgHQAFgIAGgEQAPgKAOAAQASAAAJANQAFAIAAAOQAAAJgCAMQgDAMgGALQgFAKgHAHQgPANgQAAQgPAAgMgBg");
	this.shape_157.setTransform(-202.1,-26.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("Ag7A2IAOhqIAOAAIgIA6IAMgDQANgDAHgUIAIggIAPAAIgJAcQgGASgIAJQgEADgGAEQgGADgGABIgMADIgCAaIAYAAQAQAAANgMQAHgFAFgLQAHgJADgMIAOguIAOAAIgOAuQgFATgLANIgJALIgMAJQgHADgHACQgJACgKABg");
	this.shape_158.setTransform(-212.5,-26.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgOAkIAOhGIAPAAIgNA3IgMAPg");
	this.shape_159.setTransform(-220.5,-28.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgHAJQgCgCAAgEQAAgGADgEQAEgDAEAAQAEAAACACQACACAAAFQAAAEgDAEQgDAEgFAAQgEAAgCgCg");
	this.shape_160.setTransform(-225.8,-22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.3,-66.8,472.7,133.8);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AguA9IADgMIA5AAIAQhHIABgJIgBgGQgBgDgCgCQgCgCgDgBQgFgCgIAAIgbABIgFABIADgNQAPgCATAAQAUAAAIAJQAFAFAAALQAAAGgCAHIgPBHIANAAIgCAMg");
	this.shape.setTransform(118.9,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8AyIAmgGIgFhpIAPAAIADA2IABAwQAcgKAMgoIAQg0IAQAAIgQA0QgGAUgKANIgKALIgMAKQgIAEgIADQgKAEgLABIgjAFg");
	this.shape_1.setTransform(108.7,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTA8IAYh3IAPAAIgYB3g");
	this.shape_2.setTransform(100.8,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZBIIATguIAdg8Ig+AAIAIglIAOAAIgEAYIA+AAIgDANIgdA8IgTAug");
	this.shape_3.setTransform(95.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag1A9IAZh2QARgDAYAAQASAAAKAFQAIAEADAGQABAFAAAFIAAAIIgTBYgAgjAxIA4AAIAQhKIAAgGIAAgEIgBgDIgCgDIgDgCIgFgCIgDgBIgFAAIgKgBIgTABIgEAAg");
	this.shape_4.setTransform(83.4,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATA9IAShTIAAgFIAAgEIgBgFIgDgEIgFgDIgGgCQgGgCgHAAIggABIgHABIADgNIAngCQAcAAAJANQAEAGAAAJIgBAKIgSBTgAg0A9IAQhMIAPAAIgQBMg");
	this.shape_5.setTransform(66.8,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOA8IARhSIADgKIAFgHQAFgFADgCIACAAIAAgBIhBAAIADgMIBWAAIgCALQgVAFgEAVIgRBSg");
	this.shape_6.setTransform(57.6,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAnIAQhOIAPAAIgNA/IgPAPg");
	this.shape_7.setTransform(50.1,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnA8IAGgOQADACAJAAQAHAAAIgGIAIgHQAEgEADgHQAEgGABgHIAJgnIABgHIgBgGQgCgEgDgBQgEgCgFAAIgLABIACgMQAHgCAJAAQAYAAAAAVIgCALIgTBZIgMAAIACgUIgBAAIgFAGQgEAFgEADQgDADgGACQgGADgFAAQgJAAgFgCg");
	this.shape_8.setTransform(42.9,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPAnIAQhOIAPAAIgNA/IgPAPg");
	this.shape_9.setTransform(38,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdA6QgIgEgFgHQgGgJAAgQQAAgKACgMIANg7IAQAAIgNA7QgDAMAAAIQABAMAEAHQACAEAFADQAEADAHAAQAIAAAEgDQAHgDAEgEQAEgFAEgGQAJgQADgXIABgMIgBgKIgFgIQgEgHgMAAIgNABIACgNIAPgBQAJAAAHAEQAHADAFAIQAFAJAAAPQAAAKgDANQgDAPgGAMQgGAMgIAHQgIAHgJAEQgIAEgKAAQgKAAgHgEg");
	this.shape_10.setTransform(29.9,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZBIIATguIAcg8Ig+AAIAIglIAQAAIgGAYIA+AAIgCANIgdA8IgSAug");
	this.shape_11.setTransform(20.5,0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPAnIAQhOIAPAAIgNA/IgPAPg");
	this.shape_12.setTransform(13.1,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhCA8IAPh3IAQAAIgJBCIAOgEQAPgEAGgVIALglIAPAAIgJAgQgHAUgKAKQgEAEgGADQgGAEgHACIgNADIgEAdIAcAAQASAAAOgNQAIgHAGgKQAHgLAEgOIAQg0IAPAAIgPA0QgHAVgLAPIgKAMIgOAKQgHAEgJACQgKADgKAAg");
	this.shape_13.setTransform(-0.7,1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZBIIATguIAcg8Ig+AAIAIglIAQAAIgGAYIA+AAIgCANIgdA8IgSAug");
	this.shape_14.setTransform(-11.4,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4A058A").s().p("AgTA8IAAgpQAAgTAEgMQAFgMAFgFIAHgHIACgBIAAAAIgcAAIAAgWIAxAAIAAAWQgEADgEAGIgGAMIgDANIgBAKIAAAMIAAApg");
	this.shape_15.setTransform(-25,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A058A").s().p("AgoA7IAAgWQAOACARAAQAPAAAEgMQAEgHAAgKIAAgTQAAgWgNgGQgEgCgGAAQgMAAgTACIAAgWQAQgCASAAQAKAAAJADQAIAEAGAFQAFAFADAHQAHANAAASIAAANIgBAQQgCAHgDAIQgDAHgFAFQgGAFgIADQgJAEgLAAQgUAAgOgDg");
	this.shape_16.setTransform(-33.6,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4A058A").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_17.setTransform(-41.2,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4A058A").s().p("AgNAnIAAhOIAbAAIAAA3IgSAXg");
	this.shape_18.setTransform(-46.9,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4A058A").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_19.setTransform(-52.5,1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A058A").s().p("Ag3A7IAAgVIAJABQAEAAACgBQABAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQACgEAAgGIAAg9IgOACIAAgWQAdgEAbAAQAVAAAKAGQAFACAEAEQADADACAFIACALIABANIAABNIgcAAIAAhOQAAgVgYAAIgKAAIAAA/QAAAWgLAJQgEADgGACQgHACgHAAQgIAAgGgDg");
	this.shape_20.setTransform(-62.5,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A058A").s().p("AgNAnIAAhOIAbAAIAAA3IgSAXg");
	this.shape_21.setTransform(-76.4,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4A058A").s().p("AgNA8IAAh3IAbAAIAAB3g");
	this.shape_22.setTransform(-82.1,1.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4A058A").s().p("AgyA8IAAgWIAuAAIAVABIgaggIgqhCIAgAAIAgA2QAHgJACgTIACgaIAcAAIgCAWQgBAQgDAIIgEAJQgFAIgJAJIAXAeIAAARg");
	this.shape_23.setTransform(-91,1.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4A058A").s().p("AANA9IAAhOQgBgVgWAAIgeACIAAgWQASgCANAAQAMAAAIACQAIABAFADQAGACADAEQADADACAFIADALIAAANIAABNg");
	this.shape_24.setTransform(-102.3,1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4A058A").s().p("AgNAnIAAhOIAbAAIAAA3IgSAXg");
	this.shape_25.setTransform(-109.6,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A058A").s().p("AgvA9IAAh1IAVgCIAagCQAZAAAMAJQALAIAAASIAABWgAgTglIAABMIAmAAIAAhAQAAgIgGgDQgGgCgKAAIgQABg");
	this.shape_26.setTransform(-118.6,1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#4A058A").ss(1,1,1).p("AHvAAIvdAA");
	this.shape_27.setTransform(-74,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.8,-14.9,253.8,29.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag/BpIAAiUIAhAAIAACUgAgJAuIAAgDQAAgKAEgRQADgQADgLIAXhBIhXAAIAAgbIB/AAIAAAVIgaBFQgMAgAAAYIAAADg");
	this.shape.setTransform(130.3,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAyIAAhjIAjAAIAABFIgXAeg");
	this.shape_1.setTransform(118.6,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhFBLIgNiVIAiAAIAHBKIADAAQAKAAAEgEQAFgEAAgMIAFg2IAhAAIgEA2QgEAtgrAAIgHAAIACAXIAlAAQAUAAAKgPQALgQACgZIAGhCIAiAAIgGBBQgCAVgEANQgQAyg4AAg");
	this.shape_2.setTransform(105.8,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRBLIAAiVIAjAAIAACVg");
	this.shape_3.setTransform(92.7,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAQBNIAAhiQAAgbgdAAQgPAAgXACIAAgbQAWgDARAAQAQAAAKACQAJACAHADQAHADAEAFQAFAEACAHIADANIABAQIAABig");
	this.shape_4.setTransform(82.1,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAyIAAhjIAjAAIAABFIgXAeg");
	this.shape_5.setTransform(72.9,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag7BNIAAiUQAIgCASgBIAhgCQAgAAAOALQAOAKAAAYIAABsgAgYgvIAABgIAwAAIAAhQQAAgLgIgDQgHgDgNAAIgUABg");
	this.shape_6.setTransform(61.6,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJBbIALg4IAUhDIhPAAIAAg6IAkAAIAAAfIBPAAIAAAXIgVBHIgMA4g");
	this.shape_7.setTransform(41,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAbBLIgshLQgGADgCAFQgCAFgBAIIAAA2IgkAAIAAg2IACgKIACgKQACgFACgEIAJgIQAGgDAJgDIgig0IApAAIAdAzIAPAXQAEgCACgFQADgFAAgIIAAg2IAkAAIAAA2QgBATgHAKQgDADgGAFQgGADgIACIAiA1g");
	this.shape_8.setTransform(26.7,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhGBKIAAgbIANACQAEAAADgBQACgBACgDQADgGgBgIIAAhMIgRABIAAgbQAlgFAiAAQAbAAANAGQAGAEAFAFQAEAEACAGQACAHACAHIAAAPIAABiIgkAAIAAhiQAAgbgdAAIgOABIAABPQAAAcgNALQgGAEgIACQgHADgKAAQgKAAgIgEg");
	this.shape_9.setTransform(10,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAQBNIAAhiQAAgbgdAAQgPAAgXACIAAgbQAWgDARAAQAQAAAKACQAJACAHADQAHADAEAFQAEAEADAHIADANIABAQIAABig");
	this.shape_10.setTransform(-4.9,1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRAyIAAhjIAjAAIAABFIgXAeg");
	this.shape_11.setTransform(-14,-0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag7BNIAAiUQAIgCASgBIAhgCQAgAAAOALQAOAKAAAYIAABsgAgYgvIAABgIAwAAIAAhQQAAgLgIgDQgHgDgNAAIgUABg");
	this.shape_12.setTransform(-25.4,1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhFBLIgNiVIAiAAIAHBKIADAAQAKAAAEgEQAFgEAAgMIAFg2IAhAAIgEA2QgEAtgrAAIgHAAIACAXIAlAAQAUAAAKgPQALgQACgZIAGhCIAiAAIgGBBQgCAVgEANQgQAyg4AAg");
	this.shape_13.setTransform(-48.8,1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRAyIAAhjIAjAAIAABFIgXAeg");
	this.shape_14.setTransform(-61.7,-0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AADBNIAAgcIAcAAIAAg1QAAgVgEgIIgEgHQgFgHgMAAQgGAAgEACQgFADgDADQgHAIgDAFIgBADIgJBkIgjAAIAJhfIAAgLQAAgVgIgYIAiAAIAEALIADANIACAAIABgDIAFgGQAEgFAFgDQAEgDAIgDQAIgDAKAAQAKAAAIAEQAJAEAFAGQAFAHADAJQAGAPAAAXIAABVg");
	this.shape_15.setTransform(-73.8,1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRBLIAAiVIAjAAIAACVg");
	this.shape_16.setTransform(-85.4,1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhFBLIgNiVIAiAAIAHBKIADAAQAKAAAEgEQAFgEAAgMIAFg2IAhAAIgEA2QgEAtgrAAIgHAAIACAXIAlAAQAUAAAKgPQALgQACgZIAGhCIAiAAIgGBBQgCAVgEANQgQAyg4AAg");
	this.shape_17.setTransform(-98.4,1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAyIAAhjIAjAAIAABFIgXAeg");
	this.shape_18.setTransform(-111.3,-0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAyIAAhjIAjAAIAABFIgXAeg");
	this.shape_19.setTransform(-118.3,-0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag7BNIAAiUQAIgCASgBIAhgCQAgAAAOALQAOAKAAAYIAABsgAgYgvIAABgIAwAAIAAhQQAAgLgIgDQgHgDgNAAIgUABg");
	this.shape_20.setTransform(-129.6,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.5,-18.3,279.2,36.7);


(lib.tashlums4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2B023").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tashlums4, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.tashlums2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2B023").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tashlums2, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.tashlum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("Ag0A4IAAgUIAJABIAGgBIADgDQACgFAAgFIAAg6IgNABIAAgUQAbgEAaAAQATABAKAEQAFADADAEQAEACABAGIADAKIAAALIAABJIgbAAIAAhJQAAgUgWAAIgKABIAAA7QAAAVgKAIQgDADgGABQgHACgHAAQgHAAgGgCg");
	this.shape.setTransform(49.1,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AgzA5IgKhxIAaAAIAEA4IADAAQAHAAAEgCQACgEABgJIAEgpIAYAAIgDApQgCAighAAIgFgBIACASIAbAAQAPAAAHgLQAJgMABgTIAFgyIAZAAIgEAyQgBAPgDAJQgNAngpAAg");
	this.shape_1.setTransform(36.2,32.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424242").s().p("AgHBEIAJgpIAOgyIg6AAIAAgtIAbAAIAAAYIA6AAIAAASIgPA1IgJApg");
	this.shape_2.setTransform(24.2,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("AgMA5IAAhxIAaAAIAABxg");
	this.shape_3.setTransform(16.6,32.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424242").s().p("AgsA5IAAhuIAUgCIAYgCQAYABALAHQAKAIAAARIAABRgAgRgjIAABIIAkAAIAAg9QAAgHgHgDQgFgCgKAAIgOABg");
	this.shape_4.setTransform(7.9,32.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.247)").ss(2,1,1).p("AipibQAzgHA5ANQA4AMBXBRQBXBQABCH");
	this.shape_5.setTransform(43.9,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2B023").s().p("AjwDxQhlhjABiOQgBiMBlhlQBkhkCMAAQCOAABjBkQBlBlAACMQAACOhlBjQhjBliOgBQiMABhkhlg");
	this.shape_6.setTransform(29.4,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.tashlum, new cjs.Rectangle(-4.8,-2.8,68.3,68.3), null);


(lib.symbolgories = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwBWIAAh1IAWAAIAAB1gAACAmIAAgRQAAgMACgIQACgHAHgJIAHgJQAFgHACgFQACgFAAgJIAAgQIhPAAIAAgTIBlAAIAAAfQAAANgDAIQgCAIgGAJIgGAIQgKAMAAAOIAAAUg");
	this.shape.setTransform(142,32.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKA+IAAh7IAVAAIAAB7g");
	this.shape_1.setTransform(132.3,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMA+IAAhoIhDAAIAAgTIBvAAIAAATIgWAAIAABog");
	this.shape_2.setTransform(123.2,30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhBA7IAEgQQAGACAHAAQAIAAADgEQADgDAAgKIAAhHQgKAAgOADIgCgTQAagDAcAAQAbAAAPAEQAPAFAIAMQAHANAAAYIAABCIgWAAIAAg9QAAgRgDgJQgCgIgKgFQgJgGgUAAIgMABIAABKQAAAMgCAGQgCAGgHAEQgHAEgNAAQgLAAgLgEg");
	this.shape_3.setTransform(105.2,30.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgsA9IADgVQALAEALAAQAOAAAIgFQAJgGAFgKQAEgKAAgNQAAgSgKgNQgLgMgTAAQgLAAgLADIgDgUQANgDALAAQAeAAASASQARASAAAbQAAASgHAOQgIAPgOAIQgPAJgVAAQgLAAgNgDg");
	this.shape_4.setTransform(92.5,30.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdA/IAAgTIAlAAIAAg8QgBgKgBgFQgCgFgEgEQgEgDgJAAIgMABIgCgRQAIgDALAAQAPAAAJAGQAIAGADAJQADAIAAAQIAABQg");
	this.shape_5.setTransform(82.3,30.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKA+IAAh7IAVAAIAAB7g");
	this.shape_6.setTransform(75.7,30.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhBA7IAEgQQAGACAHAAQAIAAADgEQADgDAAgKIAAhHQgKAAgOADIgCgTQAagDAcAAQAbAAAPAEQAPAFAIAMQAHANAAAYIAABCIgWAAIAAg9QAAgRgDgJQgCgIgKgFQgJgGgUAAIgMABIAABKQAAAMgCAGQgCAGgHAEQgHAEgNAAQgLAAgLgEg");
	this.shape_7.setTransform(64.4,30.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpAwQgQgSgBgdQABgeAQgSQAPgSAaAAQAQAAANAHQAMAHAIAPQAKAPgBAWQABASgIAOQgGAPgNAJQgOAJgSAAQgaAAgPgSgAgYghQgJANAAAVQAAAWAJALQAJANAPAAQASAAAHgOQAJgMAAgVQAAgWgJgMQgJgNgQAAQgQAAgIAOg");
	this.shape_8.setTransform(282.6,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAfA+IgvhCQgLAFgCASIgFArIgXAAIAFgrQAEgdAUgKIgcgpIAbAAIAmA4QAIgFADgGQADgGACgOIACgZIAYAAIgEAaQgBAQgGALQgFAJgOAJIAlA0g");
	this.shape_9.setTransform(269.3,30.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKA+IAAh7IAVAAIAAB7g");
	this.shape_10.setTransform(259.3,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgdA/IAAgTIAkAAIAAg8QAAgKgBgFQgBgFgFgEQgEgDgJAAIgMABIgCgRQAIgDALAAQAPAAAIAGQAJAGADAJQADAIAAAQIAABQg");
	this.shape_11.setTransform(251.6,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAMA+IAAhoIhDAAIAAgTIBvAAIAAATIgWAAIAABog");
	this.shape_12.setTransform(241.8,30.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag0A4IAFgTQAMAIARAAQATAAAOgMQAPgLAAgWQAAgUgLgMQgLgNgTAAQgKAAgJACIAAAXQAAAPAPAAQAFAAAEgCIACAPQgGADgKAAQgPAAgIgIQgIgHAAgQIAAglQATgGAXAAQAaAAATAQQASAQAAAeQgBAegSARQgTASggAAQgXAAgNgIg");
	this.shape_13.setTransform(443,30.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_14.setTransform(433.4,30.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdA/IAAgTIAlAAIAAg8QgBgKgBgFQgCgFgEgEQgEgDgJAAIgMABIgCgRQAIgDALAAQAPAAAJAGQAIAGADAJQADAIAAAQIAABQg");
	this.shape_15.setTransform(425.7,30.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfA4QgNgJgGgNQgEgOgBgXIAAg7IAXAAIAABAQAAAcAKAIQAKAJAMAAQANAAAIgGQAHgGADgKQACgKAAgQIAAgQQAAgbgPAAQgMAAgIAMIgHgLQALgVAUAAQARAAAIANQAJANAAAYIAAAJQgBAYgEANQgFAOgNAJQgNAKgUAAQgSAAgNgJg");
	this.shape_16.setTransform(415,30.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgKAgIAAg/IAVAAIAAA/g");
	this.shape_17.setTransform(404.9,27.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag1A/IAAh5QAZgEAVAAQAWAAAOAHQAOAGAGAMQAFALAAAUIAABFgAgfgpIAABVIA/AAIAAgwQAAgNgDgIQgDgIgJgFQgJgFgQAAQgKAAgNACg");
	this.shape_18.setTransform(394.8,30.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhBA7IAEgQQAGACAHAAQAIAAADgEQADgDAAgKIAAhHQgKAAgOADIgCgTQAagDAcAAQAbAAAPAEQAPAFAIAMQAHANAAAYIAABCIgWAAIAAg9QAAgRgDgJQgCgIgKgFQgJgGgUAAIgMABIAABKQAAAMgCAGQgCAGgHAEQgHAEgNAAQgLAAgLgEg");
	this.shape_19.setTransform(618.8,30.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgEA/IAAgTIAoAAIAAgkIgBgdQgCgKgFgGQgGgGgIAAQgNAAgJAOQgIANgHAhIgJAuIgXAAIAKgxIAGgXIgTg0IAWAAIAJAcQAFgMAMgJQALgIAOAAQANAAALAHQAKAIAFAOQAFAOAAAbIAAA3g");
	this.shape_20.setTransform(604.2,30.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_21.setTransform(594.4,30.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgdA/IAAgTIAlAAIAAg8QAAgKgCgFQgCgFgEgEQgFgDgIAAIgMABIgCgRQAIgDALAAQAPAAAJAGQAIAGADAJQADAIAAAQIAABQg");
	this.shape_22.setTransform(586.7,30.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgKA+IAAh7IAVAAIAAB7g");
	this.shape_23.setTransform(580,30.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhBA7IAEgQQAGACAHAAQAIAAADgEQADgDAAgKIAAhHQgKAAgOADIgCgTQAagDAcAAQAbAAAPAEQAPAFAIAMQAHANAAAYIAABCIgWAAIAAg9QAAgRgDgJQgCgIgKgFQgJgGgUAAIgMABIAABKQAAAMgCAGQgCAGgHAEQgHAEgNAAQgLAAgLgEg");
	this.shape_24.setTransform(568.7,30.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgpAwQgRgSABgdQgBgeARgSQAQgSAZAAQAQAAANAHQAMAHAJAPQAJAPAAAWQAAASgIAOQgGAPgNAJQgOAJgSAAQgZAAgQgSgAgYghQgJANAAAVQAAAWAJALQAJANAPAAQASAAAHgOQAJgMAAgVQAAgWgJgMQgJgNgQAAQgQAAgIAOg");
	this.shape_25.setTransform(798.2,30.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAcA/IAAg9QAAgQgDgJQgEgJgKgFQgLgGgRAAQgNAAgRADIgCgTQASgDAPAAQAlAAAPAPQAOAOAAAeIAABCg");
	this.shape_26.setTransform(784.6,30.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgfA4QgNgJgGgNQgEgOAAgXIAAg7IAWAAIAABAQAAAcAKAIQAKAJAMAAQANAAAIgGQAHgGADgKQACgKAAgQIAAgQQAAgbgPAAQgLAAgJAMIgHgLQALgVAUAAQAQAAAJANQAIANAAAYIAAAJQAAAYgEANQgFAOgNAJQgNAKgUAAQgSAAgNgJg");
	this.shape_27.setTransform(772.2,30.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgKA+IAAh7IAVAAIAAB7g");
	this.shape_28.setTransform(762,30.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdA/IAAgTIAkAAIAAg8QAAgKgBgFQgBgFgFgEQgEgDgJAAIgMABIgCgRQAIgDALAAQAPAAAIAGQAJAGADAJQADAIAAAQIAABQg");
	this.shape_29.setTransform(754.3,30.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgLAgIAAg/IAWAAIAAA/g");
	this.shape_30.setTransform(747.7,27.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag1A/IAAh5QAZgEAVAAQAWAAAOAHQAOAGAGAMQAFALAAAUIAABFgAgfgpIAABVIA/AAIAAgwQAAgNgDgIQgDgIgJgFQgJgFgQAAQgKAAgNACg");
	this.shape_31.setTransform(737.6,30.2);

	this.instance = new lib.קודתכנות1();
	this.instance.parent = this;
	this.instance.setTransform(0,21,0.514,0.757);

	this.instance_1 = new lib.סאונד();
	this.instance_1.parent = this;
	this.instance_1.setTransform(183,0,0.512,0.512);

	this.instance_2 = new lib.פונטים();
	this.instance_2.parent = this;
	this.instance_2.setTransform(339,0,0.354,0.354);

	this.instance_3 = new lib.תמונות1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(507,9,0.409,0.409);

	this.instance_4 = new lib.סרטונים();
	this.instance_4.parent = this;
	this.instance_4.setTransform(679,4,0.451,0.451);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.symbolgories, new cjs.Rectangle(0,0,807.3,52.8), null);


(lib.ssitehl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.149)").s().p("EhDSAFaIAAq0MCGkAAAIAAK0g");
	this.shape.setTransform(430.7,34.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ssitehl, new cjs.Rectangle(0,0,861.3,69.3), null);


(lib.ssitehitbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.149)").s().p("EhDSAFaIAAq0MCGkAAAIAAK0g");
	this.shape.setTransform(430.7,34.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sitehlhitbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.149)").s().p("EhDSAFaIAAq0MCGkAAAIAAK0g");
	this.shape.setTransform(430.7,34.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sirtonim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C95858","#E59191","#DE6161"],[0,0.471,1],-87.3,0,87.4,0).s().p("AtpFxIAArhIbSAAIAALhg");
	this.shape.setTransform(87.4,36.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.psitehlhitbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.149)").s().p("EhDSAFaIAAq0MCGkAAAIAAK0g");
	this.shape.setTransform(430.7,34.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.psitehl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.149)").s().p("EhDSAFaIAAq0MCGkAAAIAAK0g");
	this.shape.setTransform(430.7,34.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.psitehl, new cjs.Rectangle(0,0,861.3,69.3), null);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#C4C4C4","#DEDEDE"],[0,0.471,1],-426.1,0,426,0).s().p("EBCUAAAYAAAAiFgBjogEYh0gBiNgCihgDYhRgBhWgBhbgBYhaAAhgAAhjAAYscAAwlAAwlAAYwkAAwlAAscAAYhjAAhgAAhaAAYhbABhWABhRABYihADiNACh0ABYjoAEiFABAAAAIAAAAYAAAACFACDoAEYB0ABCNACChADYBRABBWABBbABYBaAABgAABjAAYMcAAQlAAQkAAYQlAAQlAAMcAAYBjAABgAABaAAYBbgBBWgBBRgBYChgDCNgCB0gBYDogECFgCAAAAIAAAA");
	this.shape.setTransform(424.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(0,-1.5,848.9,3), null);


(lib.lastipromise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7D2A1").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.lastipromise, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.kishuratar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AoRCHIAAkNIQjAAIAAENg");
	this.shape.setTransform(53,13.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.iskis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CB9FC").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.iskis, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.iski = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AgxAmIAdgEIgYhdIAaAAIAOA0IAHAiQAGgEAEgIQAEgIACgMIAEg2IAaAAIgEAyQgCAPgDAKQgNAfgoAHIgkAGg");
	this.shape.setTransform(43.2,32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AgiArQgNgQAAgbQAAgKAEgKQAFgKAFgFIAAgBIgMABIAAgUQAUgDAZABQAXgBAMAPQANAQAAAbQAAAbgNAQQgNAQgWAAQgVAAgNgQgAgTAAQAAAlATAAQAUAAAAglQAAglgUAAIgJAAQgKAPAAAWg");
	this.shape_1.setTransform(32.1,32.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424242").s().p("AgvBPIAAhvIAZAAIAABvgAgGAjIAAgDIACgTQACgNADgJIARgwIhBAAIAAgVIBfAAIAAARIgUA0QgIAYgBARIAAADg");
	this.shape_2.setTransform(21.2,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("AgMAmIAAhLIAZAAIAAA0IgQAXg");
	this.shape_3.setTransform(12.4,30.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.247)").ss(2,1,1).p("AipibQAzgHA5ANQA4AMBXBRQBXBQABCH");
	this.shape_4.setTransform(43.9,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CB9FC").s().p("AjwDxQhlhjABiOQgBiMBlhlQBkhkCMAAQCOAABjBkQBlBlAACMQAACOhlBjQhjBliOgBQiMABhkhlg");
	this.shape_5.setTransform(29.4,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.iski, new cjs.Rectangle(-4.8,-2.8,68.3,68.3), null);


(lib.ishis3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8C7F2").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ishis3copy, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.ishis3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8C7F2").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ishis3, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.ishis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8C7F2").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ishis, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.ishi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AAUA5Ighg4QgEABgBAEQgCAEAAAGIAAApIgbAAIAAgpIAAgIIACgHIAEgGQACgDAFgDQAEgDAGgCIgZgoIAeAAIAWAnIALARQAEgBACgEQABgEAAgGIAAgpIAbAAIAAApQAAAPgGAGQgCAEgFACQgEADgGACIAZAog");
	this.shape.setTransform(41.1,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AgMAlIAAhKIAZAAIAAA0IgQAWg");
	this.shape_1.setTransform(32.7,30.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424242").s().p("AgzA5IgKhxIAaAAIAEA4IADAAQAHAAAEgCQADgEABgJIADgpIAYAAIgDApQgCAighAAIgFgBIABASIAcAAQAPAAAHgLQAJgMABgTIAFgyIAZAAIgEAyQgCAPgCAJQgMAngqAAg");
	this.shape_2.setTransform(23.1,32.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("AgMAlIAAhKIAZAAIAAA0IgQAWg");
	this.shape_3.setTransform(13.4,30.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.247)").ss(2,1,1).p("AipibQAzgHA5ANQA4AMBXBRQBXBQABCH");
	this.shape_4.setTransform(43.9,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8C7F2").s().p("AjwDxQhlhjABiOQgBiMBlhlQBkhkCMAAQCOAABjBkQBlBlAACMQAACOhlBjQhjBliOgBQiMABhkhlg");
	this.shape_5.setTransform(29.4,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.ishi, new cjs.Rectangle(-4.8,-2.8,68.3,68.3), null);


(lib.info1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.varvan = new cjs.Text("ישיא שומישל ןכות ילעב םירתא", "15px 'Open Sans Hebrew Light'", "#1D1D1D");
	this.varvan.name = "varvan";
	this.varvan.textAlign = "center";
	this.varvan.lineHeight = 22;
	this.varvan.lineWidth = 177;
	this.varvan.parent = this;
	this.varvan.setTransform(86,5.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2E6C3").s().p("Au1CWIAAkrIdrAAIAAErg");
	this.shape.setTransform(85.1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.varvan}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.info1, new cjs.Rectangle(-9.9,0,190,50.5), null);


(lib.hinams5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80DA6C").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hinams5, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.hinams3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80DA6C").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hinams3, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.hinams = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#80DA6C").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hinams, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.hinambutt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjlDlQhfhfAAiGQAAiFBfhgQBghfCFAAQCGAABfBfQBgBgAACFQAACGhgBfQhfBgiGAAQiFAAhghgg");
	this.shape.setTransform(32.5,32.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.hinam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AATA5IAAhJQAAgUgWAAIgOABIAABcIgbAAIAAhuIAUgCIAYgCIARACQAHABAFACQAFADAEAEQADACABAGIADAKIAAALIAABJg");
	this.shape.setTransform(41.4,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AgMAlIAAhKIAZAAIAAA0IgQAWg");
	this.shape_1.setTransform(32.9,30.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424242").s().p("AgbA5IAAgUIAbAAQABgGAAgOIAAgnQAAgJgEgDQgCgCgDABIgNABIAAgVQAHgCAJAAQAHAAAGACQAGACAEADQAEADACAFQAEAIAAAMIAAAuIgBAQIgCANIgBAEg");
	this.shape_2.setTransform(26.1,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("AgsA5IAAhuIAUgCIAYgCQAYABALAHQAKAIAAARIAABRgAgRgjIAABIIAkAAIAAg9QAAgHgHgDQgFgCgKAAIgOABg");
	this.shape_3.setTransform(16.7,32.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.247)").ss(2,1,1).p("AipibQAzgHA5ANQA4AMBXBRQBXBQABCH");
	this.shape_4.setTransform(43.9,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#80DA6C").s().p("AjwDxQhlhjABiOQgBiMBlhlQBkhkCMAAQCOAABjBkQBlBlAACMQAACOhlBjQhjBliOgBQiMABhkhlg");
	this.shape_5.setTransform(29.4,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.hinam, new cjs.Rectangle(-4.8,-2.8,68.3,68.3), null);


(lib.highlight5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#818DE7").s().p("AunGYIAAsvIdPAAIAAMvg");
	this.shape.setTransform(93.6,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.highlight5, new cjs.Rectangle(0,0,187.2,81.6), null);


(lib.highlight4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF7FF9").s().p("ArPGYIAAsvIWfAAIAAMvg");
	this.shape.setTransform(72,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.highlight4, new cjs.Rectangle(0,0,144,81.6), null);


(lib.highlight3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#76DE22").s().p("AsvGYIAAsvIZfAAIAAMvg");
	this.shape.setTransform(81.6,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.highlight3, new cjs.Rectangle(0,0,163.2,81.6), null);


(lib.highlight2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3AF39").s().p("AtfGYIAAsvIa/AAIAAMvg");
	this.shape.setTransform(86.4,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.highlight2, new cjs.Rectangle(0,0,172.8,81.6), null);


(lib.highlight1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF4747").s().p("Au/GYIAAsvId/AAIAAMvg");
	this.shape.setTransform(96,40.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.highlight1, new cjs.Rectangle(0,0,192,81.6), null);


(lib.fsitehl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.149)").s().p("EhDSAFaIAAq0MCGkAAAIAAK0g");
	this.shape.setTransform(430.7,34.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fsitehl, new cjs.Rectangle(0,0,861.3,69.3), null);


(lib.csitehl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.149)").s().p("EhDSAFaIAAq0MCGkAAAIAAK0g");
	this.shape.setTransform(430.7,34.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.csitehl, new cjs.Rectangle(0,0,861.3,69.3), null);


(lib.csitehitbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.149)").s().p("EhDSAFaIAAq0MCGkAAAIAAK0g");
	this.shape.setTransform(430.7,34.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5E5E5","#FDFDFD","#DEDEDE"],[0,0.471,1],-430.4,0,430.4,0).s().p("EhDPAuPMAAAhcdMCGfAAAMAAABcdg");
	this.shape.setTransform(430.4,295.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,0,860.8,591.8), null);


(lib.arihascopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7D2A1").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arihascopy2, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.arihascopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7D2A1").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arihascopy, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.arihas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7D2A1").s().p("AhoBpQgrgsgBg9QABg8ArgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(14.9,14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arihas, new cjs.Rectangle(0,0,29.7,29.7), null);


(lib.ariha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("AgHBEIAJgpIAOgzIg6AAIAAgsIAbAAIAAAYIA6AAIAAASIgPA1IgJApg");
	this.shape.setTransform(53.7,41.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("AgxAmIAdgEIgYhdIAbAAIANA0IAHAiQAHgEADgIQAEgIACgMIAEg2IAaAAIgEAyQgCAOgEALQgMAfgoAHIgkAGg");
	this.shape_1.setTransform(43,43.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#424242").s().p("AAMA5IAAhJQAAgUgVAAQgMAAgRACIAAgVIAdgBIATABQAIABAFACQAFADADAEQADACACAGIACAKIABALIAABJg");
	this.shape_2.setTransform(32.2,42.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("AgMAmIAAhLIAZAAIAAA0IgQAXg");
	this.shape_3.setTransform(25.3,41);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#424242").s().p("AgmA4IAAgVQAOACAPgBQAOABAFgLQACgHAAgKIAAgSQAAgUgLgGQgEgCgGAAQgLAAgSACIAAgUQAPgCASAAQAJAAAIACQAIAEAFAFQAFAEADAHQAGANAAAQIAAANIgBAPQgBAHgDAGQgDAIgFAEQgFAFgIADQgIAEgKAAQgVAAgMgDg");
	this.shape_4.setTransform(18,42.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#424242").s().p("AATA5IAAhJQAAgUgWAAIgSABIgRABIgGABIAAgUIAUgCIAYgBIARABQAHABAFACQAFADAEAEQADACABAGIADAKIAAALIAABJgAgsA5IAAhHIAbAAIAABHg");
	this.shape_5.setTransform(7.6,42.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424242").s().p("AgbA6IAAgVIAbAAQABgHAAgNIAAgmQAAgLgEgCQgCgBgDgBIgNACIAAgVQAHgCAJABQAHgBAGACQAGACAEADQAEADACAFQAEAIAAANIAAAtIgBARIgCAMIgBAFg");
	this.shape_6.setTransform(41.4,22.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#424242").s().p("AgMAmIAAhKIAZAAIAAAzIgQAXg");
	this.shape_7.setTransform(35.2,20.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#424242").s().p("Ag0A4IAAgVIAJACIAGgBIADgEQACgDAAgGIAAg6IgNACIAAgVQAbgDAaAAQATAAAKAEQAFADADADQAEAEABAEIADAKIAAAMIAABKIgbAAIAAhKQAAgUgWAAIgKAAIAAA8QAAAVgKAHQgDAEgGACQgHACgHAAQgHgBgGgCg");
	this.shape_8.setTransform(25.9,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424242").s().p("AgKBOIAAhyQAAgXgFgSIAZAAQAGASAAAXIAAByg");
	this.shape_9.setTransform(17,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.247)").ss(2,1,1).p("AipibQAzgHA5ANQA4AMBXBRQBXBQABCH");
	this.shape_10.setTransform(43.9,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E7D2A1").s().p("AjwDxQhlhjABiOQgBiMBlhlQBkhkCMAAQCOAABjBkQBlBlAACMQAACOhlBjQhjBliOgBQiMABhkhlg");
	this.shape_11.setTransform(29.4,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.ariha, new cjs.Rectangle(-4.8,-2.8,68.3,68.3), null);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var innercounter = 0;
		innercount++;
		if(innercount==3)
		{
			this.start.visible=false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(114));

	// Layer 1
	this.start = new lib.Tween5();
	this.start.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.start).wait(85).to({alpha:0},14).to({alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-14.2,374.1,28.5);


(lib.insides = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		//Videos//
		
		//site 1//
		stage.enableMouseOver(10);
		this.vsitehb1.addEventListener("mouseover", vhb1.bind(this));
		
		function vhb1()
		{
		
			
			
		    this.vshl1.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.vsitehb1.addEventListener("mouseout", vhb1o.bind(this));
		
		function vhb1o()
		{
			
			
			this.vshl1.visible=false;
		}
		
		
		
		this.vsitehb1.addEventListener("click", PixaBay2.bind(this));
		
		function PixaBay2() {
			window.open("https://pixabay.com/en/videos/", "_blank");
		}
		
		//site 2//
		
		stage.enableMouseOver(10);
		this.vsitehb2.addEventListener("mouseover", vhb2.bind(this));
		
		function vhb2()
		{
		
			
			
		    this.vshl2.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.vsitehb2.addEventListener("mouseout", vhb2o.bind(this));
		
		function vhb2o()
		{
			
			
			this.vshl2.visible=false;
		}
		
		
		
		this.vsitehb2.addEventListener("click", Videvo.bind(this));
		
		function Videvo() {
			window.open("https://www.videvo.net/", "_blank");
		}
		
		//site 3//
		
		stage.enableMouseOver(10);
		this.vsitehb3.addEventListener("mouseover", vhb3.bind(this));
		
		function vhb3()
		{
		
			
			
		    this.vshl3.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.vsitehb3.addEventListener("mouseout", vhb3o.bind(this));
		
		function vhb3o()
		{
			
			
			this.vshl3.visible=false;
		}
		
		
		
		this.vsitehb3.addEventListener("click", Shuttervid.bind(this));
		
		function Shuttervid() {
			window.open("https://www.shutterstock.com/video/", "_blank");
		}
		
		//site 4//
		
		stage.enableMouseOver(10);
		this.vsitehb4.addEventListener("mouseover", vhb4.bind(this));
		
		function vhb4()
		{
		
			
			
		    this.vshl4.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.vsitehb4.addEventListener("mouseout", vhb4o.bind(this));
		
		function vhb4o()
		{
			
			
			this.vshl4.visible=false;
		}
		
		
		
		this.vsitehb4.addEventListener("click", pond.bind(this));
		
		function pond() {
			window.open("https://www.pond5.com/stock-video-footage/", "_blank");
		}
		
		//site 5//
		
		stage.enableMouseOver(10);
		this.vsitehb5.addEventListener("mouseover", vhb5.bind(this));
		
		function vhb5()
		{
		
			
			
		    this.vshl5.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.vsitehb5.addEventListener("mouseout", vhb5o.bind(this));
		
		function vhb5o()
		{
			
			
			this.vshl5.visible=false;
		}
		
		
		
		this.vsitehb5.addEventListener("click", Pexelsvid.bind(this));
		
		function Pexelsvid() {
			window.open("https://videos.pexels.com/", "_blank");
		}
	}
	this.frame_2 = function() {
		//Pictures//
		
		//site 1//
		stage.enableMouseOver(10);
		this.psitehb1.addEventListener("mouseover", phb1.bind(this));
		
		function phb1()
		{
		
			
			
		    this.pshl1.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.psitehb1.addEventListener("mouseout", phb1o.bind(this));
		
		function phb1o()
		{
			
			
			this.pshl1.visible=false;
		}
		
		
		
		this.psitehb1.addEventListener("click", PixaBay.bind(this));
		
		function PixaBay() {
			window.open("https://pixabay.com/", "_blank");
		}
		
		//site 2//
		
		stage.enableMouseOver(10);
		this.psitehb2.addEventListener("mouseover", phb2.bind(this));
		
		function phb2()
		{
		
			
			
		    this.pshl2.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.psitehb2.addEventListener("mouseout", phb2o.bind(this));
		
		function phb2o()
		{
			
			
			this.pshl2.visible=false;
		}
		
		
		
		this.psitehb2.addEventListener("click", Unsplash.bind(this));
		
		function Unsplash() {
			window.open("https://unsplash.com/", "_blank");
		}
		
		//site 3//
		
		stage.enableMouseOver(10);
		this.psitehb3.addEventListener("mouseover", phb3.bind(this));
		
		function phb3()
		{
		
			
			
		    this.pshl3.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.psitehb3.addEventListener("mouseout", phb3o.bind(this));
		
		function phb3o()
		{
			
			
			this.pshl3.visible=false;
		}
		
		
		
		this.psitehb3.addEventListener("click", ShutterStock.bind(this));
		
		function ShutterStock() {
			window.open("https://www.shutterstock.com/", "_blank");
		}
		
		//site 4//
		
		stage.enableMouseOver(10);
		this.psitehb4.addEventListener("mouseover", phb4.bind(this));
		
		function phb4()
		{
		
			
			
		    this.pshl4.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.psitehb4.addEventListener("mouseout", phb4o.bind(this));
		
		function phb4o()
		{
			
			
			this.pshl4.visible=false;
		}
		
		
		
		this.psitehb4.addEventListener("click", Depositphotos.bind(this));
		
		function Depositphotos() {
			window.open("https://depositphotos.com/", "_blank");
		}
		
		//site 5//
		
		stage.enableMouseOver(10);
		this.psitehb5.addEventListener("mouseover", phb5.bind(this));
		
		function phb5()
		{
		
			
			
		    this.pshl5.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.psitehb5.addEventListener("mouseout", phb5o.bind(this));
		
		function phb5o()
		{
			
			
			this.pshl5.visible=false;
		}
		
		
		
		this.psitehb5.addEventListener("click", Pexels.bind(this));
		
		function Pexels() {
			window.open("https://www.pexels.com/", "_blank");
		}
		
		
		//fonts//
		
		//site 1//
		stage.enableMouseOver(10);
		this.fsitehb1.addEventListener("mouseover", fhb1.bind(this));
		
		function fhb1()
		{
		
		    this.fshl1.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.fsitehb1.addEventListener("mouseout", fhb1o.bind(this));
		
		function fhb1o()
		{
			
			
			this.fshl1.visible=false;
		}
		
		
		
		this.fsitehb1.addEventListener("click", FontSquirrel.bind(this));
		
		function FontSquirrel() {
			window.open("https://www.fontsquirrel.com/", "_blank");
		}
		
		//site 2//
		
		stage.enableMouseOver(10);
		this.fsitehb2.addEventListener("mouseover", fhb2.bind(this));
		
		function fhb2()
		{
		
			
			
		    this.fshl2.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.fsitehb2.addEventListener("mouseout", fhb2o.bind(this));
		
		function fhb2o()
		{
			
			
			this.fshl2.visible=false;
		}
		
		
		
		this.fsitehb2.addEventListener("click", thoufonts.bind(this));
		
		function thoufonts() {
			window.open("http://www.1001fonts.com/", "_blank");
		}
		
		//site 3//
		
		stage.enableMouseOver(10);
		this.fsitehb3.addEventListener("mouseover", fhb3.bind(this));
		
		function fhb3()
		{
		
			
			
		    this.fshl3.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.fsitehb3.addEventListener("mouseout", fhb3o.bind(this));
		
		function fhb3o()
		{
			
			
			this.fshl3.visible=false;
		}
		
		
		
		this.fsitehb3.addEventListener("click", googlefonts.bind(this));
		
		function googlefonts() {
			window.open("https://fonts.google.com/", "_blank");
		}
		
		//site 4//
		
		stage.enableMouseOver(10);
		this.fsitehb4.addEventListener("mouseover", fhb4.bind(this));
		
		function fhb4()
		{
		
			
			
		    this.fshl4.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.fsitehb4.addEventListener("mouseout", fhb4o.bind(this));
		
		function fhb4o()
		{
			
			
			this.fshl4.visible=false;
		}
		
		
		
		this.fsitehb4.addEventListener("click", dafont.bind(this));
		
		function dafont() {
			window.open("http://www.dafont.com/", "_blank");
		}
		
		//site 5//
		
		stage.enableMouseOver(10);
		this.fsitehb5.addEventListener("mouseover", fhb5.bind(this));
		
		function fhb5()
		{
		
			
			
		    this.fshl5.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.fsitehb5.addEventListener("mouseout", fhb5o.bind(this));
		
		function fhb5o()
		{
			
			
			this.fshl5.visible=false;
		}
		
		
		
		this.fsitehb5.addEventListener("click", fontspace.bind(this));
		
		function fontspace() {
			window.open("http://www.fontspace.com/", "_blank");
		}
	}
	this.frame_4 = function() {
		//sounds//
		
		
		
		//site 1//
		stage.enableMouseOver(10);
		this.ssitehb1.addEventListener("mouseover", shb1.bind(this));
		
		function shb1()
		{
		
			
			
		    this.sshl1.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.ssitehb1.addEventListener("mouseout", shb1o.bind(this));
		
		function shb1o()
		{
			
			
			this.sshl1.visible=false;
		}
		
		
		
		this.ssitehb1.addEventListener("click", freestockmusic.bind(this));
		
		function freestockmusic() {
			window.open("http://www.freestockmusic.com/", "_blank");
		}
		
		//site 2//
		
		stage.enableMouseOver(10);
		this.ssitehb2.addEventListener("mouseover", shb2.bind(this));
		
		function shb2()
		{
		
			
			
		    this.sshl2.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.ssitehb2.addEventListener("mouseout", shb2o.bind(this));
		
		function shb2o()
		{
			
			
			this.sshl2.visible=false;
		}
		
		
		
		this.ssitehb2.addEventListener("click", Audiojungle.bind(this));
		
		function Audiojungle() {
			window.open("https://audiojungle.net/", "_blank");
		}
		
		//site 3//
		
		stage.enableMouseOver(10);
		this.ssitehb3.addEventListener("mouseover", shb3.bind(this));
		
		function shb3()
		{
		
			
			
		    this.sshl3.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.ssitehb3.addEventListener("mouseout", shb3o.bind(this));
		
		function shb3o()
		{
			
			
			this.sshl3.visible=false;
		}
		
		
		
		this.ssitehb3.addEventListener("click", audionau.bind(this));
		
		function audionau() {
			window.open("http://audionautix.com/", "_blank");
		}
		
		//site 4//
		
		stage.enableMouseOver(10);
		this.ssitehb4.addEventListener("mouseover", shb4.bind(this));
		
		function shb4()
		{
		
			
			
		    this.sshl4.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.ssitehb4.addEventListener("mouseout", shb4o.bind(this));
		
		function shb4o()
		{
			
			
			this.sshl4.visible=false;
		}
		
		
		
		this.ssitehb4.addEventListener("click", soundclick.bind(this));
		
		function soundclick() {
			window.open("http://www.soundclick.com/", "_blank");
		}
		
		//site 5//
		
		stage.enableMouseOver(10);
		this.ssitehb5.addEventListener("mouseover", shb5.bind(this));
		
		function shb5()
		{
		
			
			
		    this.sshl5.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.ssitehb5.addEventListener("mouseout", shb5o.bind(this));
		
		function shb5o()
		{
			
			
			this.sshl5.visible=false;
		}
		
		
		
		this.ssitehb5.addEventListener("click", freesound.bind(this));
		
		function freesound() {
			window.open("https://freesound.org/", "_blank");
		}
	}
	this.frame_5 = function() {
		//code//
		
		//site 1//
		stage.enableMouseOver(10);
		this.csitehb1.addEventListener("mouseover", chb1.bind(this));
		
		function chb1()
		{
		
			
			
		    this.cshl1.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.csitehb1.addEventListener("mouseout", chb1o.bind(this));
		
		function chb1o()
		{
			
			
			this.cshl1.visible=false;
		}
		
		
		
		this.csitehb1.addEventListener("click", w3schools.bind(this));
		
		function w3schools() {
			window.open("https://www.w3schools.com/", "_blank");
		}
		
		//site 2//
		
		stage.enableMouseOver(10);
		this.csitehb2.addEventListener("mouseover", chb2.bind(this));
		
		function chb2()
		{
		
			
			
		    this.cshl2.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.csitehb2.addEventListener("mouseout", chb2o.bind(this));
		
		function chb2o()
		{
			
			
			this.cshl2.visible=false;
		}
		
		
		
		this.csitehb2.addEventListener("click", sourceforge.bind(this));
		
		function sourceforge() {
			window.open("https://sourceforge.net/", "_blank");
		}
		
		//site 3//
		
		stage.enableMouseOver(10);
		this.csitehb3.addEventListener("mouseover", chb3.bind(this));
		
		function chb3()
		{
		
			
			
		    this.cshl3.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.csitehb3.addEventListener("mouseout", chb3o.bind(this));
		
		function chb3o()
		{
			
			
			this.cshl3.visible=false;
		}
		
		
		
		this.csitehb3.addEventListener("click", opensource.bind(this));
		
		function opensource() {
			window.open("https://opensource.com/resources", "_blank");
		}
		
		//site 4//
		
		stage.enableMouseOver(10);
		this.csitehb4.addEventListener("mouseover", chb4.bind(this));
		
		function chb4()
		{
		
			
			
		    this.cshl4.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.csitehb4.addEventListener("mouseout", chb4o.bind(this));
		
		function chb4o()
		{
			
			
			this.cshl4.visible=false;
		}
		
		
		
		this.csitehb4.addEventListener("click", github.bind(this));
		
		function github() {
			window.open("https://github.com/", "_blank");
		}
		
		//site 5//
		
		stage.enableMouseOver(10);
		this.csitehb5.addEventListener("mouseover", chb5.bind(this));
		
		function chb5()
		{
		
			
			
		    this.cshl5.visible=true;
		}
		
		
		
		stage.enableMouseOver(10);
		this.csitehb5.addEventListener("mouseout", chb5o.bind(this));
		
		function chb5o()
		{
			
			
			this.cshl5.visible=false;
		}
		
		
		
		this.csitehb5.addEventListener("click", codeproject.bind(this));
		
		function codeproject() {
			window.open("https://www.codeproject.com/?cat=1", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(2).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// peula
	this.text = new cjs.Text("או בחר באתר על מנת להכנס אליו", "bold 17px 'Open Sans Hebrew'", "#333333");
	this.text.textAlign = "right";
	this.text.lineHeight = 25;
	this.text.lineWidth = 335;
	this.text.parent = this;
	this.text.setTransform(798,-134);

	this.oraot = new cjs.Text("ניתן לבצע סינון על ידי מעבר על בועת עלות או זכויות שימוש", "bold 15px 'Open Sans Hebrew'", "#333333");
	this.oraot.name = "oraot";
	this.oraot.textAlign = "right";
	this.oraot.lineHeight = 22;
	this.oraot.lineWidth = 478;
	this.oraot.parent = this;
	this.oraot.setTransform(798,-159);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.oraot},{t:this.text}]},1).wait(5));

	// Layer 1
	this.text_1 = new cjs.Text("", "20px 'OpenSansHebrew-Bold'", "#166595");
	this.text_1.lineHeight = 29;
	this.text_1.parent = this;
	this.text_1.setTransform(639,427.6);

	this.p4 = new lib.ishis();
	this.p4.parent = this;
	this.p4.setTransform(476.2,401.2,1,1,0,0,0,14.9,14.9);

	this.o3 = new lib.tashlums2();
	this.o3.parent = this;
	this.o3.setTransform(637.1,332.4,1,1,0,0,0,14.9,14.9);

	this.o4 = new lib.tashlums2();
	this.o4.parent = this;
	this.o4.setTransform(637.1,401.2,1,1,0,0,0,14.9,14.9);

	this.b4 = new lib.iskis();
	this.b4.parent = this;
	this.b4.setTransform(391.5,401.2,1,1,0,0,0,14.9,14.9);

	this.b5 = new lib.iskis();
	this.b5.parent = this;
	this.b5.setTransform(391.5,470,1,1,0,0,0,14.9,14.9);

	this.p5 = new lib.ishis();
	this.p5.parent = this;
	this.p5.setTransform(476.2,470,1,1,0,0,0,14.9,14.9);

	this.g5 = new lib.hinams();
	this.g5.parent = this;
	this.g5.setTransform(723.5,470,1,1,0,0,0,14.9,14.9);

	this.be5 = new lib.arihas();
	this.be5.parent = this;
	this.be5.setTransform(306.7,470,1,1,0,0,0,14.9,14.9);

	this.b3 = new lib.iskis();
	this.b3.parent = this;
	this.b3.setTransform(391.5,332.4,1,1,0,0,0,14.9,14.9);

	this.p3 = new lib.ishis();
	this.p3.parent = this;
	this.p3.setTransform(476.2,332.4,1,1,0,0,0,14.9,14.9);

	this.g2 = new lib.hinams();
	this.g2.parent = this;
	this.g2.setTransform(723.5,263.6,1,1,0,0,0,14.9,14.9);

	this.p2 = new lib.ishis();
	this.p2.parent = this;
	this.p2.setTransform(476.2,263.6,1,1,0,0,0,14.9,14.9);

	this.b2 = new lib.iskis();
	this.b2.parent = this;
	this.b2.setTransform(391.5,263.6,1,1,0,0,0,14.9,14.9);

	this.vl5 = new cjs.Text("Pexels", "bold 20px 'Open Sans Hebrew'", "#166595");
	this.vl5.name = "vl5";
	this.vl5.lineHeight = 29;
	this.vl5.parent = this;
	this.vl5.setTransform(2,457.1);

	this.vl4 = new cjs.Text("pond5", "bold 20px 'Open Sans Hebrew'", "#166595");
	this.vl4.name = "vl4";
	this.vl4.lineHeight = 29;
	this.vl4.parent = this;
	this.vl4.setTransform(2,388.3);

	this.vl3 = new cjs.Text("ShutterStock", "bold 20px 'Open Sans Hebrew'", "#166595");
	this.vl3.name = "vl3";
	this.vl3.lineHeight = 29;
	this.vl3.lineWidth = 149;
	this.vl3.parent = this;
	this.vl3.setTransform(2,319.5);

	this.vl2 = new cjs.Text("Videvo", "bold 20px 'Open Sans Hebrew'", "#166595");
	this.vl2.name = "vl2";
	this.vl2.lineHeight = 29;
	this.vl2.parent = this;
	this.vl2.setTransform(2,250.7);

	this.vl1 = new cjs.Text("PixaBay", "bold 20px 'Open Sans Hebrew'", "#166595");
	this.vl1.name = "vl1";
	this.vl1.lineHeight = 29;
	this.vl1.parent = this;
	this.vl1.setTransform(2,181.9);

	this.b1 = new lib.iskis();
	this.b1.parent = this;
	this.b1.setTransform(391.5,194.8,1,1,0,0,0,14.9,14.9);

	this.p1 = new lib.ishis();
	this.p1.parent = this;
	this.p1.setTransform(476.2,194.8,1,1,0,0,0,14.9,14.9);

	this.g1 = new lib.hinams();
	this.g1.parent = this;
	this.g1.setTransform(723.5,194.8,1,1,0,0,0,14.9,14.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag5A/IgLh9IAdAAIAFA+IADAAQAHAAAEgDQAEgEAAgJIAFguIAbAAIgEAtQgDAmgkAAIgGAAIACATIAfAAQARAAAIgMQAJgNABgVIAGg4IAcAAIgFA3QgCARgCALQgOAqgvAAg");
	this.shape.setTransform(78.9,45.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgyBAIAAh6QAIgCAOgBIAcgCQAbAAAMAJQAMAJgBATIAABagAgUgnIAABQIApAAIAAhDQAAgJgIgDQgFgCgMAAIgQABg");
	this.shape_1.setTransform(64.5,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAUBAIAAhSQAAgWgYAAIgUABIgSACIgIABIAAgWQAIgCAPgBIAbgCQAKAAAJACQAIABAFACQAGADADAEQAEAEACAGQACAFAAAFIABANIAABSgAgyBAIAAhPIAeAAIAABPg");
	this.shape_2.setTransform(46.1,45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAWA/Iglg+QgEACgCADQgCAFAAAHIAAAtIgeAAIAAgtIABgIIACgJIAEgHQADgEAFgDQAEgDAHgCIgcgsIAiAAIAYArIANATQADgCADgDQABgEABgHIAAguIAdAAIAAAtQAAAQgHAIQgCADgFAEQgFADgHACIAdAsg");
	this.shape_3.setTransform(33,45.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Ag6A/IAAgYIAKACQAEABACgCIAEgEQACgEAAgHIAAhAIgPACIAAgWQAegFAdAAQAWAAALAFIAJAHQAEAEACAGIACAKIABANIAABSIgeAAIAAhSQAAgWgZAAIgKABIAABBQgBAXgKAJQgFAEgHACQgHACgHAAQgJAAgGgCg");
	this.shape_4.setTransform(19.1,45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AANBAIAAhSQAAgWgXAAQgNAAgTACIAAgXQASgCAOAAQANAAAJACQAIABAFACIAKAHQADAEACAGQACAFABAFIAAANIAABSg");
	this.shape_5.setTransform(6.7,45);

	this.instance = new lib.ariha();
	this.instance.parent = this;
	this.instance.setTransform(307,106.1,1,1,0,0,0,29.4,31.3);

	this.instance_1 = new lib.iski();
	this.instance_1.parent = this;
	this.instance_1.setTransform(391.4,106.1,1,1,0,0,0,29.4,31.3);

	this.instance_2 = new lib.ishi();
	this.instance_2.parent = this;
	this.instance_2.setTransform(477.2,106.1,1,1,0,0,0,29.4,31.3);

	this.freegreen = new lib.hinam();
	this.freegreen.parent = this;
	this.freegreen.setTransform(722.9,106.4,1,1,0,0,0,29.4,31.3);

	this.tashlum = new lib.tashlum();
	this.tashlum.parent = this;
	this.tashlum.setTransform(636,107.2,1,1,0,0,0,28.4,32.2);
	new cjs.ButtonHelper(this.tashlum, 0, 1, 1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgTA5IAAgmQAAgTAFgLQAEgLAFgFQAFgGACgBIACgBIAAAAIgbAAIAAgVIAvAAIAAAVQgEADgEAGIgFALIgDAMIgBAKIAAAMIAAAmg");
	this.shape_6.setTransform(437.5,43.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgmA4IAAgVQAOABAPAAQAOABAFgLQACgHAAgKIAAgRQAAgVgLgGQgEgCgGAAQgLAAgSACIAAgUQAPgCASgBQAJABAIADQAIACAFAGQAFAEADAHQAGAMAAARIAAANIgBAOQgBAHgDAIQgDAGgFAFQgFAFgIADQgIADgKAAQgVAAgMgCg");
	this.shape_7.setTransform(429.4,43.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgNA5IAAhxIAaAAIAABxg");
	this.shape_8.setTransform(422.1,43.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgMAlIAAhKIAZAAIAAA0IgQAWg");
	this.shape_9.setTransform(416.8,41.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgNA5IAAhxIAaAAIAABxg");
	this.shape_10.setTransform(411.4,43.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ag0A4IAAgUIAJABIAGgBIADgDQACgFAAgFIAAg6IgNABIAAgUQAbgEAaAAQATABAKAEQAFADADAEQAEACABAGIADAKIAAALIAABJIgbAAIAAhJQAAgUgWAAIgKABIAAA7QAAAVgKAIQgDADgGABQgHACgHAAQgHAAgGgCg");
	this.shape_11.setTransform(402,43.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag0A5IgJhxIAZAAIAGA4IACAAQAHAAADgCQADgEABgJIAEgpIAZAAIgEApQgDAiggAAIgFgBIACASIAbAAQAPAAAIgLQAIgMACgTIADgyIAaAAIgEAyQgCAPgDAJQgLAngqAAg");
	this.shape_12.setTransform(384.4,43.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgMAlIAAhKIAZAAIAAA0IgQAWg");
	this.shape_13.setTransform(374.7,41.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AACA5IAAgUIAVAAIAAgoQAAgPgCgGIgEgGQgEgGgJABQgEAAgCABIgHAFQgFAFgCAFIgBACIgHBKIgaAAIAHhHIAAgIQAAgPgGgSIAZAAIADAIIACAKIACAAIABgDIAEgEIAGgGQAEgDAFgBQAGgCAHgBQAIABAGADQAGACAEAFQAEAEADAIQAEAMAAAQIAAA/g");
	this.shape_14.setTransform(365.6,43.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgMA5IAAhxIAaAAIAABxg");
	this.shape_15.setTransform(356.9,43.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgzA5IgKhxIAaAAIAEA4IADAAQAHAAAEgCQACgEABgJIAEgpIAYAAIgDApQgCAighAAIgFgBIACASIAbAAQAPAAAHgLQAJgMABgTIAFgyIAZAAIgEAyQgBAPgDAJQgNAngpAAg");
	this.shape_16.setTransform(347.2,43.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgwAnIAdgFIgZhdIAaAAIAPA0IAFAjQAHgFAFgIQADgIABgMIAFg2IAbAAIgFAyQgCAOgEALQgMAfgnAHIgkAFg");
	this.shape_17.setTransform(691.3,43.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgHBEIAJgpIAOgyIg6AAIAAgtIAbAAIAAAYIA6AAIAAASIgPA1IgJApg");
	this.shape_18.setTransform(680.8,42.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgNA5IAAhxIAaAAIAABxg");
	this.shape_19.setTransform(673.2,43.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("Ag0A4IAAgUIAJABIAGgBIADgDQACgFAAgFIAAg6IgNABIAAgUQAbgEAaAAQATABAKAEQAFADADAEQAEACABAGIADAKIAAALIAABJIgbAAIAAhJQAAgUgWAAIgKABIAAA7QAAAVgKAIQgDADgGABQgHACgHAAQgHAAgGgCg");
	this.shape_20.setTransform(663.7,43.6);

	this.be2 = new lib.arihascopy();
	this.be2.parent = this;
	this.be2.setTransform(306.7,263.6,1,1,0,0,0,14.9,14.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgwAnIAdgFIgZhcIAaAAIAPAzIAFAiQAHgEAFgIQADgIABgMIAFg1IAbAAIgFAxQgCAPgEAKQgMAfgnAHIgkAGg");
	this.shape_21.setTransform(691.3,44.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgHBFIAJgrIAOgyIg6AAIAAgrIAbAAIAAAXIA6AAIAAARIgPA1IgJArg");
	this.shape_22.setTransform(680.8,42.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("Ag0A4IAAgVIAJACIAGgBIADgEQACgDAAgGIAAg6IgNACIAAgVQAbgDAagBQATAAAKAGQAFACADADQAEADABAFIADAKIAAANIAABJIgbAAIAAhJQAAgVgWAAIgKAAIAAA8QAAAVgKAHQgDADgGADQgHACgHAAQgHgBgGgCg");
	this.shape_23.setTransform(663.7,44.1);

	this.pp2 = new lib.ishis3();
	this.pp2.parent = this;
	this.pp2.setTransform(475.1,263.6,1,1,0,0,0,14.9,14.9);

	this.pp1 = new lib.ishis3();
	this.pp1.parent = this;
	this.pp1.setTransform(475.1,195.1,1,1,0,0,0,14.9,14.9);

	this.gg3 = new lib.hinams3();
	this.gg3.parent = this;
	this.gg3.setTransform(723.5,334.3,1,1,0,0,0,14.9,14.9);

	this.gg2 = new lib.hinams3();
	this.gg2.parent = this;
	this.gg2.setTransform(723.5,263.6,1,1,0,0,0,14.9,14.9);

	this.gg1 = new lib.hinams3();
	this.gg1.parent = this;
	this.gg1.setTransform(723.5,195.1,1,1,0,0,0,14.9,14.9);

	this.g5_1 = new lib.hinams3();
	this.g5_1.parent = this;
	this.g5_1.setTransform(723.5,470.6,1,1,0,0,0,14.9,14.9);

	this.g4 = new lib.hinams3();
	this.g4.parent = this;
	this.g4.setTransform(723.5,401.2,1,1,0,0,0,14.9,14.9);

	this.pp3 = new lib.ishis3();
	this.pp3.parent = this;
	this.pp3.setTransform(475.1,334.3,1,1,0,0,0,14.9,14.9);

	this.be3 = new lib.arihas();
	this.be3.parent = this;
	this.be3.setTransform(306.7,334.3,1,1,0,0,0,14.9,14.9);

	this.beige3 = new lib.arihascopy2();
	this.beige3.parent = this;
	this.beige3.setTransform(306.7,334.3,1,1,0,0,0,14.9,14.9);

	this.beige1 = new lib.arihascopy2();
	this.beige1.parent = this;
	this.beige1.setTransform(306.7,195.8,1,1,0,0,0,14.9,14.9);

	this.purp1 = new lib.ishis3copy();
	this.purp1.parent = this;
	this.purp1.setTransform(475.1,195.8,1,1,0,0,0,14.9,14.9);

	this.ggg1 = new lib.hinams5();
	this.ggg1.parent = this;
	this.ggg1.setTransform(723.5,195.8,1,1,0,0,0,14.9,14.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AABAeIAAglIABgEIACgEQACgCACgBIAAAAIAAAAIgfAAIAAgLIAvAAIAAALIgFABIgDAFIAAAGIAAAkg");
	this.shape_24.setTransform(228.8,335.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGAeIAAg7IANAAIAAA7g");
	this.shape_25.setTransform(224.7,335.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAGAfIAAgmQABgMgLAAIgQABIAAgLIAQgBIAJABIAHACIAEAEIADAEIABAFIABAHIAAAmg");
	this.shape_26.setTransform(220.5,335.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbAeIgFg7IAOAAIADAdIABAAQAEAAABgBQACgCABgFIABgVIAMAAIgBAVQgCASgQAAIgDgBIABAKIAOAAQAIAAAEgGQAEgGABgJIACgbIAOAAIgCAaQgBAIgCAEQgGAVgWAAg");
	this.shape_27.setTransform(214.6,335.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AABAfIAAgLIAMAAIAAgVQAAgIgCgDIgCgDQgCgDgEAAIgEABIgDADIgEAEIgBABIgDAoIgOAAIAEglIAAgFQAAgIgEgKIAOAAIABAFIABAFIABAAIABgCIACgBIAEgDIADgDQAEgBADgBQAFAAADACQAEACACADIACAFQADAGAAAJIAAAig");
	this.shape_28.setTransform(205,335.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgbAdIAAgKIAFAAIADAAIABgBIABgGIAAgeIgGABIAAgLQAOgCANAAQAKAAAGADIAEADQACACABADIABAEIAAAHIAAAmIgOAAIAAgmQAAgLgMAAIgEABIAAAeQAAALgGAEIgFADIgHABIgHgCg");
	this.shape_29.setTransform(198.3,335.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgFApIAAg8QAAgMgDgKIANAAQAEAKAAAMIAAA8g");
	this.shape_30.setTransform(193.6,336.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYApIAAg5IANAAIAAA5gAgDATIAAgCIABgKIACgLIAKgaIgiAAIAAgLIAxAAIAAAJIgKAbQgFANAAAJIAAACg");
	this.shape_31.setTransform(187.2,336.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAHAfIAAgmQAAgMgLAAIgQABIAAgLIAQgBIAKABIAGACIAEAEIADAEIABAFIABAHIAAAmg");
	this.shape_32.setTransform(181.2,335.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AACAeIAAglIAAgEIACgEQACgCACgBIAAAAIAAAAIgfAAIAAgLIAvAAIAAALIgEABIgEAFIgBAGIAAAkg");
	this.shape_33.setTransform(176.3,335.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGAUIAAgnIANAAIAAAbIgJAMg");
	this.shape_34.setTransform(172.4,334.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgJAdQgFgCgDgEQgDgEgCgFQgCgHAAgHIAAgcIAOAAIAAAcQAAAKADAFQACAEAFAAQAFABADgFQADgFAAgKQAAgJgCgFQgBgEgEAAIgEAAIgCAAIAAgKQADgCAEAAQAHAAAEADQAJAGAAAVQAAAPgGAIQgHAIgMAAQgFAAgEgCg");
	this.shape_35.setTransform(168,335.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgDAkIAEgWIAIgaIgfAAIAAgXIAPAAIAAAMIAeAAIAAAKIgIAbIgFAWg");
	this.shape_36.setTransform(159.9,335.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AALAeIgSgeIgCADIgBAGIAAAVIgPAAIAAgVIAAgEIABgFIACgCIAEgEIAFgCIgMgVIAQAAIAKAUIAGAJIADgCIABgGIAAgVIAOAAIAAAVQAAAIgDADIgDAEIgGACIAOAVg");
	this.shape_37.setTransform(154.2,335.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgbAdIAAgKIAFAAIADAAIABgBIABgGIAAgeIgGABIAAgLQAOgCANAAQAKAAAGADIAEADQACACABADIABAEIAAAHIAAAmIgOAAIAAgmQAAgLgMAAIgEABIAAAeQAAALgGAEIgFADIgHABIgHgCg");
	this.shape_38.setTransform(147.6,335.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAHAfIAAgmQAAgMgMAAIgOABIAAgLIAPgBIAKABIAGACIAFAEIACAEIABAFIAAAHIAAAmg");
	this.shape_39.setTransform(141.7,335.7);

	this.o2 = new lib.tashlums4();
	this.o2.parent = this;
	this.o2.setTransform(636.1,263.6,1,1,0,0,0,14.9,14.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AACAeIAAgkIAAgFIACgDQACgDACgBIABAAIAAAAIggAAIAAgLIAvAAIAAAKIgEACIgEAFIgBAGIAAAkg");
	this.shape_40.setTransform(146.8,402.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAHAeIAAglQAAgLgMAAIgOABIAAgLIAPgCIAKACIAGACIAFACIACAFIABAFIAAAHIAAAlg");
	this.shape_41.setTransform(138.6,402.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgaAeIgGg7IAOAAIACAdIABAAQAEAAACgBQACgBAAgGIACgVIANAAIgCAVQgCASgQAAIgDgBIABAKIAOAAQAIAAAEgGQAEgGABgKIACgaIAOAAIgDAaQAAAIgCAEQgGAVgWAAg");
	this.shape_42.setTransform(132.6,402.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAKAeIAAglQAAgLgLAAIgKAAIgIABIgEABIAAgLIALgBIAMgCIAJACIAGACQADABACABIACAFIACAFIAAAHIAAAlgAgXAeIAAgkIAOAAIAAAkg");
	this.shape_43.setTransform(123.3,402.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAGAeIAAglQABgLgLAAIgQABIAAgLIAQgCIAJACIAHACIAEACIADAFIABAFIABAHIAAAlg");
	this.shape_44.setTransform(117.5,402.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgbAeIgFg7IAOAAIADAdIABAAQAEAAABgBQACgBABgGIABgVIAMAAIgBAVQgCASgQAAIgDgBIABAKIAOAAQAIAAAEgGQAEgGABgKIACgaIAOAAIgCAaQgBAIgCAEQgGAVgWAAg");
	this.shape_45.setTransform(111.5,402.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AABAeIAAgLIALAAIAAgTQAAgJgBgEIgCgDQgCgCgFAAIgDABIgDACIgEAGIAAABIgEAmIgOAAIADgkIABgEQAAgJgEgJIAOAAIACAEIABAFIABAAIAAgCIACgCIAEgCIADgDQAEgCAEAAQADABAEACQADABACACIAEAHQACAGAAAIIAAAhg");
	this.shape_46.setTransform(104.4,402.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAKAeIAAglQAAgLgLAAIgKAAIgIABIgEABIAAgLIALgBIAMgCIAJACIAGACQADABACABIACAFIACAFIAAAHIAAAlgAgXAeIAAgkIAOAAIAAAkg");
	this.shape_47.setTransform(98.1,402.6);

	this.nani1 = new lib.lastipromise();
	this.nani1.parent = this;
	this.nani1.setTransform(306.7,195.1,1,1,0,0,0,14.9,14.9);

	this.be5_1 = new lib.arihas();
	this.be5_1.parent = this;
	this.be5_1.setTransform(306.7,401.2,1,1,0,0,0,14.9,14.9);

	this.o4_1 = new lib.tashlums2();
	this.o4_1.parent = this;
	this.o4_1.setTransform(637.1,401.2,1,1,0,0,0,14.9,14.9);

	this.nani2 = new lib.lastipromise();
	this.nani2.parent = this;
	this.nani2.setTransform(306.7,470.6,1,1,0,0,0,14.9,14.9);

	this.g2_1 = new lib.hinams();
	this.g2_1.parent = this;
	this.g2_1.setTransform(723.5,263.6,1,1,0,0,0,14.9,14.9);

	this.g1_1 = new lib.hinams();
	this.g1_1.parent = this;
	this.g1_1.setTransform(723.5,401.2,1,1,0,0,0,14.9,14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19,p:{y:43.6}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.tashlum},{t:this.freegreen},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.g1,p:{y:194.8}},{t:this.p1,p:{y:194.8}},{t:this.b1,p:{y:194.8}},{t:this.vl1,p:{x:2,text:"PixaBay",lineWidth:79,y:181.9}},{t:this.vl2,p:{y:250.7,text:"Videvo",lineWidth:68,x:2}},{t:this.vl3,p:{lineWidth:149,x:2,text:"ShutterStock"}},{t:this.vl4,p:{y:388.3,text:"pond5",lineWidth:62,x:2}},{t:this.vl5,p:{x:2,text:"Pexels",lineWidth:64}},{t:this.b2},{t:this.p2},{t:this.g2,p:{y:263.6}},{t:this.p3,p:{y:332.4}},{t:this.b3,p:{y:332.4}},{t:this.be5,p:{y:470}},{t:this.g5,p:{y:470}},{t:this.p5,p:{y:470}},{t:this.b5,p:{y:470}},{t:this.b4},{t:this.o4,p:{x:637.1,y:401.2}},{t:this.o3,p:{x:637.1,y:332.4}},{t:this.p4,p:{x:476.2,y:401.2}},{t:this.text_1}]},1).to({state:[{t:this.shape_23},{t:this.shape_19,p:{y:44.1}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.tashlum},{t:this.freegreen},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.g1,p:{y:195.1}},{t:this.p1,p:{y:195.1}},{t:this.b1,p:{y:195.1}},{t:this.vl1,p:{x:2,text:"PixaBay",lineWidth:79,y:181.9}},{t:this.vl2,p:{y:251,text:"Unsplash",lineWidth:92,x:2}},{t:this.vl3,p:{lineWidth:131,x:2,text:"ShutterStock"}},{t:this.vl4,p:{y:388.6,text:"Depositphotos",lineWidth:146,x:2}},{t:this.vl5,p:{x:2,text:"Pexels",lineWidth:64}},{t:this.b2},{t:this.p2},{t:this.g2,p:{y:263.6}},{t:this.p3,p:{y:332.4}},{t:this.b3,p:{y:332.4}},{t:this.be5,p:{y:470.6}},{t:this.g5,p:{y:470.6}},{t:this.p5,p:{y:470.6}},{t:this.b5,p:{y:470.6}},{t:this.b4},{t:this.o4,p:{x:637.1,y:401.2}},{t:this.be2},{t:this.o3,p:{x:637.1,y:332.4}},{t:this.p4,p:{x:476.2,y:401.2}}]},1).to({state:[{t:this.shape_23},{t:this.shape_19,p:{y:44.1}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.tashlum},{t:this.freegreen},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.b1,p:{y:195.1}},{t:this.be3},{t:this.vl1,p:{x:2.1,text:"Font Squirrel",lineWidth:146,y:181.9}},{t:this.vl2,p:{y:251,text:"1001 Fonts",lineWidth:119,x:1.7}},{t:this.vl3,p:{lineWidth:143,x:2.4,text:"Google Fonts"}},{t:this.vl4,p:{y:388.6,text:"DaFont",lineWidth:86,x:2.1}},{t:this.vl5,p:{x:2.9,text:"Font Space",lineWidth:127}},{t:this.b2},{t:this.pp3},{t:this.b3,p:{y:334.3}},{t:this.o4,p:{x:636.1,y:401.2}},{t:this.be5,p:{y:470.6}},{t:this.p4,p:{x:475.1,y:470.6}},{t:this.b5,p:{y:470.6}},{t:this.g4},{t:this.b4},{t:this.o3,p:{x:636.1,y:470.6}},{t:this.g5_1},{t:this.gg1},{t:this.gg2},{t:this.gg3},{t:this.pp1},{t:this.pp2}]},1).to({state:[{t:this.shape_23},{t:this.shape_19,p:{y:44.1}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.tashlum},{t:this.freegreen},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.b1,p:{y:195.8}},{t:this.vl1,p:{x:2,text:"Free Stock Music",lineWidth:194,y:182.6}},{t:this.vl2,p:{y:251,text:"AudioJungle",lineWidth:143,x:2}},{t:this.vl3,p:{lineWidth:131,x:2,text:"Audionautix"}},{t:this.vl4,p:{y:388.6,text:"Soundclick",lineWidth:140,x:2}},{t:this.vl5,p:{x:2,text:"freesound",lineWidth:124}},{t:this.b2},{t:this.g1,p:{y:334.3}},{t:this.b3,p:{y:334.3}},{t:this.g2,p:{y:401.2}},{t:this.b5,p:{y:470.6}},{t:this.g5,p:{y:470.6}},{t:this.b4},{t:this.o3,p:{x:636.1,y:401.2}},{t:this.o2},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:224.7,y:335.8}},{t:this.shape_24},{t:this.p4,p:{x:475.1,y:401.2}},{t:this.be5,p:{y:401.2}},{t:this.ggg1},{t:this.purp1},{t:this.beige1},{t:this.beige3}]},1).to({state:[{t:this.shape_23},{t:this.shape_19,p:{y:44.1}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.tashlum},{t:this.freegreen},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.g1_1},{t:this.p1,p:{y:195.1}},{t:this.b1,p:{y:195.1}},{t:this.vl1,p:{x:2,text:"w3schools",lineWidth:103,y:181.9}},{t:this.vl2,p:{y:251,text:"Sourceforge",lineWidth:120,x:2}},{t:this.vl3,p:{lineWidth:149,x:2,text:"Opensource"}},{t:this.vl4,p:{y:388.6,text:"github",lineWidth:65,x:2}},{t:this.vl5,p:{x:2,text:"codeProject",lineWidth:118}},{t:this.b2},{t:this.p2},{t:this.g2_1},{t:this.p3,p:{y:334.3}},{t:this.b3,p:{y:334.3}},{t:this.nani2},{t:this.g1,p:{y:470.6}},{t:this.p5,p:{y:470.6}},{t:this.b5,p:{y:470.6}},{t:this.b4},{t:this.o4_1},{t:this.o4,p:{x:637.1,y:334.3}},{t:this.p4,p:{x:476.2,y:401.2}},{t:this.text_1},{t:this.be5_1},{t:this.be3},{t:this.be5,p:{y:263.6}},{t:this.nani1},{t:this.o3,p:{x:637.1,y:263.6}},{t:this.g2,p:{y:334.3}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_25,p:{x:142.8,y:402.7}},{t:this.shape_40},{t:this.g5,p:{y:195.1}}]},1).wait(1));

	// hitboxes
	this.vsitehb5 = new lib.vsitehlhitbox();
	this.vsitehb5.parent = this;
	this.vsitehb5.setTransform(-56.6,439.8,1,1.008,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.vsitehb5, 0, 1, 2, false, new lib.vsitehlhitbox(), 3);

	this.vsitehb4 = new lib.vsitehlhitbox();
	this.vsitehb4.parent = this;
	this.vsitehb4.setTransform(-56.6,370.2,1,1.008,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.vsitehb4, 0, 1, 2, false, new lib.vsitehlhitbox(), 3);

	this.vsitehb3 = new lib.vsitehlhitbox();
	this.vsitehb3.parent = this;
	this.vsitehb3.setTransform(-56.6,300.6,1,1.008,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.vsitehb3, 0, 1, 2, false, new lib.vsitehlhitbox(), 3);

	this.vsitehb2 = new lib.vsitehlhitbox();
	this.vsitehb2.parent = this;
	this.vsitehb2.setTransform(-56.6,231.1,1,1.008,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.vsitehb2, 0, 1, 2, false, new lib.vsitehlhitbox(), 3);

	this.vsitehb1 = new lib.vsitehlhitbox();
	this.vsitehb1.parent = this;
	this.vsitehb1.setTransform(-57.6,161.5,1,1.008,0,0,0,0,0.2);
	new cjs.ButtonHelper(this.vsitehb1, 0, 1, 2, false, new lib.vsitehlhitbox(), 3);

	this.psitehb5 = new lib.psitehlhitbox();
	this.psitehb5.parent = this;
	this.psitehb5.setTransform(-56.6,440,1,1.008);
	new cjs.ButtonHelper(this.psitehb5, 0, 1, 2, false, new lib.psitehlhitbox(), 3);

	this.psitehb4 = new lib.psitehlhitbox();
	this.psitehb4.parent = this;
	this.psitehb4.setTransform(-56.6,370.4,1,1.008);
	new cjs.ButtonHelper(this.psitehb4, 0, 1, 2, false, new lib.psitehlhitbox(), 3);

	this.psitehb3 = new lib.psitehlhitbox();
	this.psitehb3.parent = this;
	this.psitehb3.setTransform(-56.6,300.9,1,1.008);
	new cjs.ButtonHelper(this.psitehb3, 0, 1, 2, false, new lib.psitehlhitbox(), 3);

	this.psitehb2 = new lib.psitehlhitbox();
	this.psitehb2.parent = this;
	this.psitehb2.setTransform(-56.6,231.3,1,1.008);
	new cjs.ButtonHelper(this.psitehb2, 0, 1, 2, false, new lib.psitehlhitbox(), 3);

	this.psitehb1 = new lib.psitehlhitbox();
	this.psitehb1.parent = this;
	this.psitehb1.setTransform(-57.6,161.8,1,1.008);
	new cjs.ButtonHelper(this.psitehb1, 0, 1, 2, false, new lib.psitehlhitbox(), 3);

	this.fsitehb5 = new lib.sitehlhitbox();
	this.fsitehb5.parent = this;
	this.fsitehb5.setTransform(-56.6,440,1,1.008);
	new cjs.ButtonHelper(this.fsitehb5, 0, 1, 2, false, new lib.sitehlhitbox(), 3);

	this.fsitehb4 = new lib.sitehlhitbox();
	this.fsitehb4.parent = this;
	this.fsitehb4.setTransform(-56.6,370.4,1,1.008);
	new cjs.ButtonHelper(this.fsitehb4, 0, 1, 2, false, new lib.sitehlhitbox(), 3);

	this.fsitehb3 = new lib.sitehlhitbox();
	this.fsitehb3.parent = this;
	this.fsitehb3.setTransform(-56.6,300.9,1,1.008);
	new cjs.ButtonHelper(this.fsitehb3, 0, 1, 2, false, new lib.sitehlhitbox(), 3);

	this.fsitehb2 = new lib.sitehlhitbox();
	this.fsitehb2.parent = this;
	this.fsitehb2.setTransform(-56.6,231.3,1,1.008);
	new cjs.ButtonHelper(this.fsitehb2, 0, 1, 2, false, new lib.sitehlhitbox(), 3);

	this.fsitehb1 = new lib.sitehlhitbox();
	this.fsitehb1.parent = this;
	this.fsitehb1.setTransform(-57.6,161.8,1,1.008);
	new cjs.ButtonHelper(this.fsitehb1, 0, 1, 2, false, new lib.sitehlhitbox(), 3);

	this.ssitehb5 = new lib.ssitehitbox();
	this.ssitehb5.parent = this;
	this.ssitehb5.setTransform(-56.6,440,1,1.008);
	new cjs.ButtonHelper(this.ssitehb5, 0, 1, 2, false, new lib.ssitehitbox(), 3);

	this.ssitehb4 = new lib.ssitehitbox();
	this.ssitehb4.parent = this;
	this.ssitehb4.setTransform(-56.6,370.4,1,1.008);
	new cjs.ButtonHelper(this.ssitehb4, 0, 1, 2, false, new lib.ssitehitbox(), 3);

	this.ssitehb3 = new lib.ssitehitbox();
	this.ssitehb3.parent = this;
	this.ssitehb3.setTransform(-56.6,300.9,1,1.008);
	new cjs.ButtonHelper(this.ssitehb3, 0, 1, 2, false, new lib.ssitehitbox(), 3);

	this.ssitehb2 = new lib.ssitehitbox();
	this.ssitehb2.parent = this;
	this.ssitehb2.setTransform(-56.6,231.3,1,1.008);
	new cjs.ButtonHelper(this.ssitehb2, 0, 1, 2, false, new lib.ssitehitbox(), 3);

	this.ssitehb1 = new lib.ssitehitbox();
	this.ssitehb1.parent = this;
	this.ssitehb1.setTransform(-57.6,161.8,1,1.008);
	new cjs.ButtonHelper(this.ssitehb1, 0, 1, 2, false, new lib.ssitehitbox(), 3);

	this.csitehb5 = new lib.csitehitbox();
	this.csitehb5.parent = this;
	this.csitehb5.setTransform(-56.6,440,1,1.008);
	new cjs.ButtonHelper(this.csitehb5, 0, 1, 2, false, new lib.csitehitbox(), 3);

	this.csitehb4 = new lib.csitehitbox();
	this.csitehb4.parent = this;
	this.csitehb4.setTransform(-56.6,370.4,1,1.008);
	new cjs.ButtonHelper(this.csitehb4, 0, 1, 2, false, new lib.csitehitbox(), 3);

	this.csitehb3 = new lib.csitehitbox();
	this.csitehb3.parent = this;
	this.csitehb3.setTransform(-56.6,300.9,1,1.008);
	new cjs.ButtonHelper(this.csitehb3, 0, 1, 2, false, new lib.csitehitbox(), 3);

	this.csitehb2 = new lib.csitehitbox();
	this.csitehb2.parent = this;
	this.csitehb2.setTransform(-56.6,231.3,1,1.008);
	new cjs.ButtonHelper(this.csitehb2, 0, 1, 2, false, new lib.csitehitbox(), 3);

	this.csitehb1 = new lib.csitehitbox();
	this.csitehb1.parent = this;
	this.csitehb1.setTransform(-57.6,161.8,1,1.008);
	new cjs.ButtonHelper(this.csitehb1, 0, 1, 2, false, new lib.csitehitbox(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.vsitehb1},{t:this.vsitehb2},{t:this.vsitehb3},{t:this.vsitehb4},{t:this.vsitehb5}]},1).to({state:[{t:this.psitehb1},{t:this.psitehb2},{t:this.psitehb3},{t:this.psitehb4},{t:this.psitehb5}]},1).to({state:[{t:this.fsitehb1},{t:this.fsitehb2},{t:this.fsitehb3},{t:this.fsitehb4},{t:this.fsitehb5}]},1).to({state:[{t:this.ssitehb1},{t:this.ssitehb2},{t:this.ssitehb3},{t:this.ssitehb4},{t:this.ssitehb5}]},1).to({state:[{t:this.csitehb1},{t:this.csitehb2},{t:this.csitehb3},{t:this.csitehb4},{t:this.csitehb5}]},1).wait(1));

	// highlight
	this.h2 = new lib.tashlums2();
	this.h2.parent = this;
	this.h2.setTransform(636.1,250.1,1,1,0,0,0,14.9,14.9);
	this.h2.visible = false;

	this.vshl5 = new lib.vsitehl();
	this.vshl5.parent = this;
	this.vshl5.setTransform(373.1,474.8,1,1.008,0,0,0,430.7,34.6);
	this.vshl5.visible = false;

	this.vshl4 = new lib.vsitehl();
	this.vshl4.parent = this;
	this.vshl4.setTransform(373.1,405.3,1,1.008,0,0,0,430.7,34.7);
	this.vshl4.visible = false;

	this.vshl3 = new lib.vsitehl();
	this.vshl3.parent = this;
	this.vshl3.setTransform(373.1,335.7,1,1.008,0,0,0,430.7,34.6);
	this.vshl3.visible = false;

	this.vshl2 = new lib.vsitehl();
	this.vshl2.parent = this;
	this.vshl2.setTransform(373.1,266.2,1,1.008,0,0,0,430.7,34.7);
	this.vshl2.visible = false;

	this.vshl1 = new lib.vsitehl();
	this.vshl1.parent = this;
	this.vshl1.setTransform(373.3,196.7,1,1.008,0,0,0,430.7,34.6);
	this.vshl1.visible = false;

	this.pshl5 = new lib.psitehl();
	this.pshl5.parent = this;
	this.pshl5.setTransform(373.1,474.8,1,1.008,0,0,0,430.7,34.6);
	this.pshl5.visible = false;

	this.pshl4 = new lib.psitehl();
	this.pshl4.parent = this;
	this.pshl4.setTransform(373.1,405.3,1,1.008,0,0,0,430.7,34.7);
	this.pshl4.visible = false;

	this.pshl3 = new lib.psitehl();
	this.pshl3.parent = this;
	this.pshl3.setTransform(373.1,335.7,1,1.008,0,0,0,430.7,34.6);
	this.pshl3.visible = false;

	this.pshl2 = new lib.psitehl();
	this.pshl2.parent = this;
	this.pshl2.setTransform(373.1,266.2,1,1.008,0,0,0,430.7,34.7);
	this.pshl2.visible = false;

	this.pshl1 = new lib.psitehl();
	this.pshl1.parent = this;
	this.pshl1.setTransform(373.3,196.7,1,1.008,0,0,0,430.7,34.6);
	this.pshl1.visible = false;

	this.fshl5 = new lib.fsitehl();
	this.fshl5.parent = this;
	this.fshl5.setTransform(373.1,474.8,1,1.008,0,0,0,430.7,34.6);
	this.fshl5.visible = false;

	this.fshl4 = new lib.fsitehl();
	this.fshl4.parent = this;
	this.fshl4.setTransform(373.1,405.3,1,1.008,0,0,0,430.7,34.7);
	this.fshl4.visible = false;

	this.fshl3 = new lib.fsitehl();
	this.fshl3.parent = this;
	this.fshl3.setTransform(373.1,335.7,1,1.008,0,0,0,430.7,34.6);
	this.fshl3.visible = false;

	this.fshl2 = new lib.fsitehl();
	this.fshl2.parent = this;
	this.fshl2.setTransform(373.1,266.2,1,1.008,0,0,0,430.7,34.7);
	this.fshl2.visible = false;

	this.fshl1 = new lib.fsitehl();
	this.fshl1.parent = this;
	this.fshl1.setTransform(373.3,196.7,1,1.008,0,0,0,430.7,34.6);
	this.fshl1.visible = false;

	this.purp5 = new lib.ishis3copy();
	this.purp5.parent = this;
	this.purp5.setTransform(475.1,470.6,1,1,0,0,0,14.9,14.9);

	this.purp3 = new lib.ishis3copy();
	this.purp3.parent = this;
	this.purp3.setTransform(475.1,334.3,1,1,0,0,0,14.9,14.9);

	this.pd2 = new lib.ishis3();
	this.pd2.parent = this;
	this.pd2.setTransform(475.1,263.6,1,1,0,0,0,14.9,14.9);

	this.sshl5 = new lib.ssitehl();
	this.sshl5.parent = this;
	this.sshl5.setTransform(373.1,474.8,1,1.008,0,0,0,430.7,34.6);
	this.sshl5.visible = false;

	this.sshl4 = new lib.ssitehl();
	this.sshl4.parent = this;
	this.sshl4.setTransform(373.1,405.3,1,1.008,0,0,0,430.7,34.7);
	this.sshl4.visible = false;

	this.sshl3 = new lib.ssitehl();
	this.sshl3.parent = this;
	this.sshl3.setTransform(373.1,335.7,1,1.008,0,0,0,430.7,34.6);
	this.sshl3.visible = false;

	this.sshl2 = new lib.ssitehl();
	this.sshl2.parent = this;
	this.sshl2.setTransform(373.1,266.2,1,1.008,0,0,0,430.7,34.7);
	this.sshl2.visible = false;

	this.sshl1 = new lib.ssitehl();
	this.sshl1.parent = this;
	this.sshl1.setTransform(373.3,196.7,1,1.008,0,0,0,430.7,34.6);
	this.sshl1.visible = false;

	this.cshl5 = new lib.csitehl();
	this.cshl5.parent = this;
	this.cshl5.setTransform(373.1,474.8,1,1.008,0,0,0,430.7,34.6);
	this.cshl5.visible = false;

	this.cshl4 = new lib.csitehl();
	this.cshl4.parent = this;
	this.cshl4.setTransform(373.1,405.3,1,1.008,0,0,0,430.7,34.7);
	this.cshl4.visible = false;

	this.cshl3 = new lib.csitehl();
	this.cshl3.parent = this;
	this.cshl3.setTransform(373.1,335.7,1,1.008,0,0,0,430.7,34.6);
	this.cshl3.visible = false;

	this.cshl2 = new lib.csitehl();
	this.cshl2.parent = this;
	this.cshl2.setTransform(373.1,266.2,1,1.008,0,0,0,430.7,34.7);
	this.cshl2.visible = false;

	this.cshl1 = new lib.csitehl();
	this.cshl1.parent = this;
	this.cshl1.setTransform(373.3,196.7,1,1.008,0,0,0,430.7,34.6);
	this.cshl1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.vshl1},{t:this.vshl2},{t:this.vshl3},{t:this.vshl4},{t:this.vshl5},{t:this.h2}]},1).to({state:[{t:this.pshl1},{t:this.pshl2},{t:this.pshl3},{t:this.pshl4},{t:this.pshl5}]},1).to({state:[{t:this.fshl1},{t:this.fshl2},{t:this.fshl3},{t:this.fshl4},{t:this.fshl5}]},1).to({state:[{t:this.sshl1},{t:this.sshl2},{t:this.sshl3},{t:this.sshl4},{t:this.sshl5},{t:this.pd2},{t:this.purp3},{t:this.purp5}]},1).to({state:[{t:this.cshl1},{t:this.cshl2},{t:this.cshl3},{t:this.cshl4},{t:this.cshl5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib._interface = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//vars//
		
		var clicked=0;
		//main menu hovers//
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		this.sirtonim.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			
			this.hl1.visible=true;
			
		}
		
		
		stage.enableMouseOver(frequency);
		this.sirtonim.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOutHandler()
		{
		if(clicked!=1){
			this.hl1.visible=false;
		}
		}
		
		var frequency = 15;
		stage.enableMouseOver(frequency);
		this.sirtonim2.addEventListener("mouseover", fl_MouseOverHandler_4.bind(this));
		
		function fl_MouseOverHandler_4()
		{
			
			this.hl2.visible=true;
			
		}
		
		
		stage.enableMouseOver(frequency);
		this.sirtonim2.addEventListener("mouseout", fl_MouseOutHandler3.bind(this));
		
		function fl_MouseOutHandler3()
		{
		if(clicked!=2){
			this.hl2.visible=false;
		}
		}
		
		var frequency = 15;
		stage.enableMouseOver(frequency);
		this.sirtonim3.addEventListener("mouseover", fl_MouseOverHandler_5.bind(this));
		
		function fl_MouseOverHandler_5()
		{
			
			this.hl3.visible=true;
			
		}
		
		
		stage.enableMouseOver(frequency);
		this.sirtonim3.addEventListener("mouseout", fl_MouseOutHandler6.bind(this));
		
		function fl_MouseOutHandler6()
		{
		if(clicked!=3){
			this.hl3.visible=false;
		}
		}
		
		var frequency = 15;
		stage.enableMouseOver(frequency);
		this.sirtonim4.addEventListener("mouseover", fl_MouseOverHandler_7.bind(this));
		
		function fl_MouseOverHandler_7()
		{
			
			this.hl4.visible=true;
			
		}
		
		
		stage.enableMouseOver(frequency);
		this.sirtonim4.addEventListener("mouseout", fl_MouseOutHandler8.bind(this));
		
		function fl_MouseOutHandler8()
		{
		if(clicked!=4){
			this.hl4.visible=false;
		}
		}
		
		var frequency = 15;
		stage.enableMouseOver(frequency);
		this.sirtonim5.addEventListener("mouseover", fl_MouseOverHandler_9.bind(this));
		
		function fl_MouseOverHandler_9()
		{
			
			this.hl5.visible=true;
			
		}
		
		
		stage.enableMouseOver(frequency);
		this.sirtonim5.addEventListener("mouseout", fl_MouseOutHandler11.bind(this));
		
		function fl_MouseOutHandler11()
		{
		if(clicked!=5){
			this.hl5.visible=false;
		}
		}
		
		
		//clicks//
		
		this.sirtonim.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			clicked=1;
			this.text3.visible=false;
			this.ins.gotoAndStop(1);
			this.hl2.visible=false;
			this.hl3.visible=false;
			this.hl4.visible=false;
			this.hl5.visible=false;
			this.kriya.visible=false;
		}
		
		this.sirtonim2.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			clicked=2;
			this.text3.visible=false;
			this.ins.gotoAndStop(2);
			this.hl1.visible=false;
			this.hl3.visible=false;
			this.hl4.visible=false;
			this.hl5.visible=false;
			this.kriya.visible=false;
			
		}
		
		this.sirtonim3.addEventListener("click", cfontim.bind(this));
		
		function cfontim()
		{
			clicked=3;
			this.text3.visible=false;
			this.ins.gotoAndStop(3);
			this.hl1.visible=false;
			this.hl2.visible=false;
			this.hl4.visible=false;
			this.hl5.visible=false;
			this.kriya.visible=false;
		}
		
		this.sirtonim4.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			clicked=4;
			this.text3.visible=false;
			this.ins.gotoAndStop(4);
			this.hl1.visible=false;
			this.hl2.visible=false;
			this.hl3.visible=false;
			this.hl5.visible=false;
			this.kriya.visible=false;
		}
		
		this.sirtonim5.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
			clicked=5;
			this.text3.visible=false;
			this.ins.gotoAndStop(5);
			this.hl1.visible=false;
			this.hl2.visible=false;
			this.hl3.visible=false;
			this.hl4.visible=false;
			this.kriya.visible=false;
		}
		
		//info//
		
		
		
			//חינם//
			stage.enableMouseOver(10);
		this.freegreen.addEventListener("mouseover", freehover.bind(this));
		
		function freehover()
		{
		
			
			if (clicked!=0)
			{
		    this.freenfo.visible=true;
				this.freenfo.varvan.text="אתרים בעלי תוכן חינמי";
				
			
			if(clicked==1){
			    this.ins.vl3.alpha=0.1;
				this.ins.vl4.alpha=0.1;
				this.ins.b3.alpha=0.1;
				this.ins.p3.alpha=0.1;
				this.ins.b4.alpha=0.1;
				this.ins.p4.alpha=0.1;
				this.ins.o3.alpha=0.1;
				this.ins.o4.alpha=0.1;
				
			}
			if(clicked==2){
				this.ins.vl3.alpha=0.1;
				this.ins.vl4.alpha=0.1;
			this.ins.b3.alpha=0.1;
				this.ins.p3.alpha=0.1;
				this.ins.o3.alpha=0.1;
				this.ins.b4.alpha=0.1;
				this.ins.p4.alpha=0.1;
				this.ins.o4.alpha=0.1;
			}
		if(clicked==4)
		{
			this.ins.vl2.alpha=0.1;
			this.ins.b2.alpha=0.1;
			this.ins.pd2.alpha=0.1;
			this.ins.o2.alpha=0.1;
		}
				
		
				
				}
			}
			
		
		
		
		stage.enableMouseOver(45);
		this.freegreen.addEventListener("mouseout", freeout.bind(this));
		
		function freeout()
		{
			
			
			this.freenfo.visible=false;
			if(clicked==1){
			this.ins.vl3.alpha=1;
				this.ins.vl4.alpha=1;
				this.ins.b3.alpha=1;
				this.ins.p3.alpha=1;
				this.ins.b4.alpha=1;
				this.ins.p4.alpha=1;
			this.ins.o3.alpha=1;
			this.ins.o4.alpha=1;
		
			}
				if(clicked==2){
				this.ins.vl4.alpha=1;
				this.ins.vl3.alpha=1;
				this.ins.p3.alpha=1;
				this.ins.b3.alpha=1;
				this.ins.o3.alpha=1;
				this.ins.b4.alpha=1;
				this.ins.p4.alpha=1;
				this.ins.o4.alpha=1;
				
					
		
			}
		if(clicked==4)
		{
			this.ins.vl2.alpha=1;
				this.ins.b2.alpha=1;
			this.ins.pd2.alpha=1;
			this.ins.o2.alpha=1;
		}
			}
		
		
		
		
		this.freegreen.addEventListener("click", freeclick.bind(this));
		
		function freeclick() {
			if (clicked!=0){
			
		}
		}
		
		
		//תשלום//
		
			stage.enableMouseOver(10);
		this.freeorange.addEventListener("mouseover", pricehover.bind(this));
		
		function pricehover()
		{
		
			
			if (clicked!=0)
			{
		    this.freenfo2.visible=true;
				this.freenfo2.varvan.text="אתרים בעלי תוכן בתשלום";
					if (clicked==1)
			{
					
				this.ins.vl1.alpha=0.1;
				this.ins.vl2.alpha=0.1;
				this.ins.vl5.alpha=0.1;
				this.ins.b1.alpha=0.1;
				this.ins.p1.alpha=0.1;
				this.ins.g1.alpha=0.1;
				this.ins.g2.alpha=0.1;
				this.ins.b2.alpha=0.1;
				this.ins.p2.alpha=0.1;		
				this.ins.b5.alpha=0.1;
				this.ins.p5.alpha=0.1;
				this.ins.g5.alpha=0.1;
				this.ins.be5.alpha=0.1;
				this.ins.g2.alpha=0.1;
			}
			if(clicked==2)
				{
					this.ins.vl1.alpha=0.1;
					this.ins.vl2.alpha=0.1;
					this.ins.vl5.alpha=0.1;
					this.ins.b1.alpha=0.1;
					this.ins.p1.alpha=0.1;
					this.ins.g1.alpha=0.1;
					this.ins.b2.alpha=0.1;
					this.ins.p2.alpha=0.1;
					this.ins.g2.alpha=0.1;
					this.ins.be2.alpha=0.1;
					this.ins.be5.alpha=0.1;
					this.ins.b5.alpha=0.1;
					this.ins.p5.alpha=0.1;
					this.ins.g5.alpha=0.1;
				}
				if(clicked==3)
				{
					this.ins.vl1.alpha=0.1;
					this.ins.vl2.alpha=0.1;
					this.ins.vl3.alpha=0.1;
					this.ins.pp3.alpha=0.1;
					this.ins.pp1.alpha=0.1;
					this.ins.pp2.alpha=0.1;
					this.ins.b1.alpha=0.1;
					this.ins.b2.alpha=0.1;
					this.ins.b3.alpha=0.1;
					this.ins.gg1.alpha=0.1;
					this.ins.gg2.alpha=0.1;
					this.ins.be3.alpha=0.1;
					this.ins.gg3.alpha=0.1;
					}
					if(clicked==4)
					{
						this.ins.vl1.alpha=0.1;
						this.ins.vl3.alpha=0.1;
						this.ins.vl5.alpha=0.1;
						this.ins.b1.alpha=0.1;
						this.ins.b3.alpha=0.1;
						this.ins.b5.alpha=0.1;
						this.ins.p5.alpha=0.1;
						this.ins.g1.alpha=0.1;
						this.ins.g5.alpha=0.1;
						this.ins.ggg1.alpha=0.1;
						this.ins.purp1.alpha=0.1;
						this.ins.purp3.alpha=0.1;
						this.ins.purp5.alpha=0.1;
						this.ins.beige1.alpha=0.1;
						this.ins.beige3.alpha=0.1;
						}
						if (clicked==5){
							this.ins.vl1.alpha=0.1;
							this.ins.vl5.alpha=0.1;
							this.ins.p1.alpha=0.1;
							this.ins.b1.alpha=0.1;
							this.ins.g1.alpha=0.1;
							this.ins.p5.alpha=0.1;
							this.ins.b5.alpha=0.1;
							this.ins.g5.alpha=0.1;
							this.ins.nani1.alpha=0.1;
							this.ins.nani2.alpha=0.1;
						}
		}
		}
		
		
		stage.enableMouseOver(45);
		this.freeorange.addEventListener("mouseout", priceout.bind(this));
		
		function priceout()
		{
			
			this.freenfo2.visible=false;
			if (clicked==1){
			this.ins.vl3.alpha=1;
				this.ins.vl1.alpha=1;
				this.ins.vl2.alpha=1;
				this.ins.vl5.alpha=1;
				this.ins.b1.alpha=1;
				this.ins.p1.alpha=1;
				this.ins.g1.alpha=1;
				this.ins.g2.alpha=1;
				this.ins.b2.alpha=1;
				this.ins.p2.alpha=1;
				this.ins.b5.alpha=1;
				this.ins.p5.alpha=1;
				this.ins.g5.alpha=1;
				this.ins.be5.alpha=1;
				this.ins.g2.alpha=1;
			}
				if(clicked==2)
				{
					this.ins.vl1.alpha=1;
					this.ins.vl2.alpha=1;
					this.ins.vl5.alpha=1;
							this.ins.b1.alpha=1;
					this.ins.p1.alpha=1;
					this.ins.g1.alpha=1;
					this.ins.b2.alpha=1;
					this.ins.p2.alpha=1;
					this.ins.g2.alpha=1;
					this.ins.be2.alpha=1;
					this.ins.be5.alpha=1;
					this.ins.b5.alpha=1;
					this.ins.p5.alpha=1;
					this.ins.g5.alpha=1;
				}
				if(clicked==3)
				{
				this.ins.vl1.alpha=1;
					this.ins.vl2.alpha=1;
					this.ins.vl3.alpha=1;
					this.ins.pp3.alpha=1;
					this.ins.pp1.alpha=1;
					this.ins.pp2.alpha=1;
					this.ins.b1.alpha=1;
					this.ins.b2.alpha=1;
					this.ins.b3.alpha=1;
					this.ins.gg1.alpha=1;
					this.ins.gg2.alpha=1;
					this.ins.be3.alpha=1;
					this.ins.gg3.alpha=1;
					}
					if(clicked==4)
					{
						this.ins.vl1.alpha=1;
						this.ins.vl3.alpha=1;
						this.ins.vl5.alpha=1;
						this.ins.b1.alpha=1;
						this.ins.b3.alpha=1;
						this.ins.b5.alpha=1;
						this.ins.p5.alpha=1;
						this.ins.g1.alpha=1;
						this.ins.g5.alpha=1;
						this.ins.ggg1.alpha=1;
						this.ins.purp1.alpha=1;
						this.ins.purp3.alpha=1;
						this.ins.purp5.alpha=1;
						this.ins.beige1.alpha=1;
						this.ins.beige3.alpha=1;
						}
			if (clicked==5){
							this.ins.vl1.alpha=1;
							this.ins.vl5.alpha=1;
				        	this.ins.p1.alpha=1;
							this.ins.b1.alpha=1;
							this.ins.g1.alpha=1;
							this.ins.p5.alpha=1;
							this.ins.b5.alpha=1;
							this.ins.g5.alpha=1;
				this.ins.nani1.alpha=1;
							this.ins.nani2.alpha=1;
						}
		}
		
		
		
		this.freegreen.addEventListener("click", priceclick.bind(this));
		
		function priceclick() {
			if (clicked!=0){
			
		}
		}
		
		//שימוש אישי//
		
		stage.enableMouseOver(10);
		this.freepurple.addEventListener("mouseover", ishihover.bind(this));
		
		function ishihover()
		{
		
			
			if (clicked!=0)
			{
		    this.freenfo3.visible=true;
				this.freenfo3.varvan.text="אתרים בעלי תוכן לשימוש אישי";
				
		if(clicked==3){
			this.ins.vl4.alpha=0.1;
			this.ins.b4.alpha=0.1;
			this.ins.o4.alpha=0.1;
			this.ins.g4.alpha=0.1;
		}
			
		}
		}
		
		
		stage.enableMouseOver(35);
		this.freepurple.addEventListener("mouseout", barb.bind(this));
		
		function barb()
		{
			
			this.freenfo3.visible=false;
		
			if(clicked==3){
			this.ins.vl4.alpha=1;
			this.ins.b4.alpha=1;
			this.ins.o4.alpha=1;
			this.ins.g4.alpha=1;
		}
		
		}
		
		
		
		this.freepurple.addEventListener("click", ishiclick.bind(this));
		
		function ishiclick() {
			if (clicked!=0){
			
		}
		}
		
		//עסקי//
		
		stage.enableMouseOver(10);
		this.freeblue.addEventListener("mouseover", iskihover.bind(this));
		
		function iskihover()
		{
		
			
			if (clicked!=0)
			{
		    this.freenfo4.visible=true;
				this.freenfo4.varvan.text="אתרים בעלי תוכן לשימוש עסקי";
		}
		}
		
		
		stage.enableMouseOver(10);
		this.freeblue.addEventListener("mouseout", bar2.bind(this));
		
		function bar2()
		{
			
			
			this.freenfo4.visible=false;
		}
		
		
		
		this.freeblue.addEventListener("click", busclick.bind(this));
		
		function busclick() {
			if (clicked!=0){
			
		}
		}
		
		// ניתן לעריכה //
		
		stage.enableMouseOver(10);
		this.freebeige.addEventListener("mouseover", arihahover.bind(this));
		
		function arihahover()
		{
		
			
			if (clicked!=0)
			{
		    this.freenfo5.visible=true;
				this.freenfo5.varvan.text="תוכן שניתן לבצע בו שינויים";
							if(clicked==1)
			{
					
				this.ins.vl1.alpha=0.1;
				this.ins.vl2.alpha=0.1;
				this.ins.vl3.alpha=0.1;
				this.ins.vl4.alpha=0.1;
				this.ins.b1.alpha=0.1;
				this.ins.p1.alpha=0.1;
				this.ins.g1.alpha=0.1;
				this.ins.b2.alpha=0.1;
				this.ins.p2.alpha=0.1;
				this.ins.g2.alpha=0.1;
				this.ins.b3.alpha=0.1;
				this.ins.p3.alpha=0.1;
				this.ins.o3.alpha=0.1;
				this.ins.b4.alpha=0.1;
				this.ins.p4.alpha=0.1;
				this.ins.o4.alpha=0.1;
				
				
			
			}
			if (clicked==2)
			{
			this.ins.vl1.alpha=0.1;
				this.ins.vl3.alpha=0.1;
				this.ins.vl4.alpha=0.1;
				this.ins.b1.alpha=0.1;
				this.ins.p1.alpha=0.1;
				this.ins.g1.alpha=0.1;
				this.ins.b3.alpha=0.1;
				this.ins.p3.alpha=0.1;
				this.ins.o3.alpha=0.1;
				this.ins.b4.alpha=0.1;
				this.ins.p4.alpha=0.1;
				this.ins.o4.alpha=0.1;
			}
			if(clicked==3){
				this.ins.vl1.alpha=0.1;
				this.ins.vl2.alpha=0.1;
				this.ins.vl4.alpha=0.1;
				this.ins.b1.alpha=0.1;
				this.ins.b2.alpha=0.1;
				this.ins.b4.alpha=0.1;
				this.ins.pp1.alpha=0.1;
				this.ins.pp2.alpha=0.1;
				this.ins.gg1.alpha=0.1;
				this.ins.g4.alpha=0.1;
				this.ins.o4.alpha=0.1;
				this.ins.gg2.alpha=0.1;
				
			}
			if(clicked==4){
				this.ins.vl2.alpha=0.1;
				this.ins.vl5.alpha=0.1;
				this.ins.pd2.alpha=0.1;
				this.ins.b2.alpha=0.1;
				this.ins.o2.alpha=0.1;
				this.ins.p5.alpha=0.1;
				this.ins.b5.alpha=0.1;
				this.ins.g5.alpha=0.1;
			}
		}
		}
		
		
		stage.enableMouseOver(10);
		this.freebeige.addEventListener("mouseout", bar3.bind(this));
		
		function bar3()
		{
			
			
			this.freenfo5.visible=false;
			if (clicked==1){
				this.ins.vl1.alpha=1;
				this.ins.vl2.alpha=1;
				this.ins.vl3.alpha=1;
				this.ins.vl4.alpha=1;
				this.ins.b1.alpha=1;
				this.ins.p1.alpha=1;
				this.ins.g1.alpha=1;
				this.ins.b2.alpha=1;
				this.ins.p2.alpha=1;
				this.ins.g2.alpha=1;
				this.ins.b3.alpha=1;
				this.ins.p3.alpha=1;
				this.ins.o3.alpha=1;
				this.ins.b4.alpha=1;
				this.ins.p4.alpha=1;
				this.ins.o4.alpha=1;
			}
				if (clicked==2)
			{
			this.ins.vl1.alpha=1;
				this.ins.vl3.alpha=1;
				this.ins.vl4.alpha=1;
					this.ins.b1.alpha=1;
				this.ins.p1.alpha=1;
				this.ins.g1.alpha=1;
				this.ins.b3.alpha=1;
				this.ins.p3.alpha=1;
				this.ins.o3.alpha=1;
				this.ins.b4.alpha=1;
				this.ins.p4.alpha=1;
				this.ins.o4.alpha=1;
				
			}
			if(clicked==3){
				this.ins.vl1.alpha=1;
				this.ins.vl2.alpha=1;
				this.ins.vl4.alpha=1;
				this.ins.b1.alpha=1;
				this.ins.b2.alpha=1;
				this.ins.b4.alpha=1;
				this.ins.pp1.alpha=1;
				this.ins.pp2.alpha=1;
				this.ins.gg1.alpha=1;
				this.ins.g4.alpha=1;
				this.ins.o4.alpha=1;
				this.ins.gg2.alpha=1;
				
			}
			if(clicked==4){
				this.ins.vl2.alpha=1;
				this.ins.vl5.alpha=1;
				this.ins.pd2.alpha=1;
				this.ins.b2.alpha=1;
				this.ins.o2.alpha=1;
					this.ins.p5.alpha=1;
				this.ins.b5.alpha=1;
				this.ins.g5.alpha=1;
			}
		}
		
		
		
		
		this.freebeige.addEventListener("click", busclick2.bind(this));
		
		function busclick2() {
			if (clicked!=0){
			
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.freenfo5 = new lib.info1();
	this.freenfo5.parent = this;
	this.freenfo5.setTransform(360,243,1,1,0,0,0,85,15);
	this.freenfo5.visible = false;

	this.freenfo4 = new lib.info1();
	this.freenfo4.parent = this;
	this.freenfo4.setTransform(452,243,1,1,0,0,0,85,15);
	this.freenfo4.visible = false;

	this.freenfo3 = new lib.info1();
	this.freenfo3.parent = this;
	this.freenfo3.setTransform(529.6,242.5,1,1,0,0,0,85,15);
	this.freenfo3.visible = false;

	this.freenfo2 = new lib.info1();
	this.freenfo2.parent = this;
	this.freenfo2.setTransform(681.6,243.5,1,1,0,0,0,85,15);
	this.freenfo2.visible = false;

	this.freenfo = new lib.info1();
	this.freenfo.parent = this;
	this.freenfo.setTransform(785,245,1,1,0,0,0,85,15);
	this.freenfo.visible = false;

	this.freebeige = new lib.hinambutt();
	this.freebeige.parent = this;
	this.freebeige.setTransform(357,191,1,1,0,0,0,32.5,32.5);
	new cjs.ButtonHelper(this.freebeige, 0, 1, 2, false, new lib.hinambutt(), 3);

	this.freeblue = new lib.hinambutt();
	this.freeblue.parent = this;
	this.freeblue.setTransform(440,191,1,1,0,0,0,32.5,32.5);
	new cjs.ButtonHelper(this.freeblue, 0, 1, 2, false, new lib.hinambutt(), 3);

	this.freepurple = new lib.hinambutt();
	this.freepurple.parent = this;
	this.freepurple.setTransform(527,191.3,1,1,0,0,0,32.5,32.5);
	new cjs.ButtonHelper(this.freepurple, 0, 1, 2, false, new lib.hinambutt(), 3);

	this.freeorange = new lib.hinambutt();
	this.freeorange.parent = this;
	this.freeorange.setTransform(685.6,192.3,1,1,0,0,0,32.5,32.5);
	new cjs.ButtonHelper(this.freeorange, 0, 1, 2, false, new lib.hinambutt(), 3);

	this.freegreen = new lib.hinambutt();
	this.freegreen.parent = this;
	this.freegreen.setTransform(772,192,1,1,0,0,0,32.5,32.5);
	new cjs.ButtonHelper(this.freegreen, 0, 1, 2, false, new lib.hinambutt(), 3);

	this.text3 = new lib.Tween3();
	this.text3.parent = this;
	this.text3.setTransform(596.9,148.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text3},{t:this.freegreen},{t:this.freeorange},{t:this.freepurple},{t:this.freeblue},{t:this.freebeige},{t:this.freenfo},{t:this.freenfo2},{t:this.freenfo3},{t:this.freenfo4},{t:this.freenfo5}]}).wait(1));

	// insides
	this.ins = new lib.insides();
	this.ins.parent = this;
	this.ins.setTransform(436.2,331.9,1,1,0,0,0,386.9,246.7);

	this.timeline.addTween(cjs.Tween.get(this.ins).wait(1));

	// Actions
	this.kriya = new lib.Tween4();
	this.kriya.parent = this;
	this.kriya.setTransform(668,-49.7);

	this.timeline.addTween(cjs.Tween.get(this.kriya).wait(1));

	// categories
	this.movieClip_1 = new lib.symbolgories();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(419.7,39.4,1,1,0,0,0,403.7,26.4);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

	// highlights
	this.hl5 = new lib.highlight5();
	this.hl5.parent = this;
	this.hl5.setTransform(80.1,40.8,0.935,1,0,0,0,93.4,40.8);
	this.hl5.visible = false;

	this.hl4 = new lib.highlight4();
	this.hl4.parent = this;
	this.hl4.setTransform(254.8,40.8,1.208,1,0,0,0,72,40.8);
	this.hl4.visible = false;

	this.hl3 = new lib.highlight3();
	this.hl3.parent = this;
	this.hl3.setTransform(425.8,40.8,1.066,1,0,0,0,81.6,40.8);
	this.hl3.visible = false;

	this.hl2 = new lib.highlight2();
	this.hl2.parent = this;
	this.hl2.setTransform(597.2,40.8,1.007,1,0,0,0,86.7,40.8);
	this.hl2.visible = false;

	this.hl1 = new lib.highlight1();
	this.hl1.parent = this;
	this.hl1.setTransform(768.1,40.8,0.906,1,0,0,0,96.3,40.8);
	this.hl1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hl1},{t:this.hl2},{t:this.hl3},{t:this.hl4},{t:this.hl5}]}).wait(1));

	// hitbox
	this.sirtonim5 = new lib.sirtonim();
	this.sirtonim5.parent = this;
	this.sirtonim5.setTransform(82.6,39.6,1.001,1,0,0,0,87.5,36.9);
	new cjs.ButtonHelper(this.sirtonim5, 0, 1, 2, false, new lib.sirtonim(), 3);

	this.sirtonim4 = new lib.sirtonim();
	this.sirtonim4.parent = this;
	this.sirtonim4.setTransform(242.8,39.6,0.811,1,0,0,0,87.7,36.9);
	new cjs.ButtonHelper(this.sirtonim4, 0, 1, 2, false, new lib.sirtonim(), 3);

	this.sirtonim3 = new lib.sirtonim();
	this.sirtonim3.parent = this;
	this.sirtonim3.setTransform(403.6,39.6,1.011,1,0,0,0,87.6,36.9);
	new cjs.ButtonHelper(this.sirtonim3, 0, 1, 2, false, new lib.sirtonim(), 3);

	this.sirtonim2 = new lib.sirtonim();
	this.sirtonim2.parent = this;
	this.sirtonim2.setTransform(582.2,39.6,1,1,0,0,0,87.6,36.9);
	new cjs.ButtonHelper(this.sirtonim2, 0, 1, 2, false, new lib.sirtonim(), 3);

	this.sirtonim = new lib.sirtonim();
	this.sirtonim.parent = this;
	this.sirtonim.setTransform(762.9,39.6,1.044,1,0,0,0,87.6,36.9);
	new cjs.ButtonHelper(this.sirtonim, 0, 1, 2, false, new lib.sirtonim(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sirtonim},{t:this.sirtonim2},{t:this.sirtonim3},{t:this.sirtonim4},{t:this.sirtonim5}]}).wait(1));

	// lines
	this.instance = new lib.line();
	this.instance.parent = this;
	this.instance.setTransform(420,82,1,1,0,0,0,424.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.instance_1 = new lib.background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(422.7,295.9,1,1,0,0,0,430.4,295.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(51,51,51,1)",1,1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib._interface, new cjs.Rectangle(-11.7,-64,891.8,665), null);


// stage content:
(lib.interactive_zhuyot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_74 = function() {
		//קישור לאתר שלנו//
		this.button_3.addEventListener("click", atarzhuyot.bind(this));
		
		function atarzhuyot() {
			window.open("https://www.google.co.il/#q=%D7%90%D7%AA%D7%A8+%D7%9E%D7%9E%D7%A9+%D7%98%D7%95%D7%91+%D7%9C%D7%96%D7%9B%D7%95%D7%99%D7%95%D7%AA+%D7%99%D7%95%D7%A6%D7%A8%D7%99%D7%9D", "_blank");
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(74).call(this.frame_74).wait(1));

	// buttons
	this.button_3 = new lib.kishuratar();
	this.button_3.parent = this;
	this.button_3.setTransform(656,83,1,1,0,0,0,53,13.5);
	this.button_3._off = true;
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.kishuratar(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(74).to({_off:false},0).wait(1));

	// כותרת
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(981.7,49.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:775.3,alpha:1},20).to({x:729.6,y:49},5).to({startPosition:0},20).to({startPosition:0},7).to({startPosition:0},21).wait(1));

	// זכויות
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(928.6,82.5);
	this.instance_1.alpha = 0.16;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({x:730,y:82,alpha:1},21).to({startPosition:0},7).to({startPosition:0},21).wait(1));

	// פעולה
	this.kriya = new lib.Tween4();
	this.kriya.parent = this;
	this.kriya.setTransform(696.9,153.3);
	this.kriya.alpha = 0.09;
	this.kriya._off = true;

	this.timeline.addTween(cjs.Tween.get(this.kriya).wait(70).to({_off:false},0).to({_off:true},4).wait(1));

	// layout
	this.instance_2 = new lib._interface();
	this.instance_2.parent = this;
	this.instance_2.setTransform(481.7,470.2,0.909,0.909,0,0,0,430.4,295.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({alpha:1},17).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(559.5,543,819,614);
// library properties:
lib.properties = {
	id: '7EEF9E16D927164D99BBA80821AAB618',
	width: 960,
	height: 800,
	fps: 25,
	color: "#00FFCC",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/Interactive_atlas_.png", id:"Interactive_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7EEF9E16D927164D99BBA80821AAB618'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;