// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__13068__auto___26550 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26551 = arguments.length;
var i__13023__auto___26552 = (0);
while(true){
if((i__13023__auto___26552 < len__13022__auto___26551)){
args__13029__auto__.push((arguments[i__13023__auto___26552]));

var G__26553 = (i__13023__auto___26552 + (1));
i__13023__auto___26552 = G__26553;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(form)], 0)))),cljs.core.meta(form)):(function (){var x__12697__auto__ = form;
return cljs.core._conj((function (){var x__12697__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})());
var G__26554 = threaded;
var G__26555 = cljs.core.next(forms__$1);
x__$1 = G__26554;
forms__$1 = G__26555;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq26546){
var G__26547 = cljs.core.first(seq26546);
var seq26546__$1 = cljs.core.next(seq26546);
var G__26548 = cljs.core.first(seq26546__$1);
var seq26546__$2 = cljs.core.next(seq26546__$1);
var G__26549 = cljs.core.first(seq26546__$2);
var seq26546__$3 = cljs.core.next(seq26546__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__26547,G__26548,G__26549,seq26546__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__13068__auto___26560 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26561 = arguments.length;
var i__13023__auto___26562 = (0);
while(true){
if((i__13023__auto___26562 < len__13022__auto___26561)){
args__13029__auto__.push((arguments[i__13023__auto___26562]));

var G__26563 = (i__13023__auto___26562 + (1));
i__13023__auto___26562 = G__26563;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = cljs.core.first(form);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.next(form),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.meta(form)):(function (){var x__12697__auto__ = form;
return cljs.core._conj((function (){var x__12697__auto____$1 = x__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})());
var G__26564 = threaded;
var G__26565 = cljs.core.next(forms__$1);
x__$1 = G__26564;
forms__$1 = G__26565;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq26556){
var G__26557 = cljs.core.first(seq26556);
var seq26556__$1 = cljs.core.next(seq26556);
var G__26558 = cljs.core.first(seq26556__$1);
var seq26556__$2 = cljs.core.next(seq26556__$1);
var G__26559 = cljs.core.first(seq26556__$2);
var seq26556__$3 = cljs.core.next(seq26556__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__26557,G__26558,G__26559,seq26556__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__13068__auto___26573 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__26572 = arguments.length;
switch (G__26572) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___26575 = arguments.length;
var i__13023__auto___26576 = (0);
while(true){
if((i__13023__auto___26576 < len__13022__auto___26575)){
args_arr__13045__auto__.push((arguments[i__13023__auto___26576]));

var G__26577 = (i__13023__auto___26576 + (1));
i__13023__auto___26576 = G__26577;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq26567){
var G__26568 = cljs.core.first(seq26567);
var seq26567__$1 = cljs.core.next(seq26567);
var G__26569 = cljs.core.first(seq26567__$1);
var seq26567__$2 = cljs.core.next(seq26567__$1);
var G__26570 = cljs.core.first(seq26567__$2);
var seq26567__$3 = cljs.core.next(seq26567__$2);
var G__26571 = cljs.core.first(seq26567__$3);
var seq26567__$4 = cljs.core.next(seq26567__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__26568,G__26569,G__26570,G__26571,seq26567__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__13068__auto___26581 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26582 = arguments.length;
var i__13023__auto___26583 = (0);
while(true){
if((i__13023__auto___26583 < len__13022__auto___26582)){
args__13029__auto__.push((arguments[i__13023__auto___26583]));

var G__26584 = (i__13023__auto___26583 + (1));
i__13023__auto___26583 = G__26584;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq26578){
var G__26579 = cljs.core.first(seq26578);
var seq26578__$1 = cljs.core.next(seq26578);
var G__26580 = cljs.core.first(seq26578__$1);
var seq26578__$2 = cljs.core.next(seq26578__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__26579,G__26580,seq26578__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__13068__auto___26588 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26589 = arguments.length;
var i__13023__auto___26590 = (0);
while(true){
if((i__13023__auto___26590 < len__13022__auto___26589)){
args__13029__auto__.push((arguments[i__13023__auto___26590]));

var G__26591 = (i__13023__auto___26590 + (1));
i__13023__auto___26590 = G__26591;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj((function (){var x__12697__auto__ = cljs.core.first(clauses);
return cljs.core._conj((function (){var x__12697__auto____$1 = ((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj((function (){var x__12697__auto____$2 = cljs.core.cons(cljs.core.cst$sym$cljs$core_SLASH_cond,cljs.core.next(cljs.core.next(clauses)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$2);
})(),x__12697__auto____$1);
})(),x__12697__auto__);
})(),cljs.core.cst$sym$if);
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq26585){
var G__26586 = cljs.core.first(seq26585);
var seq26585__$1 = cljs.core.next(seq26585);
var G__26587 = cljs.core.first(seq26585__$1);
var seq26585__$2 = cljs.core.next(seq26585__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__26586,G__26587,seq26585__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__13068__auto___26596 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26597 = arguments.length;
var i__13023__auto___26598 = (0);
while(true){
if((i__13023__auto___26598 < len__13022__auto___26597)){
args__13029__auto__.push((arguments[i__13023__auto___26598]));

var G__26599 = (i__13023__auto___26598 + (1));
i__13023__auto___26598 = G__26599;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26592_SHARP_){
return cljs.core._conj((function (){var x__12697__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__26592_SHARP_,cljs.core.assoc,cljs.core.cst$kw$declared,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.cst$sym$def);
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq26593){
var G__26594 = cljs.core.first(seq26593);
var seq26593__$1 = cljs.core.next(seq26593);
var G__26595 = cljs.core.first(seq26593__$1);
var seq26593__$2 = cljs.core.next(seq26593__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__26594,G__26595,seq26593__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__13068__auto___26604 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26605 = arguments.length;
var i__13023__auto___26606 = (0);
while(true){
if((i__13023__auto___26606 < len__13022__auto___26605)){
args__13029__auto__.push((arguments[i__13023__auto___26606]));

var G__26607 = (i__13023__auto___26606 + (1));
i__13023__auto___26606 = G__26607;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = cljs.core.first(f);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__12697__auto__ = gx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq26600){
var G__26601 = cljs.core.first(seq26600);
var seq26600__$1 = cljs.core.next(seq26600);
var G__26602 = cljs.core.first(seq26600__$1);
var seq26600__$2 = cljs.core.next(seq26600__$1);
var G__26603 = cljs.core.first(seq26600__$2);
var seq26600__$3 = cljs.core.next(seq26600__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__26601,G__26602,G__26603,seq26600__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq(s)){
var G__26608 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__26609 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__26608;
s = G__26609;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls(specs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (impls){
return (function (p__26610){
var vec__26611 = p__26610;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26611,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26611,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__12697__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = p;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),fs], 0))));
});})(impls))
,impls))));
});
var ret__13068__auto___26618 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26619 = arguments.length;
var i__13023__auto___26620 = (0);
while(true){
if((i__13023__auto___26620 < len__13022__auto___26619)){
args__13029__auto__.push((arguments[i__13023__auto___26620]));

var G__26621 = (i__13023__auto___26620 + (1));
i__13023__auto___26620 = G__26621;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq26614){
var G__26615 = cljs.core.first(seq26614);
var seq26614__$1 = cljs.core.next(seq26614);
var G__26616 = cljs.core.first(seq26614__$1);
var seq26614__$2 = cljs.core.next(seq26614__$1);
var G__26617 = cljs.core.first(seq26614__$2);
var seq26614__$3 = cljs.core.next(seq26614__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__26615,G__26616,G__26617,seq26614__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__26622 = cljs.core.next(params__$1);
var G__26623 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__26624 = lets;
params__$1 = G__26622;
new_params = G__26623;
lets = G__26624;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__26625 = cljs.core.next(params__$1);
var G__26626 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__26627 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__26625;
new_params = G__26626;
lets = G__26627;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = new_params;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = lets;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
}
break;
}
}
});
var ret__13068__auto___26634 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26635 = arguments.length;
var i__13023__auto___26636 = (0);
while(true){
if((i__13023__auto___26636 < len__13022__auto___26635)){
args__13029__auto__.push((arguments[i__13023__auto___26636]));

var G__26637 = (i__13023__auto___26636 + (1));
i__13023__auto___26636 = G__26637;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(function (){var x__12697__auto__ = sigs__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})():((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_(sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__26631 = sig;
var seq__26632 = cljs.core.seq(vec__26631);
var first__26633 = cljs.core.first(seq__26632);
var seq__26632__$1 = cljs.core.next(seq__26632);
var params = first__26633;
var body = seq__26632__$1;
var _ = ((!(cljs.core.vector_QMARK_(params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__11743__auto__ = conds;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = cljs.core.cst$kw$post.cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_),(function (){var x__12697__auto__ = ((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body__$1))):cljs.core.first(body__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__26631,seq__26632,first__26633,seq__26632__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),(function (){var x__12697__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});})(vec__26631,seq__26632,first__26633,seq__26632__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__26631,seq__26632,first__26633,seq__26632__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_assert),(function (){var x__12697__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});})(vec__26631,seq__26632,first__26633,seq__26632__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$fn_STAR_,name,new_sigs):cljs.core.cons(cljs.core.cst$sym$fn_STAR_,new_sigs)),cljs.core.meta(_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq26628){
var G__26629 = cljs.core.first(seq26628);
var seq26628__$1 = cljs.core.next(seq26628);
var G__26630 = cljs.core.first(seq26628__$1);
var seq26628__$2 = cljs.core.next(seq26628__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__26629,G__26630,seq26628__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__13068__auto___26642 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26643 = arguments.length;
var i__13023__auto___26644 = (0);
while(true){
if((i__13023__auto___26644 < len__13022__auto___26643)){
args__13029__auto__.push((arguments[i__13023__auto___26644]));

var G__26645 = (i__13023__auto___26644 + (1));
i__13023__auto___26644 = G__26645;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$macros_SLASH_defn,cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),cljs.core.cst$kw$private,true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq26638){
var G__26639 = cljs.core.first(seq26638);
var seq26638__$1 = cljs.core.next(seq26638);
var G__26640 = cljs.core.first(seq26638__$1);
var seq26638__$2 = cljs.core.next(seq26638__$1);
var G__26641 = cljs.core.first(seq26638__$2);
var seq26638__$3 = cljs.core.next(seq26638__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__26639,G__26640,G__26641,seq26638__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__13068__auto___26655 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__26654 = arguments.length;
switch (G__26654) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___26657 = arguments.length;
var i__13023__auto___26658 = (0);
while(true){
if((i__13023__auto___26658 < len__13022__auto___26657)){
args_arr__13045__auto__.push((arguments[i__13023__auto___26658]));

var G__26659 = (i__13023__auto___26658 + (1));
i__13023__auto___26658 = G__26659;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__13046__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),(function (){var x__12697__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__26646__auto__),(function (){var x__12697__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__26646__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__26646__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq26648){
var G__26649 = cljs.core.first(seq26648);
var seq26648__$1 = cljs.core.next(seq26648);
var G__26650 = cljs.core.first(seq26648__$1);
var seq26648__$2 = cljs.core.next(seq26648__$1);
var G__26651 = cljs.core.first(seq26648__$2);
var seq26648__$3 = cljs.core.next(seq26648__$2);
var G__26652 = cljs.core.first(seq26648__$3);
var seq26648__$4 = cljs.core.next(seq26648__$3);
var G__26653 = cljs.core.first(seq26648__$4);
var seq26648__$5 = cljs.core.next(seq26648__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__26649,G__26650,G__26651,G__26652,G__26653,seq26648__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__13068__auto___26662 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__26661 = arguments.length;
switch (G__26661) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12697__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__12697__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__13068__auto___26669 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26670 = arguments.length;
var i__13023__auto___26671 = (0);
while(true){
if((i__13023__auto___26671 < len__13022__auto___26670)){
args__13029__auto__.push((arguments[i__13023__auto___26671]));

var G__26672 = (i__13023__auto___26671 + (1));
i__13023__auto___26671 = G__26672;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$letfn_STAR_),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26664_SHARP_){
return cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_fn,p1__26664_SHARP_);
}),fnspecs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq26665){
var G__26666 = cljs.core.first(seq26665);
var seq26665__$1 = cljs.core.next(seq26665);
var G__26667 = cljs.core.first(seq26665__$1);
var seq26665__$2 = cljs.core.next(seq26665__$1);
var G__26668 = cljs.core.first(seq26665__$2);
var seq26665__$3 = cljs.core.next(seq26665__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__26666,G__26667,G__26668,seq26665__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__13068__auto___26677 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26678 = arguments.length;
var i__13023__auto___26679 = (0);
while(true){
if((i__13023__auto___26679 < len__13022__auto___26678)){
args__13029__auto__.push((arguments[i__13023__auto___26679]));

var G__26680 = (i__13023__auto___26679 + (1));
i__13023__auto___26679 = G__26680;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq26673){
var G__26674 = cljs.core.first(seq26673);
var seq26673__$1 = cljs.core.next(seq26673);
var G__26675 = cljs.core.first(seq26673__$1);
var seq26673__$2 = cljs.core.next(seq26673__$1);
var G__26676 = cljs.core.first(seq26673__$2);
var seq26673__$3 = cljs.core.next(seq26673__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__26674,G__26675,G__26676,seq26673__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__13068__auto___26685 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26686 = arguments.length;
var i__13023__auto___26687 = (0);
while(true){
if((i__13023__auto___26687 < len__13022__auto___26686)){
args__13029__auto__.push((arguments[i__13023__auto___26687]));

var G__26688 = (i__13023__auto___26687 + (1));
i__13023__auto___26687 = G__26688;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__12697__auto__ = test;
return cljs.core._conj((function (){var x__12697__auto____$1 = cljs.core.cons(cljs.core.cst$sym$do,body);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),cljs.core.cst$sym$if);
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq26681){
var G__26682 = cljs.core.first(seq26681);
var seq26681__$1 = cljs.core.next(seq26681);
var G__26683 = cljs.core.first(seq26681__$1);
var seq26681__$2 = cljs.core.next(seq26681__$1);
var G__26684 = cljs.core.first(seq26681__$2);
var seq26681__$3 = cljs.core.next(seq26681__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__26682,G__26683,G__26684,seq26681__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__13068__auto___26697 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26698 = arguments.length;
var i__13023__auto___26699 = (0);
while(true){
if((i__13023__auto___26699 < len__13022__auto___26698)){
args__13029__auto__.push((arguments[i__13023__auto___26699]));

var G__26700 = (i__13023__auto___26699 + (1));
i__13023__auto___26699 = G__26700;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__26694 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26694,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26694,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$xs__26689__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12697__auto__ = xs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$xs__26689__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq26690){
var G__26691 = cljs.core.first(seq26690);
var seq26690__$1 = cljs.core.next(seq26690);
var G__26692 = cljs.core.first(seq26690__$1);
var seq26690__$2 = cljs.core.next(seq26690__$1);
var G__26693 = cljs.core.first(seq26690__$2);
var seq26690__$3 = cljs.core.next(seq26690__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__26691,G__26692,G__26693,seq26690__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__13068__auto___26706 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26707 = arguments.length;
var i__13023__auto___26708 = (0);
while(true){
if((i__13023__auto___26708 < len__13022__auto___26707)){
args__13029__auto__.push((arguments[i__13023__auto___26708]));

var G__26709 = (i__13023__auto___26708 + (1));
i__13023__auto___26708 = G__26709;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__26701__auto__),(function (){var x__12697__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__26701__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__26701__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq26702){
var G__26703 = cljs.core.first(seq26702);
var seq26702__$1 = cljs.core.next(seq26702);
var G__26704 = cljs.core.first(seq26702__$1);
var seq26702__$2 = cljs.core.next(seq26702__$1);
var G__26705 = cljs.core.first(seq26702__$2);
var seq26702__$3 = cljs.core.next(seq26702__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__26703,G__26704,G__26705,seq26702__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__13068__auto___26714 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26715 = arguments.length;
var i__13023__auto___26716 = (0);
while(true){
if((i__13023__auto___26716 < len__13022__auto___26715)){
args__13029__auto__.push((arguments[i__13023__auto___26716]));

var G__26717 = (i__13023__auto___26716 + (1));
i__13023__auto___26716 = G__26717;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj((function (){var x__12697__auto__ = test;
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto____$1 = cljs.core.cons(cljs.core.cst$sym$do,body);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),null),x__12697__auto__);
})(),cljs.core.cst$sym$if);
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq26710){
var G__26711 = cljs.core.first(seq26710);
var seq26710__$1 = cljs.core.next(seq26710);
var G__26712 = cljs.core.first(seq26710__$1);
var seq26710__$2 = cljs.core.next(seq26710__$1);
var G__26713 = cljs.core.first(seq26710__$2);
var seq26710__$3 = cljs.core.next(seq26710__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__26711,G__26712,G__26713,seq26710__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__13068__auto___26722 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26723 = arguments.length;
var i__13023__auto___26724 = (0);
while(true){
if((i__13023__auto___26724 < len__13022__auto___26723)){
args__13029__auto__.push((arguments[i__13023__auto___26724]));

var G__26725 = (i__13023__auto___26724 + (1));
i__13023__auto___26724 = G__26725;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12697__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq26718){
var G__26719 = cljs.core.first(seq26718);
var seq26718__$1 = cljs.core.next(seq26718);
var G__26720 = cljs.core.first(seq26718__$1);
var seq26718__$2 = cljs.core.next(seq26718__$1);
var G__26721 = cljs.core.first(seq26718__$2);
var seq26718__$3 = cljs.core.next(seq26718__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__26719,G__26720,G__26721,seq26718__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__13068__auto___26734 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26735 = arguments.length;
var i__13023__auto___26736 = (0);
while(true){
if((i__13023__auto___26736 < len__13022__auto___26735)){
args__13029__auto__.push((arguments[i__13023__auto___26736]));

var G__26737 = (i__13023__auto___26736 + (1));
i__13023__auto___26736 = G__26737;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (p__26730){
var vec__26731 = p__26730;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26731,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26731,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),(function (){var x__12697__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});})(g))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq26726){
var G__26727 = cljs.core.first(seq26726);
var seq26726__$1 = cljs.core.next(seq26726);
var G__26728 = cljs.core.first(seq26726__$1);
var seq26726__$2 = cljs.core.next(seq26726__$1);
var G__26729 = cljs.core.first(seq26726__$2);
var seq26726__$3 = cljs.core.next(seq26726__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__26727,G__26728,G__26729,seq26726__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__13068__auto___26746 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26747 = arguments.length;
var i__13023__auto___26748 = (0);
while(true){
if((i__13023__auto___26748 < len__13022__auto___26747)){
args__13029__auto__.push((arguments[i__13023__auto___26748]));

var G__26749 = (i__13023__auto___26748 + (1));
i__13023__auto___26748 = G__26749;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (p__26742){
var vec__26743 = p__26742;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26743,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26743,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),(function (){var x__12697__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});})(g))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq26738){
var G__26739 = cljs.core.first(seq26738);
var seq26738__$1 = cljs.core.next(seq26738);
var G__26740 = cljs.core.first(seq26738__$1);
var seq26738__$2 = cljs.core.next(seq26738__$1);
var G__26741 = cljs.core.first(seq26738__$2);
var seq26738__$3 = cljs.core.next(seq26738__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__26739,G__26740,G__26741,seq26738__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__13068__auto___26755 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26756 = arguments.length;
var i__13023__auto___26757 = (0);
while(true){
if((i__13023__auto___26757 < len__13022__auto___26756)){
args__13029__auto__.push((arguments[i__13023__auto___26757]));

var G__26758 = (i__13023__auto___26757 + (1));
i__13023__auto___26757 = G__26758;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((4) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13030__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),cljs.core.butlast(forms))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = ((cljs.core.empty_QMARK_(forms))?name:cljs.core.last(forms));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq26750){
var G__26751 = cljs.core.first(seq26750);
var seq26750__$1 = cljs.core.next(seq26750);
var G__26752 = cljs.core.first(seq26750__$1);
var seq26750__$2 = cljs.core.next(seq26750__$1);
var G__26753 = cljs.core.first(seq26750__$2);
var seq26750__$3 = cljs.core.next(seq26750__$2);
var G__26754 = cljs.core.first(seq26750__$3);
var seq26750__$4 = cljs.core.next(seq26750__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__26751,G__26752,G__26753,G__26754,seq26750__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__13068__auto___26763 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26764 = arguments.length;
var i__13023__auto___26765 = (0);
while(true){
if((i__13023__auto___26765 < len__13022__auto___26764)){
args__13029__auto__.push((arguments[i__13023__auto___26765]));

var G__26766 = (i__13023__auto___26765 + (1));
i__13023__auto___26765 = G__26766;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12697__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT_),(function (){var x__12697__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});})(g))
,forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq26759){
var G__26760 = cljs.core.first(seq26759);
var seq26759__$1 = cljs.core.next(seq26759);
var G__26761 = cljs.core.first(seq26759__$1);
var seq26759__$2 = cljs.core.next(seq26759__$1);
var G__26762 = cljs.core.first(seq26759__$2);
var seq26759__$3 = cljs.core.next(seq26759__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__26760,G__26761,G__26762,seq26759__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__13068__auto___26771 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26772 = arguments.length;
var i__13023__auto___26773 = (0);
while(true){
if((i__13023__auto___26773 < len__13022__auto___26772)){
args__13029__auto__.push((arguments[i__13023__auto___26773]));

var G__26774 = (i__13023__auto___26773 + (1));
i__13023__auto___26773 = G__26774;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12697__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH__GT__GT_),(function (){var x__12697__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = step;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});})(g))
,forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = g;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = ((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq26767){
var G__26768 = cljs.core.first(seq26767);
var seq26767__$1 = cljs.core.next(seq26767);
var G__26769 = cljs.core.first(seq26767__$1);
var seq26767__$2 = cljs.core.next(seq26767__$1);
var G__26770 = cljs.core.first(seq26767__$2);
var seq26767__$3 = cljs.core.next(seq26767__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__26768,G__26769,G__26770,seq26767__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__13068__auto___26784 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__26783 = arguments.length;
switch (G__26783) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___26786 = arguments.length;
var i__13023__auto___26787 = (0);
while(true){
if((i__13023__auto___26787 < len__13022__auto___26786)){
args_arr__13045__auto__.push((arguments[i__13023__auto___26787]));

var G__26788 = (i__13023__auto___26787 + (1));
i__13023__auto___26787 = G__26788;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__13046__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_some),(function (){var x__12697__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__26775__auto__),(function (){var x__12697__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__26775__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = else$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__26775__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = then;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq26777){
var G__26778 = cljs.core.first(seq26777);
var seq26777__$1 = cljs.core.next(seq26777);
var G__26779 = cljs.core.first(seq26777__$1);
var seq26777__$2 = cljs.core.next(seq26777__$1);
var G__26780 = cljs.core.first(seq26777__$2);
var seq26777__$3 = cljs.core.next(seq26777__$2);
var G__26781 = cljs.core.first(seq26777__$3);
var seq26777__$4 = cljs.core.next(seq26777__$3);
var G__26782 = cljs.core.first(seq26777__$4);
var seq26777__$5 = cljs.core.next(seq26777__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__26778,G__26779,G__26780,G__26781,G__26782,seq26777__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__13068__auto___26794 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26795 = arguments.length;
var i__13023__auto___26796 = (0);
while(true){
if((i__13023__auto___26796 < len__13022__auto___26795)){
args__13029__auto__.push((arguments[i__13023__auto___26796]));

var G__26797 = (i__13023__auto___26796 + (1));
i__13023__auto___26796 = G__26797;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__26789__auto__),(function (){var x__12697__auto__ = tst;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__26789__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$temp__26789__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq26790){
var G__26791 = cljs.core.first(seq26790);
var seq26790__$1 = cljs.core.next(seq26790);
var G__26792 = cljs.core.first(seq26790__$1);
var seq26790__$2 = cljs.core.next(seq26790__$1);
var G__26793 = cljs.core.first(seq26790__$2);
var seq26790__$3 = cljs.core.next(seq26790__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__26791,G__26792,G__26793,seq26790__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_(fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26798_SHARP_){
if(cljs.core.seq_QMARK_(p1__26798_SHARP_)){
return cljs.core.first(p1__26798_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26798_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26798_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (argdecls){
return (function (p1__26799_SHARP_){
return cljs.core.vector_QMARK_(p1__26799_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
(cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1(fdecl) : cljs.core$macros.assert_valid_fdecl.call(null,fdecl));

var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__26800 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__26801 = cljs.core.next(fdecls);
ret = G__26800;
fdecls = G__26801;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
var x__12697__auto__ = asig(fdecl);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
}
});
var ret__13068__auto___26802 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var gseq = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var gfirst = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("first__");
var has_rest = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0));
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj((function (){var x__12697__auto__ = gvec;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_seq)], 0));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$sym$_AMPERSAND_)){
var G__26813 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gseq);
var G__26814 = n;
var G__26815 = cljs.core.nnext(bs);
var G__26816 = true;
ret = G__26813;
n = G__26814;
bs = G__26815;
seen_rest_QMARK_ = G__26816;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,cljs.core.cst$kw$as)){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__26817 = cljs$core$macros$destructure_$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__12697__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__12697__auto__ = gseq;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj((function (){var x__12697__auto__ = gvec;
return cljs.core._conj((function (){var x__12697__auto____$1 = n;
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__12697__auto____$1);
})(),x__12697__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_nth)));
var G__26818 = (n + (1));
var G__26819 = cljs.core.next(bs);
var G__26820 = seen_rest_QMARK_;
ret = G__26817;
n = G__26818;
bs = G__26819;
seen_rest_QMARK_ = G__26820;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = cljs.core.cst$kw$or.cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = (function (){var G__26809 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_implements_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ISeq),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_map),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = gmap;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
var fexpr__26808 = ((function (G__26809,gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gmap], 0));
} else {
return ret;
}
});})(G__26809,gmap,defaults,pvec,bents))
;
return fexpr__26808(G__26809);
})();
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__26803_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__11743__auto__ = mkns;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.namespace(p1__26803_SHARP_);
}
})(),cljs.core.name(p1__26803_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__26804_SHARP_){
return cljs.core._conj((function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__11743__auto__ = mkns;
if(cljs.core.truth_(or__11743__auto__)){
return or__11743__auto__;
} else {
return cljs.core.namespace(p1__26804_SHARP_);
}
})(),cljs.core.name(p1__26804_SHARP_));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.cst$sym$quote);
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"strs")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(b__$1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__26805_SHARP_,p2__26806_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26805_SHARP_,p2__26806_SHARP_,(function (){var fexpr__26810 = cljs.core.val(entry);
return (fexpr__26810.cljs$core$IFn$_invoke$arity$1 ? fexpr__26810.cljs$core$IFn$_invoke$arity$1(p2__26806_SHARP_) : fexpr__26810.call(null,p2__26806_SHARP_));
})());
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),(function (){var fexpr__26811 = cljs.core.key(entry);
return (fexpr__26811.cljs$core$IFn$_invoke$arity$1 ? fexpr__26811.cljs$core$IFn$_invoke$arity$1(bes) : fexpr__26811.call(null,bes));
})());
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,cljs.core.cst$kw$as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$or], 0)),transforms);
})();
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(bb)),cljs.core.meta(bb)):bb);
var bv = ((cljs.core.contains_QMARK_(defaults,local))?cljs.core._conj((function (){var x__12697__auto__ = gmap;
return cljs.core._conj((function (){var x__12697__auto____$1 = bk;
return cljs.core._conj((function (){var x__12697__auto____$2 = (defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(local) : defaults.call(null,local));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$2);
})(),x__12697__auto____$1);
})(),x__12697__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_get):cljs.core._conj((function (){var x__12697__auto__ = gmap;
return cljs.core._conj((function (){var x__12697__auto____$1 = bk;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),cljs.core.cst$sym$cljs$core_SLASH_get));
var G__26821 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bv], 0)):cljs$core$macros$destructure_$_pb(ret,bb,bv));
var G__26822 = cljs.core.next(bes);
ret = G__26821;
bes = G__26822;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__5455__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bents,pb,process_entry){
return (function (p1__26807_SHARP_){
return (cljs.core.first(p1__26807_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__5455__auto__){
var kwbs = temp__5455__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__13068__auto___26823 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_declare),(function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__12697__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_define),(function (){var x__12697__auto__ = defname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__13068__auto___26828 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26829 = arguments.length;
var i__13023__auto___26830 = (0);
while(true){
if((i__13023__auto___26830 < len__13022__auto___26829)){
args__13029__auto__.push((arguments[i__13023__auto___26830]));

var G__26831 = (i__13023__auto___26830 + (1));
i__13023__auto___26830 = G__26831;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$let_STAR_),(function (){var x__12697__auto__ = cljs.core$macros.destructure(bindings);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq26824){
var G__26825 = cljs.core.first(seq26824);
var seq26824__$1 = cljs.core.next(seq26824);
var G__26826 = cljs.core.first(seq26824__$1);
var seq26824__$2 = cljs.core.next(seq26824__$1);
var G__26827 = cljs.core.first(seq26824__$2);
var seq26824__$3 = cljs.core.next(seq26824__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__26825,G__26826,G__26827,seq26824__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__13068__auto___26840 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26841 = arguments.length;
var i__13023__auto___26842 = (0);
while(true){
if((i__13023__auto___26842 < len__13022__auto___26841)){
args__13029__auto__.push((arguments[i__13023__auto___26842]));

var G__26843 = (i__13023__auto___26842 + (1));
i__13023__auto___26842 = G__26843;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure(bindings);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),(function (){var x__12697__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
} else {
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var bs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vs,bs,gs,db){
return (function (ret,p__26836){
var vec__26837 = p__26836;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26837,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26837,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26837,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,b,g], 0));
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = bfs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$loop_STAR_),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq26832){
var G__26833 = cljs.core.first(seq26832);
var seq26832__$1 = cljs.core.next(seq26832);
var G__26834 = cljs.core.first(seq26832__$1);
var seq26832__$2 = cljs.core.next(seq26832__$1);
var G__26835 = cljs.core.first(seq26832__$2);
var seq26832__$3 = cljs.core.next(seq26832__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__26833,G__26834,G__26835,seq26832__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26844_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26844_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([cljs.core.cst$sym$IFn,cljs.core.cst$sym$ICounted,cljs.core.cst$sym$IEmptyableCollection,cljs.core.cst$sym$ICollection,cljs.core.cst$sym$IIndexed,cljs.core.cst$sym$ASeq,cljs.core.cst$sym$ISeq,cljs.core.cst$sym$INext,cljs.core.cst$sym$ILookup,cljs.core.cst$sym$IAssociative,cljs.core.cst$sym$IMap,cljs.core.cst$sym$IMapEntry,cljs.core.cst$sym$ISet,cljs.core.cst$sym$IStack,cljs.core.cst$sym$IVector,cljs.core.cst$sym$IDeref,cljs.core.cst$sym$IDerefWithTimeout,cljs.core.cst$sym$IMeta,cljs.core.cst$sym$IWithMeta,cljs.core.cst$sym$IReduce,cljs.core.cst$sym$IKVReduce,cljs.core.cst$sym$IEquiv,cljs.core.cst$sym$IHash,cljs.core.cst$sym$ISeqable,cljs.core.cst$sym$ISequential,cljs.core.cst$sym$IList,cljs.core.cst$sym$IRecord,cljs.core.cst$sym$IReversible,cljs.core.cst$sym$ISorted,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IWriter,cljs.core.cst$sym$IPrintWithWriter,cljs.core.cst$sym$IPending,cljs.core.cst$sym$IWatchable,cljs.core.cst$sym$IEditableCollection,cljs.core.cst$sym$ITransientCollection,cljs.core.cst$sym$ITransientAssociative,cljs.core.cst$sym$ITransientMap,cljs.core.cst$sym$ITransientVector,cljs.core.cst$sym$ITransientSet,cljs.core.cst$sym$IMultiFn,cljs.core.cst$sym$IChunkedSeq,cljs.core.cst$sym$IChunkedNext,cljs.core.cst$sym$IComparable,cljs.core.cst$sym$INamed,cljs.core.cst$sym$ICloneable,cljs.core.cst$sym$IAtom,cljs.core.cst$sym$IReset,cljs.core.cst$sym$ISwap,cljs.core.cst$sym$IIterable], true)),cljs.core.iterate((function (p__26845){
var vec__26846 = p__26845;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26846,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26846,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count(cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod(c,(32));
if((m === (0))){
return cljs.core.quot(c,(32));
} else {
return (cljs.core.quot(c,(32)) + (1));
}
})();
var ret__13068__auto___26852 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26853 = arguments.length;
var i__13023__auto___26854 = (0);
while(true){
if((i__13023__auto___26854 < len__13022__auto___26853)){
args__13029__auto__.push((arguments[i__13023__auto___26854]));

var G__26855 = (i__13023__auto___26854 + (1));
i__13023__auto___26854 = G__26855;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var interpolate = (function (x){
if(typeof x === 'string'){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(interpolate,xs)));
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq26849){
var G__26850 = cljs.core.first(seq26849);
var seq26849__$1 = cljs.core.next(seq26849);
var G__26851 = cljs.core.first(seq26849__$1);
var seq26849__$2 = cljs.core.next(seq26849__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__26850,G__26851,seq26849__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean);
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__11731__auto__ = (function (){var G__26859 = cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__26858 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$js,null,cljs.core.cst$kw$constant,null,cljs.core.cst$kw$var,null,cljs.core.cst$kw$invoke,null,cljs.core.cst$kw$dot,null], null), null);
return (fexpr__26858.cljs$core$IFn$_invoke$arity$1 ? fexpr__26858.cljs$core$IFn$_invoke$arity$1(G__26859) : fexpr__26858.call(null,G__26859));
})();
if(cljs.core.truth_(and__11731__auto__)){
var G__26861 = cljs.analyzer.infer_tag(env,ast);
var fexpr__26860 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$seq,null,cljs.core.cst$sym$boolean,null], null), null);
return (fexpr__26860.cljs$core$IFn$_invoke$arity$1 ? fexpr__26860.cljs$core$IFn$_invoke$arity$1(G__26861) : fexpr__26860.call(null,G__26861));
} else {
return and__11731__auto__;
}
});
var ret__13068__auto___26872 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__26870 = arguments.length;
switch (G__26870) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___26874 = arguments.length;
var i__13023__auto___26875 = (0);
while(true){
if((i__13023__auto___26875 < len__13022__auto___26874)){
args_arr__13045__auto__.push((arguments[i__13023__auto___26875]));

var G__26876 = (i__13023__auto___26875 + (1));
i__13023__auto___26875 = G__26876;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13046__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__26862_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__26862_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__26863_SHARP_){
var _STAR_cljs_warnings_STAR_26871 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__26863_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_26871;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__12697__auto__ = and_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__26864__auto__),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__26864__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$and__26864__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq26866){
var G__26867 = cljs.core.first(seq26866);
var seq26866__$1 = cljs.core.next(seq26866);
var G__26868 = cljs.core.first(seq26866__$1);
var seq26866__$2 = cljs.core.next(seq26866__$1);
var G__26869 = cljs.core.first(seq26866__$2);
var seq26866__$3 = cljs.core.next(seq26866__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__26867,G__26868,G__26869,seq26866__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__13068__auto___26887 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__26885 = arguments.length;
switch (G__26885) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___26889 = arguments.length;
var i__13023__auto___26890 = (0);
while(true){
if((i__13023__auto___26890 < len__13022__auto___26889)){
args_arr__13045__auto__.push((arguments[i__13023__auto___26890]));

var G__26891 = (i__13023__auto___26890 + (1));
i__13023__auto___26890 = G__26891;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13046__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__26877_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__26877_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__26878_SHARP_){
var _STAR_cljs_warnings_STAR_26886 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__26878_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_26886;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__12697__auto__ = or_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__26879__auto__),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__26879__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$or__26879__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),next)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq26881){
var G__26882 = cljs.core.first(seq26881);
var seq26881__$1 = cljs.core.next(seq26881);
var G__26883 = cljs.core.first(seq26881__$1);
var seq26881__$2 = cljs.core.next(seq26881__$1);
var G__26884 = cljs.core.first(seq26881__$2);
var seq26881__$3 = cljs.core.next(seq26881__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__26882,G__26883,G__26884,seq26881__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__13068__auto___26892 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH__EQ_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___26893 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___26894 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"(!~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__13068__auto___26895 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} != ~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__13068__auto___26896 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} == ~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__13068__auto___26897 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"~{}"),cljs.core.cst$sym$js_STAR_),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$boolean], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__13068__auto___26898 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} != null && ~{} !== false)"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__13068__auto___26899 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"arguments"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__13068__auto___26900 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = obj;
return cljs.core._conj((function (){var x__12697__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"delete ~{}[~{}]"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__13068__auto___26901 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = key;
return cljs.core._conj((function (){var x__12697__auto____$1 = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"~{} in ~{}"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__13068__auto___26902 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj((function (){var x__12697__auto__ = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"debugger"),cljs.core.cst$sym$js_STAR_);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),x__12697__auto__);
})(),cljs.core.cst$sym$do);
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__13068__auto___26907 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__26904 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(comment,/\n/);
var seq__26905 = cljs.core.seq(vec__26904);
var first__26906 = cljs.core.first(seq__26905);
var seq__26905__$1 = cljs.core.next(seq__26905);
var x = first__26906;
var ys = seq__26905__$1;
return cljs.core._conj((function (){var x__12697__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__26904,seq__26905,first__26906,seq__26905__$1,x,ys){
return (function (p1__26903_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(p1__26903_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__26904,seq__26905,first__26906,seq__26905__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__13068__auto___26908 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj((function (){var x__12697__auto__ = cast_expr;
return cljs.core._conj((function (){var x__12697__auto____$1 = x;
return cljs.core._conj((function (){var x__12697__auto____$2 = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$2);
})(),x__12697__auto____$1);
})(),x__12697__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__13068__auto___26909 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj((function (){var x__12697__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__13068__auto___26910 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"~{} === true"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___26911 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"~{} === false"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___26912 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"typeof ~{} === 'string'"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___26913 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"typeof ~{} !== 'undefined'"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___26914 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"(void 0 === ~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___26915 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = a;
return cljs.core._conj((function (){var x__12697__auto____$1 = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___26918 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr((((c instanceof cljs.core.Symbol))?cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} instanceof ~{})"),cljs.core.cst$sym$js_STAR_):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__26916__auto__),(function (){var x__12697__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__26917__auto__),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__26917__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__26916__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___26919 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"typeof ~{} === 'number'"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___26920 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Symbol),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___26921 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_instance_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Keyword),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___26931 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__26928 = arguments.length;
switch (G__26928) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___26933 = arguments.length;
var i__13023__auto___26934 = (0);
while(true){
if((i__13023__auto___26934 < len__13022__auto___26933)){
args_arr__13045__auto__.push((arguments[i__13023__auto___26934]));

var G__26935 = (i__13023__auto___26934 + (1));
i__13023__auto___26934 = G__26935;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__26929 = cljs.analyzer.checked_arrays();
var G__26929__$1 = (((G__26929 instanceof cljs.core.Keyword))?G__26929.fqn:null);
switch (G__26929__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget),(function (){var x__12697__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget_SINGLEQUOTE_),(function (){var x__12697__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));

break;
default:
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = array;
return cljs.core._conj((function (){var x__12697__auto____$1 = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{}[~{}])"),cljs.core.cst$sym$js_STAR_);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__26930 = cljs.analyzer.checked_arrays();
var G__26930__$1 = (((G__26930 instanceof cljs.core.Keyword))?G__26930.fqn:null);
switch (G__26930__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget),(function (){var x__12697__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),idxs], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aget_SINGLEQUOTE_),(function (){var x__12697__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),idxs], 0))));

break;
default:
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__12697__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),idxs], 0))));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq26923){
var G__26924 = cljs.core.first(seq26923);
var seq26923__$1 = cljs.core.next(seq26923);
var G__26925 = cljs.core.first(seq26923__$1);
var seq26923__$2 = cljs.core.next(seq26923__$1);
var G__26926 = cljs.core.first(seq26923__$2);
var seq26923__$3 = cljs.core.next(seq26923__$2);
var G__26927 = cljs.core.first(seq26923__$3);
var seq26923__$4 = cljs.core.next(seq26923__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__26924,G__26925,G__26926,G__26927,seq26923__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__13068__auto___26948 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__26945 = arguments.length;
switch (G__26945) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___26950 = arguments.length;
var i__13023__auto___26951 = (0);
while(true){
if((i__13023__auto___26951 < len__13022__auto___26950)){
args_arr__13045__auto__.push((arguments[i__13023__auto___26951]));

var G__26952 = (i__13023__auto___26951 + (1));
i__13023__auto___26951 = G__26952;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__13046__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__26946 = cljs.analyzer.checked_arrays();
var G__26946__$1 = (((G__26946 instanceof cljs.core.Keyword))?G__26946.fqn:null);
switch (G__26946__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset),(function (){var x__12697__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset_SINGLEQUOTE_),(function (){var x__12697__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));

break;
default:
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = array;
return cljs.core._conj((function (){var x__12697__auto____$1 = idx;
return cljs.core._conj((function (){var x__12697__auto____$2 = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$2);
})(),x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{}[~{}] = ~{})"),cljs.core.cst$sym$js_STAR_);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__26947 = cljs.analyzer.checked_arrays();
var G__26947__$1 = (((G__26947 instanceof cljs.core.Keyword))?G__26947.fqn:null);
switch (G__26947__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset),(function (){var x__12697__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),idxv], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_checked_DASH_aset_SINGLEQUOTE_),(function (){var x__12697__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),idxv], 0))));

break;
default:
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),(function (){var x__12697__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = array;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = idx2;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),idxv], 0))));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq26939){
var G__26940 = cljs.core.first(seq26939);
var seq26939__$1 = cljs.core.next(seq26939);
var G__26941 = cljs.core.first(seq26939__$1);
var seq26939__$2 = cljs.core.next(seq26939__$1);
var G__26942 = cljs.core.first(seq26939__$2);
var seq26939__$3 = cljs.core.next(seq26939__$2);
var G__26943 = cljs.core.first(seq26939__$3);
var seq26939__$4 = cljs.core.next(seq26939__$3);
var G__26944 = cljs.core.first(seq26939__$4);
var seq26939__$5 = cljs.core.next(seq26939__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__26940,G__26941,G__26942,G__26943,G__26944,seq26939__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__13068__auto___26955 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = obj;
return cljs.core._conj((function (){var x__12697__auto____$1 = key;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{}[~{}])"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__13068__auto___26956 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = obj;
return cljs.core._conj((function (){var x__12697__auto____$1 = key;
return cljs.core._conj((function (){var x__12697__auto____$2 = val;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$2);
})(),x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{}[~{}] = ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__13068__auto___26964 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__26963 = arguments.length;
switch (G__26963) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___26966 = arguments.length;
var i__13023__auto___26967 = (0);
while(true){
if((i__13023__auto___26967 < len__13022__auto___26966)){
args_arr__13045__auto__.push((arguments[i__13023__auto___26967]));

var G__26968 = (i__13023__auto___26967 + (1));
i__13023__auto___26967 = G__26968;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} + ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq26958){
var G__26959 = cljs.core.first(seq26958);
var seq26958__$1 = cljs.core.next(seq26958);
var G__26960 = cljs.core.first(seq26958__$1);
var seq26958__$2 = cljs.core.next(seq26958__$1);
var G__26961 = cljs.core.first(seq26958__$2);
var seq26958__$3 = cljs.core.next(seq26958__$2);
var G__26962 = cljs.core.first(seq26958__$3);
var seq26958__$4 = cljs.core.next(seq26958__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__26959,G__26960,G__26961,G__26962,seq26958__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__13068__auto___26969 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__13068__auto___26970 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__13068__auto___26971 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__13068__auto___26972 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__13068__auto___26973 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__13068__auto___26974 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__13068__auto___26975 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__13068__auto___26976 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__13068__auto___26977 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__13068__auto___26981 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26982 = arguments.length;
var i__13023__auto___26983 = (0);
while(true){
if((i__13023__auto___26983 < len__13022__auto___26982)){
args__13029__auto__.push((arguments[i__13023__auto___26983]));

var G__26984 = (i__13023__auto___26983 + (1));
i__13023__auto___26983 = G__26984;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq26978){
var G__26979 = cljs.core.first(seq26978);
var seq26978__$1 = cljs.core.next(seq26978);
var G__26980 = cljs.core.first(seq26978__$1);
var seq26978__$2 = cljs.core.next(seq26978__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__26979,G__26980,seq26978__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__13068__auto___26988 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26989 = arguments.length;
var i__13023__auto___26990 = (0);
while(true){
if((i__13023__auto___26990 < len__13022__auto___26989)){
args__13029__auto__.push((arguments[i__13023__auto___26990]));

var G__26991 = (i__13023__auto___26990 + (1));
i__13023__auto___26990 = G__26991;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq26985){
var G__26986 = cljs.core.first(seq26985);
var seq26985__$1 = cljs.core.next(seq26985);
var G__26987 = cljs.core.first(seq26985__$1);
var seq26985__$2 = cljs.core.next(seq26985__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__26986,G__26987,seq26985__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__13068__auto___26992 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dec),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__13068__auto___26993 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dec),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__13068__auto___26997 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__13029__auto__ = [];
var len__13022__auto___26998 = arguments.length;
var i__13023__auto___26999 = (0);
while(true){
if((i__13023__auto___26999 < len__13022__auto___26998)){
args__13029__auto__.push((arguments[i__13023__auto___26999]));

var G__27000 = (i__13023__auto___26999 + (1));
i__13023__auto___26999 = G__27000;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq26994){
var G__26995 = cljs.core.first(seq26994);
var seq26994__$1 = cljs.core.next(seq26994);
var G__26996 = cljs.core.first(seq26994__$1);
var seq26994__$2 = cljs.core.next(seq26994__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__26995,G__26996,seq26994__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__13068__auto___27001 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__13068__auto___27002 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__13068__auto___27006 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27007 = arguments.length;
var i__13023__auto___27008 = (0);
while(true){
if((i__13023__auto___27008 < len__13022__auto___27007)){
args__13029__auto__.push((arguments[i__13023__auto___27008]));

var G__27009 = (i__13023__auto___27008 + (1));
i__13023__auto___27008 = G__27009;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq27003){
var G__27004 = cljs.core.first(seq27003);
var seq27003__$1 = cljs.core.next(seq27003);
var G__27005 = cljs.core.first(seq27003__$1);
var seq27003__$2 = cljs.core.next(seq27003__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__27004,G__27005,seq27003__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__13068__auto___27013 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27014 = arguments.length;
var i__13023__auto___27015 = (0);
while(true){
if((i__13023__auto___27015 < len__13022__auto___27014)){
args__13029__auto__.push((arguments[i__13023__auto___27015]));

var G__27016 = (i__13023__auto___27015 + (1));
i__13023__auto___27015 = G__27016;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq27010){
var G__27011 = cljs.core.first(seq27010);
var seq27010__$1 = cljs.core.next(seq27010);
var G__27012 = cljs.core.first(seq27010__$1);
var seq27010__$2 = cljs.core.next(seq27010__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__27011,G__27012,seq27010__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__13068__auto___27017 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__13068__auto___27018 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__13068__auto___27019 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_mod),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__13068__auto___27023 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27024 = arguments.length;
var i__13023__auto___27025 = (0);
while(true){
if((i__13023__auto___27025 < len__13022__auto___27024)){
args__13029__auto__.push((arguments[i__13023__auto___27025]));

var G__27026 = (i__13023__auto___27025 + (1));
i__13023__auto___27025 = G__27026;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq27020){
var G__27021 = cljs.core.first(seq27020);
var seq27020__$1 = cljs.core.next(seq27020);
var G__27022 = cljs.core.first(seq27020__$1);
var seq27020__$2 = cljs.core.next(seq27020__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__27021,G__27022,seq27020__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__13068__auto___27030 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27031 = arguments.length;
var i__13023__auto___27032 = (0);
while(true){
if((i__13023__auto___27032 < len__13022__auto___27031)){
args__13029__auto__.push((arguments[i__13023__auto___27032]));

var G__27033 = (i__13023__auto___27032 + (1));
i__13023__auto___27032 = G__27033;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq27027){
var G__27028 = cljs.core.first(seq27027);
var seq27027__$1 = cljs.core.next(seq27027);
var G__27029 = cljs.core.first(seq27027__$1);
var seq27027__$2 = cljs.core.next(seq27027__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__27028,G__27029,seq27027__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__13068__auto___27041 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__27040 = arguments.length;
switch (G__27040) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27043 = arguments.length;
var i__13023__auto___27044 = (0);
while(true){
if((i__13023__auto___27044 < len__13022__auto___27043)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27044]));

var G__27045 = (i__13023__auto___27044 + (1));
i__13023__auto___27044 = G__27045;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"(- ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} - ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq27035){
var G__27036 = cljs.core.first(seq27035);
var seq27035__$1 = cljs.core.next(seq27035);
var G__27037 = cljs.core.first(seq27035__$1);
var seq27035__$2 = cljs.core.next(seq27035__$1);
var G__27038 = cljs.core.first(seq27035__$2);
var seq27035__$3 = cljs.core.next(seq27035__$2);
var G__27039 = cljs.core.first(seq27035__$3);
var seq27035__$4 = cljs.core.next(seq27035__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__27036,G__27037,G__27038,G__27039,seq27035__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__13068__auto___27053 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__27052 = arguments.length;
switch (G__27052) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27055 = arguments.length;
var i__13023__auto___27056 = (0);
while(true){
if((i__13023__auto___27056 < len__13022__auto___27055)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27056]));

var G__27057 = (i__13023__auto___27056 + (1));
i__13023__auto___27056 = G__27057;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} * ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__STAR_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq27047){
var G__27048 = cljs.core.first(seq27047);
var seq27047__$1 = cljs.core.next(seq27047);
var G__27049 = cljs.core.first(seq27047__$1);
var seq27047__$2 = cljs.core.next(seq27047__$1);
var G__27050 = cljs.core.first(seq27047__$2);
var seq27047__$3 = cljs.core.next(seq27047__$2);
var G__27051 = cljs.core.first(seq27047__$3);
var seq27047__$4 = cljs.core.next(seq27047__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__27048,G__27049,G__27050,G__27051,seq27047__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__13068__auto___27065 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__27064 = arguments.length;
switch (G__27064) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27067 = arguments.length;
var i__13023__auto___27068 = (0);
while(true){
if((i__13023__auto___27068 < len__13022__auto___27067)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27068]));

var G__27069 = (i__13023__auto___27068 + (1));
i__13023__auto___27068 = G__27069;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq27059){
var G__27060 = cljs.core.first(seq27059);
var seq27059__$1 = cljs.core.next(seq27059);
var G__27061 = cljs.core.first(seq27059__$1);
var seq27059__$2 = cljs.core.next(seq27059__$1);
var G__27062 = cljs.core.first(seq27059__$2);
var seq27059__$3 = cljs.core.next(seq27059__$2);
var G__27063 = cljs.core.first(seq27059__$3);
var seq27059__$4 = cljs.core.next(seq27059__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__27060,G__27061,G__27062,G__27063,seq27059__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__13068__auto___27077 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__27076 = arguments.length;
switch (G__27076) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27079 = arguments.length;
var i__13023__auto___27080 = (0);
while(true){
if((i__13023__auto___27080 < len__13022__auto___27079)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27080]));

var G__27081 = (i__13023__auto___27080 + (1));
i__13023__auto___27080 = G__27081;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} / ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__SLASH_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq27071){
var G__27072 = cljs.core.first(seq27071);
var seq27071__$1 = cljs.core.next(seq27071);
var G__27073 = cljs.core.first(seq27071__$1);
var seq27071__$2 = cljs.core.next(seq27071__$1);
var G__27074 = cljs.core.first(seq27071__$2);
var seq27071__$3 = cljs.core.next(seq27071__$2);
var G__27075 = cljs.core.first(seq27071__$3);
var seq27071__$4 = cljs.core.next(seq27071__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__27072,G__27073,G__27074,G__27075,seq27071__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__13068__auto___27089 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__27088 = arguments.length;
switch (G__27088) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27091 = arguments.length;
var i__13023__auto___27092 = (0);
while(true){
if((i__13023__auto___27092 < len__13022__auto___27091)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27092]));

var G__27093 = (i__13023__auto___27092 + (1));
i__13023__auto___27092 = G__27093;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} < ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq27083){
var G__27084 = cljs.core.first(seq27083);
var seq27083__$1 = cljs.core.next(seq27083);
var G__27085 = cljs.core.first(seq27083__$1);
var seq27083__$2 = cljs.core.next(seq27083__$1);
var G__27086 = cljs.core.first(seq27083__$2);
var seq27083__$3 = cljs.core.next(seq27083__$2);
var G__27087 = cljs.core.first(seq27083__$3);
var seq27083__$4 = cljs.core.next(seq27083__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__27084,G__27085,G__27086,G__27087,seq27083__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__13068__auto___27101 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__27100 = arguments.length;
switch (G__27100) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27103 = arguments.length;
var i__13023__auto___27104 = (0);
while(true){
if((i__13023__auto___27104 < len__13022__auto___27103)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27104]));

var G__27105 = (i__13023__auto___27104 + (1));
i__13023__auto___27104 = G__27105;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} <= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT__EQ_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT__EQ_),(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq27095){
var G__27096 = cljs.core.first(seq27095);
var seq27095__$1 = cljs.core.next(seq27095);
var G__27097 = cljs.core.first(seq27095__$1);
var seq27095__$2 = cljs.core.next(seq27095__$1);
var G__27098 = cljs.core.first(seq27095__$2);
var seq27095__$3 = cljs.core.next(seq27095__$2);
var G__27099 = cljs.core.first(seq27095__$3);
var seq27095__$4 = cljs.core.next(seq27095__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__27096,G__27097,G__27098,G__27099,seq27095__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__13068__auto___27113 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__27112 = arguments.length;
switch (G__27112) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27115 = arguments.length;
var i__13023__auto___27116 = (0);
while(true){
if((i__13023__auto___27116 < len__13022__auto___27115)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27116]));

var G__27117 = (i__13023__auto___27116 + (1));
i__13023__auto___27116 = G__27117;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} > ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq27107){
var G__27108 = cljs.core.first(seq27107);
var seq27107__$1 = cljs.core.next(seq27107);
var G__27109 = cljs.core.first(seq27107__$1);
var seq27107__$2 = cljs.core.next(seq27107__$1);
var G__27110 = cljs.core.first(seq27107__$2);
var seq27107__$3 = cljs.core.next(seq27107__$2);
var G__27111 = cljs.core.first(seq27107__$3);
var seq27107__$4 = cljs.core.next(seq27107__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__27108,G__27109,G__27110,G__27111,seq27107__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__13068__auto___27125 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__27124 = arguments.length;
switch (G__27124) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27127 = arguments.length;
var i__13023__auto___27128 = (0);
while(true){
if((i__13023__auto___27128 < len__13022__auto___27127)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27128]));

var G__27129 = (i__13023__auto___27128 + (1));
i__13023__auto___27128 = G__27129;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} >= ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT__EQ_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT__EQ_),(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq27119){
var G__27120 = cljs.core.first(seq27119);
var seq27119__$1 = cljs.core.next(seq27119);
var G__27121 = cljs.core.first(seq27119__$1);
var seq27119__$2 = cljs.core.next(seq27119__$1);
var G__27122 = cljs.core.first(seq27119__$2);
var seq27119__$3 = cljs.core.next(seq27119__$2);
var G__27123 = cljs.core.first(seq27119__$3);
var seq27119__$4 = cljs.core.next(seq27119__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__27120,G__27121,G__27122,G__27123,seq27119__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__13068__auto___27137 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__27136 = arguments.length;
switch (G__27136) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27139 = arguments.length;
var i__13023__auto___27140 = (0);
while(true){
if((i__13023__auto___27140 < len__13022__auto___27139)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27140]));

var G__27141 = (i__13023__auto___27140 + (1));
i__13023__auto___27140 = G__27141;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} === ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq27131){
var G__27132 = cljs.core.first(seq27131);
var seq27131__$1 = cljs.core.next(seq27131);
var G__27133 = cljs.core.first(seq27131__$1);
var seq27131__$2 = cljs.core.next(seq27131__$1);
var G__27134 = cljs.core.first(seq27131__$2);
var seq27131__$3 = cljs.core.next(seq27131__$2);
var G__27135 = cljs.core.first(seq27131__$3);
var seq27131__$4 = cljs.core.next(seq27131__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__27132,G__27133,G__27134,G__27135,seq27131__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__13068__auto___27142 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__13068__auto___27143 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__13068__auto___27144 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___27145 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__GT_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___27146 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___27156 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__27155 = arguments.length;
switch (G__27155) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27158 = arguments.length;
var i__13023__auto___27159 = (0);
while(true){
if((i__13023__auto___27159 < len__13022__auto___27158)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27159]));

var G__27160 = (i__13023__auto___27159 + (1));
i__13023__auto___27159 = G__27160;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27147__auto__),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__27148__auto__),(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27147__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__27148__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27147__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__27148__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_max),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_max),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq27150){
var G__27151 = cljs.core.first(seq27150);
var seq27150__$1 = cljs.core.next(seq27150);
var G__27152 = cljs.core.first(seq27150__$1);
var seq27150__$2 = cljs.core.next(seq27150__$1);
var G__27153 = cljs.core.first(seq27150__$2);
var seq27150__$3 = cljs.core.next(seq27150__$2);
var G__27154 = cljs.core.first(seq27150__$3);
var seq27150__$4 = cljs.core.next(seq27150__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__27151,G__27152,G__27153,G__27154,seq27150__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__13068__auto___27170 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__27169 = arguments.length;
switch (G__27169) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27172 = arguments.length;
var i__13023__auto___27173 = (0);
while(true){
if((i__13023__auto___27173 < len__13022__auto___27172)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27173]));

var G__27174 = (i__13023__auto___27173 + (1));
i__13023__auto___27173 = G__27174;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27161__auto__),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__27162__auto__),(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27161__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__27162__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27161__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$y__27162__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_min),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_min),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq27164){
var G__27165 = cljs.core.first(seq27164);
var seq27164__$1 = cljs.core.next(seq27164);
var G__27166 = cljs.core.first(seq27164__$1);
var seq27164__$2 = cljs.core.next(seq27164__$1);
var G__27167 = cljs.core.first(seq27164__$2);
var seq27164__$3 = cljs.core.next(seq27164__$2);
var G__27168 = cljs.core.first(seq27164__$3);
var seq27164__$4 = cljs.core.next(seq27164__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__27165,G__27166,G__27167,G__27168,seq27164__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__13068__auto___27175 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = num;
return cljs.core._conj((function (){var x__12697__auto____$1 = div;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} % ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__13068__auto___27176 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"(~ ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__13068__auto___27184 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__27183 = arguments.length;
switch (G__27183) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27186 = arguments.length;
var i__13023__auto___27187 = (0);
while(true){
if((i__13023__auto___27187 < len__13022__auto___27186)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27187]));

var G__27188 = (i__13023__auto___27187 + (1));
i__13023__auto___27187 = G__27188;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq27178){
var G__27179 = cljs.core.first(seq27178);
var seq27178__$1 = cljs.core.next(seq27178);
var G__27180 = cljs.core.first(seq27178__$1);
var seq27178__$2 = cljs.core.next(seq27178__$1);
var G__27181 = cljs.core.first(seq27178__$2);
var seq27178__$3 = cljs.core.next(seq27178__$2);
var G__27182 = cljs.core.first(seq27178__$3);
var seq27178__$4 = cljs.core.next(seq27178__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__27179,G__27180,G__27181,G__27182,seq27178__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__13068__auto___27196 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__27195 = arguments.length;
switch (G__27195) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27198 = arguments.length;
var i__13023__auto___27199 = (0);
while(true){
if((i__13023__auto___27199 < len__13022__auto___27198)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27199]));

var G__27200 = (i__13023__auto___27199 + (1));
i__13023__auto___27199 = G__27200;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} & ~{})"),cljs.core.cst$sym$js_STAR_));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq27190){
var G__27191 = cljs.core.first(seq27190);
var seq27190__$1 = cljs.core.next(seq27190);
var G__27192 = cljs.core.first(seq27190__$1);
var seq27190__$2 = cljs.core.next(seq27190__$1);
var G__27193 = cljs.core.first(seq27190__$2);
var seq27190__$3 = cljs.core.next(seq27190__$2);
var G__27194 = cljs.core.first(seq27190__$3);
var seq27190__$4 = cljs.core.next(seq27190__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__27191,G__27192,G__27193,G__27194,seq27190__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__13068__auto___27208 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__27207 = arguments.length;
switch (G__27207) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27210 = arguments.length;
var i__13023__auto___27211 = (0);
while(true){
if((i__13023__auto___27211 < len__13022__auto___27210)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27211]));

var G__27212 = (i__13023__auto___27211 + (1));
i__13023__auto___27211 = G__27212;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} | ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq27202){
var G__27203 = cljs.core.first(seq27202);
var seq27202__$1 = cljs.core.next(seq27202);
var G__27204 = cljs.core.first(seq27202__$1);
var seq27202__$2 = cljs.core.next(seq27202__$1);
var G__27205 = cljs.core.first(seq27202__$2);
var seq27202__$3 = cljs.core.next(seq27202__$2);
var G__27206 = cljs.core.first(seq27202__$3);
var seq27202__$4 = cljs.core.next(seq27202__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__27203,G__27204,G__27205,G__27206,seq27202__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__13068__auto___27213 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_or),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__13068__auto___27221 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__27220 = arguments.length;
switch (G__27220) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27223 = arguments.length;
var i__13023__auto___27224 = (0);
while(true){
if((i__13023__auto___27224 < len__13022__auto___27223)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27224]));

var G__27225 = (i__13023__auto___27224 + (1));
i__13023__auto___27224 = G__27225;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} ^ ~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq27215){
var G__27216 = cljs.core.first(seq27215);
var seq27215__$1 = cljs.core.next(seq27215);
var G__27217 = cljs.core.first(seq27215__$1);
var seq27215__$2 = cljs.core.next(seq27215__$1);
var G__27218 = cljs.core.first(seq27215__$2);
var seq27215__$3 = cljs.core.next(seq27215__$2);
var G__27219 = cljs.core.first(seq27215__$3);
var seq27215__$4 = cljs.core.next(seq27215__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__27216,G__27217,G__27218,G__27219,seq27215__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__13068__auto___27233 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__27232 = arguments.length;
switch (G__27232) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27235 = arguments.length;
var i__13023__auto___27236 = (0);
while(true){
if((i__13023__auto___27236 < len__13022__auto___27235)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27236]));

var G__27237 = (i__13023__auto___27236 + (1));
i__13023__auto___27236 = G__27237;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} & ~~{})"),cljs.core.cst$sym$js_STAR_);
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and_DASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_and_DASH_not),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = y;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq27227){
var G__27228 = cljs.core.first(seq27227);
var seq27227__$1 = cljs.core.next(seq27227);
var G__27229 = cljs.core.first(seq27227__$1);
var seq27227__$2 = cljs.core.next(seq27227__$1);
var G__27230 = cljs.core.first(seq27227__$2);
var seq27227__$3 = cljs.core.next(seq27227__$2);
var G__27231 = cljs.core.first(seq27227__$3);
var seq27227__$4 = cljs.core.next(seq27227__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__27228,G__27229,G__27230,G__27231,seq27227__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__13068__auto___27238 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} & ~(1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__13068__auto___27239 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} ^ (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__13068__auto___27240 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),cljs.core.cst$sym$js_STAR_));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__13068__auto___27241 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} << ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__13068__auto___27242 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} >> ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__13068__auto___27243 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__13068__auto___27244 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} >>> ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__13068__auto___27245 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = x;
return cljs.core._conj((function (){var x__12697__auto____$1 = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"(~{} | (1 << ~{}))"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__13068__auto___27246 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = hash;
return cljs.core._conj((function (){var x__12697__auto____$1 = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__13068__auto___27247 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_mask),(function (){var x__12697__auto__ = hash;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = shift;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"(1 << ~{})"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__13068__auto___27249 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__27248__auto__),(function (){var x__12697__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__27248__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__27248__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__27248__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = hash_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = coll;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = hash_key;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__27248__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$h__27248__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__12697__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = doc;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cargs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27250__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27250__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
var ret__13068__auto___27258 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27259 = arguments.length;
var i__13023__auto___27260 = (0);
while(true){
if((i__13023__auto___27260 < len__13022__auto___27259)){
args__13029__auto__.push((arguments[i__13023__auto___27260]));

var G__27261 = (i__13023__auto___27260 + (1));
i__13023__auto___27260 = G__27261;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((6) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__13030__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq27251){
var G__27252 = cljs.core.first(seq27251);
var seq27251__$1 = cljs.core.next(seq27251);
var G__27253 = cljs.core.first(seq27251__$1);
var seq27251__$2 = cljs.core.next(seq27251__$1);
var G__27254 = cljs.core.first(seq27251__$2);
var seq27251__$3 = cljs.core.next(seq27251__$2);
var G__27255 = cljs.core.first(seq27251__$3);
var seq27251__$4 = cljs.core.next(seq27251__$3);
var G__27256 = cljs.core.first(seq27251__$4);
var seq27251__$5 = cljs.core.next(seq27251__$4);
var G__27257 = cljs.core.first(seq27251__$5);
var seq27251__$6 = cljs.core.next(seq27251__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__27252,G__27253,G__27254,G__27255,G__27256,G__27257,seq27251__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12697__auto__ = f1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = clojure.walk.postwalk((function (p1__27262_SHARP_){
if(cljs.core.sequential_QMARK_(p1__27262_SHARP_)){
var G__27266 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__27262_SHARP_);
var fexpr__27265 = ((cljs.core.vector_QMARK_(p1__27262_SHARP_))?cljs.core.vec:cljs.core.identity);
return (fexpr__27265.cljs$core$IFn$_invoke$arity$1 ? fexpr__27265.cljs$core$IFn$_invoke$arity$1(G__27266) : fexpr__27265.call(null,G__27266));
} else {
return p1__27262_SHARP_;
}
}),fkv);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = fkv;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
var ret__13068__auto___27271 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__27267,fkv){
var vec__27268 = p__27267;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27268,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27268,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",cljs.core.cst$sym$object,"object",cljs.core.cst$sym$string,"string",cljs.core.cst$sym$number,"number",cljs.core.cst$sym$array,"array",cljs.core.cst$sym$function,"function",cljs.core.cst$sym$boolean,"boolean",cljs.core.cst$sym$default,"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$js_SLASH_Boolean,"boolean",cljs.core.cst$sym$js_SLASH_String,"string",cljs.core.cst$sym$js_SLASH_Array,"array",cljs.core.cst$sym$js_SLASH_Object,"object",cljs.core.cst$sym$js_SLASH_Number,"number",cljs.core.cst$sym$js_SLASH_Function,"function"], null);
var ret__13068__auto___27275 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27276 = arguments.length;
var i__13023__auto___27277 = (0);
while(true){
if((i__13023__auto___27277 < len__13022__auto___27276)){
args__13029__auto__.push((arguments[i__13023__auto___27277]));

var G__27278 = (i__13023__auto___27277 + (1));
i__13023__auto___27277 = G__27278;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anonymous,true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(cljs.core.cst$kw$locals.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_deftype),(function (){var x__12697__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,(function (){var x__12697__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IWithMeta),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12697__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,(function (){var x__12697__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_IMeta),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12697__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = meta_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12697__auto__ = t;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,(function (){var x__12697__auto__ = cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq27272){
var G__27273 = cljs.core.first(seq27272);
var seq27272__$1 = cljs.core.next(seq27272);
var G__27274 = cljs.core.first(seq27272__$1);
var seq27272__$2 = cljs.core.next(seq27272__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__27273,G__27274,seq27272__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__13068__auto___27283 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27284 = arguments.length;
var i__13023__auto___27285 = (0);
while(true){
if((i__13023__auto___27285 < len__13022__auto___27284)){
args__13029__auto__.push((arguments[i__13023__auto___27285]));

var G__27286 = (i__13023__auto___27285 + (1));
i__13023__auto___27285 = G__27286;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$extend,cljs.core.cst$kw$instance], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impls], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq27279){
var G__27280 = cljs.core.first(seq27279);
var seq27279__$1 = cljs.core.next(seq27279);
var G__27281 = cljs.core.first(seq27279__$1);
var seq27279__$2 = cljs.core.next(seq27279__$1);
var G__27282 = cljs.core.first(seq27279__$2);
var seq27279__$3 = cljs.core.next(seq27279__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27280,G__27281,G__27282,seq27279__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__13068__auto___27291 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27292 = arguments.length;
var i__13023__auto___27293 = (0);
while(true){
if((i__13023__auto___27293 < len__13022__auto___27292)){
args__13029__auto__.push((arguments[i__13023__auto___27293]));

var G__27294 = (i__13023__auto___27293 + (1));
i__13023__auto___27293 = G__27294;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_specify_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_clone),(function (){var x__12697__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impls], 0))));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq27287){
var G__27288 = cljs.core.first(seq27287);
var seq27287__$1 = cljs.core.next(seq27287);
var G__27289 = cljs.core.first(seq27287__$1);
var seq27287__$2 = cljs.core.next(seq27287__$1);
var G__27290 = cljs.core.first(seq27287__$2);
var seq27287__$3 = cljs.core.next(seq27287__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__27288,G__27289,G__27290,seq27287__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__13068__auto___27295 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"this"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__13068__auto___27300 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27301 = arguments.length;
var i__13023__auto___27302 = (0);
while(true){
if((i__13023__auto___27302 < len__13022__auto___27301)){
args__13029__auto__.push((arguments[i__13023__auto___27302]));

var G__27303 = (i__13023__auto___27302 + (1));
i__13023__auto___27302 = G__27303;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_this))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq27296){
var G__27297 = cljs.core.first(seq27296);
var seq27296__$1 = cljs.core.next(seq27296);
var G__27298 = cljs.core.first(seq27296__$1);
var seq27296__$2 = cljs.core.next(seq27296__$1);
var G__27299 = cljs.core.first(seq27296__$2);
var seq27296__$3 = cljs.core.next(seq27296__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__27297,G__27298,G__27299,seq27296__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$Object,p)){
return null;
} else {
var temp__5455__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p);
if(cljs.core.truth_(temp__5455__auto__)){
var var$ = temp__5455__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
}

if(cljs.core.truth_((function (){var and__11731__auto__ = cljs.core.cst$kw$protocol_DASH_deprecated.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__11731__auto__)){
var and__11731__auto____$1 = cljs.core.cst$kw$deprecated.cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__11731__auto____$1)){
return cljs.core.not(cljs.core.cst$kw$deprecation_DASH_nowarn.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__11731__auto____$1;
}
} else {
return and__11731__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_deprecated,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$protocol_DASH_symbol.cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces], null),((function (var$,temp__5455__auto__){
return (function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$defs,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),cljs.core.cst$kw$impls], null),cljs.core.conj,type);
});})(var$,temp__5455__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$undeclared.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning(cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq(s)){
var G__27304 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__27305 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__27304;
s = G__27305;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__27306){
var vec__27307 = p__27306;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27307,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27307,(1),null);
cljs.core$macros.warn_and_update_protocol(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__12697__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (psym,pfn_prefix,vec__27307,p,sigs){
return (function (p__27310){
var vec__27311 = p__27310;
var seq__27312 = cljs.core.seq(vec__27311);
var first__27313 = cljs.core.first(seq__27312);
var seq__27312__$1 = cljs.core.next(seq__27312);
var f = first__27313;
var meths = seq__27312__$1;
var form = vec__27311;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = type;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});})(psym,pfn_prefix,vec__27307,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__12798__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12799__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12800__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12801__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),((function (method_table__12798__auto__,prefer_table__12799__auto__,method_cache__12800__auto__,cached_hierarchy__12801__auto__,hierarchy__12802__auto__){
return (function (tsym,sym){
return cljs.core.cst$kw$extend.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
});})(method_table__12798__auto__,prefer_table__12799__auto__,method_cache__12800__auto__,cached_hierarchy__12801__auto__,hierarchy__12802__auto__))
,cljs.core.cst$kw$default,hierarchy__12802__auto__,method_table__12798__auto__,prefer_table__12799__auto__,method_cache__12800__auto__,cached_hierarchy__12801__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$instance,(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__12697__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__12697__auto__ = tsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_prototype),(function (){var x__12697__auto__ = cljs.core$macros.to_property(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__27314){
var vec__27315 = p__27314;
var seq__27316 = cljs.core.seq(vec__27315);
var first__27317 = cljs.core.first(seq__27316);
var seq__27316__$1 = cljs.core.next(seq__27316);
var vec__27318 = first__27317;
var seq__27319 = cljs.core.seq(vec__27318);
var first__27320 = cljs.core.first(seq__27319);
var seq__27319__$1 = cljs.core.next(seq__27319);
var this$ = first__27320;
var args = seq__27319__$1;
var sig = vec__27318;
var body = seq__27316__$1;
var x__12697__auto__ = cljs.core.vec(args);
return cljs.core._conj((function (){var x__12697__auto____$1 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$this_DASH_as,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type),body);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__27321){
var vec__27322 = p__27321;
var seq__27323 = cljs.core.seq(vec__27322);
var first__27324 = cljs.core.first(seq__27323);
var seq__27323__$1 = cljs.core.next(seq__27323);
var vec__27325 = first__27324;
var seq__27326 = cljs.core.seq(vec__27325);
var first__27327 = cljs.core.first(seq__27326);
var seq__27326__$1 = cljs.core.next(seq__27326);
var this$ = first__27327;
var args = seq__27326__$1;
var sig = vec__27325;
var body = seq__27323__$1;
var self_sym = cljs.core.with_meta(cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.vec(cljs.core.cons(self_sym,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__12697__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = self_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__27328){
var vec__27329 = p__27328;
var seq__27330 = cljs.core.seq(vec__27329);
var first__27331 = cljs.core.first(seq__27330);
var seq__27330__$1 = cljs.core.next(seq__27330);
var vec__27332 = first__27331;
var seq__27333 = cljs.core.seq(vec__27332);
var first__27334 = cljs.core.first(seq__27333);
var seq__27333__$1 = cljs.core.next(seq__27333);
var this$ = first__27334;
var args = seq__27333__$1;
var sig = vec__27332;
var body = seq__27330__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.vec(args);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__12697__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__27335){
var vec__27336 = p__27335;
var seq__27337 = cljs.core.seq(vec__27336);
var first__27338 = cljs.core.first(seq__27337);
var seq__27337__$1 = cljs.core.next(seq__27337);
var vec__27339 = first__27338;
var seq__27340 = cljs.core.seq(vec__27339);
var first__27341 = cljs.core.first(seq__27340);
var seq__27340__$1 = cljs.core.next(seq__27340);
var this$ = first__27341;
var args = seq__27340__$1;
var sig = vec__27339;
var body = seq__27337__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$tag,type);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.vec(cljs.core.cons(this_SINGLEQUOTE_,args));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__12697__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27343){
var vec__27344 = p__27343;
var seq__27345 = cljs.core.seq(vec__27344);
var first__27346 = cljs.core.first(seq__27345);
var seq__27345__$1 = cljs.core.next(seq__27345);
var f = first__27346;
var meths = seq__27345__$1;
var form = vec__27344;
var vec__27347 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27347,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27347,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1) : cljs.core$macros.extend_prefix.call(null,type_sym,f__$1));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27347,f__$1,meths__$1,vec__27344,seq__27345,first__27346,seq__27345__$1,f,meths,form){
return (function (p1__27342_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__27342_SHARP_);
});})(vec__27347,f__$1,meths__$1,vec__27344,seq__27345,first__27346,seq__27345__$1,f,meths,form))
,meths__$1)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__27351){
var vec__27352 = p__27351;
var seq__27353 = cljs.core.seq(vec__27352);
var first__27354 = cljs.core.first(seq__27353);
var seq__27353__$1 = cljs.core.next(seq__27353);
var f = first__27354;
var meths = seq__27353__$1;
var form = vec__27352;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27352,seq__27353,first__27354,seq__27353__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = (function (){var G__27357 = type_sym;
var G__27358 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''));
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__27357,G__27358) : cljs.core$macros.extend_prefix.call(null,G__27357,G__27358));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = meth;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});})(vec__27352,seq__27353,first__27354,seq__27353__$1,f,meths,form))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27352,seq__27353,first__27354,seq__27353__$1,f,meths,form){
return (function (p1__27350_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__27350_SHARP_);
});})(vec__27352,seq__27353,first__27354,seq__27353__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__27360){
var vec__27361 = p__27360;
var seq__27362 = cljs.core.seq(vec__27361);
var first__27363 = cljs.core.first(seq__27362);
var seq__27362__$1 = cljs.core.next(seq__27362);
var f = first__27363;
var meths = seq__27362__$1;
var form = vec__27361;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27361,seq__27362,first__27363,seq__27362__$1,f,meths,form){
return (function (p1__27359_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__27359_SHARP_);
});})(vec__27361,seq__27362,first__27363,seq__27362__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta(cljs.core.cst$sym$self__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = (function (){var G__27366 = type_sym;
var G__27367 = cljs.core.cst$sym$call;
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__27366,G__27367) : cljs.core$macros.extend_prefix.call(null,G__27366,G__27367));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),meths__$1))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = (function (){var G__27370 = type_sym;
var G__27371 = cljs.core.cst$sym$apply;
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__27370,G__27371) : cljs.core$macros.extend_prefix.call(null,G__27370,G__27371));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),(function (){var x__12697__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_call),(function (){var x__12697__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$concat),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),(function (){var x__12697__auto__ = this_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),(function (){var x__12697__auto__ = argsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__27372){
var vec__27373 = p__27372;
var seq__27374 = cljs.core.seq(vec__27373);
var first__27375 = cljs.core.first(seq__27374);
var seq__27374__$1 = cljs.core.next(seq__27374);
var f = first__27375;
var meths = seq__27374__$1;
var form = vec__27373;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f))].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = (function (){var G__27378 = type_sym;
var G__27379 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(meth)))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__27378,G__27379) : cljs.core$macros.extend_prefix.call(null,G__27378,G__27379));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pf,vec__27373,seq__27374,first__27375,seq__27374__$1,f,meths,form){
return (function (p__27380){
var vec__27381 = p__27380;
var seq__27382 = cljs.core.seq(vec__27381);
var first__27383 = cljs.core.first(seq__27382);
var seq__27382__$1 = cljs.core.next(seq__27382);
var sig = first__27383;
var body = seq__27382__$1;
var meth = vec__27381;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = (function (){var G__27386 = type_sym;
var G__27387 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__27386,G__27387) : cljs.core$macros.extend_prefix.call(null,G__27386,G__27387));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core$macros.adapt_proto_params(type,meth);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))),cljs.core.meta(form));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});})(pf,vec__27373,seq__27374,first__27375,seq__27374__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__27388){
var vec__27389 = p__27388;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27389,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27389,(1),null);
cljs.core$macros.warn_and_update_protocol(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(cljs.core.cst$kw$skip_DASH_protocol_DASH_flag.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$Object)){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag.call(null,psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix) : cljs.core$macros.extend_prefix.call(null,type_sym,pprefix));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL)], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (psym,pprefix,skip_flag,vec__27389,p,sigs){
return (function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,cljs.core.cst$sym$cljs$core_SLASH_IFn)){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__27389,p,sigs))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sigs], 0)));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$Object)){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p);
var minfo = cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$protocol_DASH_info.cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first(method);
var __GT_name = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name);
var vec__27392 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(__GT_name.cljs$core$IFn$_invoke$arity$1 ? __GT_name.cljs$core$IFn$_invoke$arity$1(method_name) : __GT_name.call(null,method_name)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27392,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27392,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(method_name))){
var method_var_27395 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(method_var_27395))){
} else {
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,method_name,cljs.core.cst$kw$no_DASH_such_DASH_method,true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(sigs__$1)){
var sig = cljs.core.first(sigs__$1);
var c = cljs.core.count(sig);
if(cljs.core.contains_QMARK_(seen,c)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_duped_DASH_method,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),sig))){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$name,fname], null));
} else {
}

if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,cljs.core.cst$kw$cljs$core$macros_SLASH_not_DASH_found)) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths))))){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,env,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$fname,fname,cljs.core.cst$kw$invalid_DASH_arity,c], null));
} else {
}

var G__27396 = cljs.core.next(sigs__$1);
var G__27397 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__27396;
seen = G__27397;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq(impls__$1)){
var proto = cljs.core.first(impls__$1);
var methods$ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
var impls__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
if(cljs.core.contains_QMARK_(protos,proto)){
cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$protocol,proto], null));
} else {
}

var seen_27401 = cljs.core.PersistentHashSet.EMPTY;
var methods_27402__$1 = methods$;
while(true){
if(cljs.core.seq(methods_27402__$1)){
var vec__27398_27403 = cljs.core.first(methods_27402__$1);
var fname_27404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27398_27403,(0),null);
var method_27405 = vec__27398_27403;
if(cljs.core.contains_QMARK_(seen_27401,fname_27404)){
cljs.analyzer.warning(cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,proto,cljs.core.cst$kw$method,fname_27404], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_27405);

var G__27406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_27401,fname_27404);
var G__27407 = cljs.core.next(methods_27402__$1);
seen_27401 = G__27406;
methods_27402__$1 = G__27407;
continue;
} else {
}
break;
}

var G__27408 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__27409 = impls__$2;
protos = G__27408;
impls__$1 = G__27409;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,(0),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((argv.cljs$core$IFn$_invoke$arity$1 ? argv.cljs$core$IFn$_invoke$arity$1((0)) : argv.call(null,(0))),cljs.core.assoc,cljs.core.cst$kw$tag,type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(sig),cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.second(sig)),cljs.core.nnext(sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.first(sig)),cljs.core.next(sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sigs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest(sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_(cljs.core.second(sig))){
return cljs.core$macros.type_hint_single_arity_sig(type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs(type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv((function (m,proto,sigs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,proto,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__13068__auto___27419 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27420 = arguments.length;
var i__13023__auto___27421 = (0);
while(true){
if((i__13023__auto___27421 < len__13022__auto___27420)){
args__13029__auto__.push((arguments[i__13023__auto___27421]));

var G__27422 = (i__13023__auto___27421 + (1));
i__13023__auto___27421 = G__27422;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var impl_map__$1 = (cljs.core.truth_((function (){var fexpr__27418 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$boolean,null,cljs.core.cst$sym$number,null], null), null);
return (fexpr__27418.cljs$core$IFn$_invoke$arity$1 ? fexpr__27418.cljs$core$IFn$_invoke$arity$1(type_sym) : fexpr__27418.call(null,type_sym));
})())?cljs.core$macros.type_hint_impl_map(type_sym,impl_map):impl_map);
var vec__27415 = (function (){var temp__5455__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type.call(null,type_sym));
if(cljs.core.truth_(temp__5455__auto__)){
var type = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(type_sym) : resolve.call(null,type_sym)),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27415,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27415,(1),null);
if(cljs.core.truth_((function (){var and__11731__auto__ = cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__11731__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym));
} else {
return and__11731__auto__;
}
})())){
cljs.analyzer.warning(cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_symbol,type_sym,cljs.core.cst$kw$suggested_DASH_symbol,(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (env,_,resolve,impl_map,impl_map__$1,vec__27415,type,assign_impls){
return (function (p1__27410_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__27410_SHARP_) : assign_impls.call(null,env,resolve,type_sym,type,p1__27410_SHARP_));
});})(env,_,resolve,impl_map,impl_map__$1,vec__27415,type,assign_impls))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impl_map__$1], 0)))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq27411){
var G__27412 = cljs.core.first(seq27411);
var seq27411__$1 = cljs.core.next(seq27411);
var G__27413 = cljs.core.first(seq27411__$1);
var seq27411__$2 = cljs.core.next(seq27411__$1);
var G__27414 = cljs.core.first(seq27411__$2);
var seq27411__$3 = cljs.core.next(seq27411__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__27412,G__27413,G__27414,seq27411__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var fpp_pbs = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.fast_path_protocols,cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
var parts = (function (){var parts = cljs.core.group_by(cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__27424){
var vec__27425 = p__27424;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27425,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27425,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27425,f,sigs){
return (function (p1__27423_SHARP_){
return cljs.core.cons(cljs.core.second(p1__27423_SHARP_),cljs.core.nnext(p1__27423_SHARP_));
});})(vec__27425,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__27429 = arguments.length;
switch (G__27429) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$analyzer_SLASH_type,type,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_impl,true,cljs.core.cst$kw$cljs$analyzer_SLASH_protocol_DASH_inline,inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var p = cljs.core.first(specs__$1);
var ret__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1)))));
var specs__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1));
var G__27431 = ret__$1;
var G__27432 = specs__$2;
ret = G__27431;
specs__$1 = G__27432;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27433_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),p1__27433_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_DASH__GT_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$positional));
var field_values = (cljs.core.truth_(cljs.core.cst$kw$internal_DASH_ctor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__12697__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12697__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_values], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__13068__auto___27445 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27446 = arguments.length;
var i__13023__auto___27447 = (0);
while(true){
if((i__13023__auto___27447 < len__13022__auto___27446)){
args__13029__auto__.push((arguments[i__13023__auto___27447]));

var G__27448 = (i__13023__auto___27447 + (1));
i__13023__auto___27447 = G__27448;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((4) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13030__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$locals),t));
var vec__27442 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27442,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27442,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$deftype_STAR_),(function (){var x__12697__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = ((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__12697__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),(function (){var x__12697__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__12697__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorStr),(function (){var x__12697__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__12697__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27434__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__27435__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opt__27436__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__27435__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core$macros.build_positional_factory(t__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = t__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq27437){
var G__27438 = cljs.core.first(seq27437);
var seq27437__$1 = cljs.core.next(seq27437);
var G__27439 = cljs.core.first(seq27437__$1);
var seq27437__$2 = cljs.core.next(seq27437__$1);
var G__27440 = cljs.core.first(seq27437__$2);
var seq27437__$3 = cljs.core.next(seq27437__$2);
var G__27441 = cljs.core.first(seq27437__$3);
var seq27437__$4 = cljs.core.next(seq27437__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__27438,G__27439,G__27440,G__27441,seq27437__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hinted_fields){
return (function (p1__27449_SHARP_){
return cljs.core.with_meta(p1__27449_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(rname)),"{"].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,cljs.core.cst$sym$__meta,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$sym$__extmap,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$IRecord,cljs.core.cst$sym$ICloneable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_clone),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27450__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12697__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fields__$2], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.cst$sym$IHash,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_hash),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27451__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_caching_DASH_hash),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27451__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$coll__27452__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_bit_DASH_xor),(function (){var x__12697__auto__ = cljs.core.hash([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(rname))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_hash_DASH_unordered_DASH_coll),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$coll__27452__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__hash)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.cst$sym$IEquiv,(function (){var this$ = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$this);
var other = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$other);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_equiv),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_some_QMARK_),(function (){var x__12697__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),(function (){var x__12697__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_constructor),(function (){var x__12697__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__12697__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core$macros.to_property(field);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$$),(function (){var x__12697__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core$macros.to_property(field);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH___extmap),(function (){var x__12697__auto__ = this$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH___extmap),(function (){var x__12697__auto__ = other;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
})(),cljs.core.cst$sym$IMeta,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_meta),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27453__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)], 0)))),cljs.core.cst$sym$IWithMeta,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_with_DASH_meta),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27454__auto__),(function (){var x__12697__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12697__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$__meta,gs], null),fields__$2)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.cst$sym$ILookup,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27455__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__27456__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_lookup),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27455__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__27456__auto__),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_lookup),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27457__auto__),(function (){var x__12697__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$else__27458__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),(function (){var x__12697__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_fields], 0)),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = ksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$else__27458__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.cst$sym$ICounted,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_count),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27459__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__PLUS_),(function (){var x__12697__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.cst$sym$ICollection,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_conj),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27460__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__27461__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__27461__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27460__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__27461__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__27461__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_reduce),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27460__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$entry__27461__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.cst$sym$IAssociative,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_assoc),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27462__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__27463__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_condp),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_keyword_DASH_identical_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__27463__auto__),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$new,tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,cljs.core.cst$sym$__hash,null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_fields], 0)),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12697__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_assoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__27463__auto__),(function (){var x__12697__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.cst$sym$IMap,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_dissoc),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27464__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__27465__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_),(function (){var x__12697__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__27465__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_with_DASH_meta),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__12697__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27464__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__meta)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__27465__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12697__auto__ = tagname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$__hash,null,cljs.core.cst$sym$__extmap,null], null), null),fields__$2),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_empty),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$k__27465__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.cst$sym$ISeqable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_seq),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27467__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__27466_SHARP_){
return cljs.core._conj((function (){var x__12697__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__27466_SHARP_);
return cljs.core._conj((function (){var x__12697__auto____$1 = p1__27466_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.cst$sym$IIterable,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_iterator),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12697__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$RecordIter$),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = gs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.count(base_fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_nil_DASH_iter))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.cst$sym$IPrintWithWriter,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_pr_DASH_writer),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27469__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__27470__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__27471__auto__)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__27472__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__27473__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__27470__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY," "),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__27471__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$keyval__27473__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_pr_DASH_sequential_DASH_writer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__27470__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$pr_DASH_pair__27472__auto__),(function (){var x__12697__auto__ = pr_open;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,"}"),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$opts__27471__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__27468_SHARP_){
return cljs.core._conj((function (){var x__12697__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__27468_SHARP_);
return cljs.core._conj((function (){var x__12697__auto____$1 = p1__27468_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_vector);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$__extmap)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))))], null));
var vec__27474 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27474,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27474,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,cljs.core.cst$kw$protocols,protocols,cljs.core.cst$kw$skip_DASH_protocol_DASH_flag,fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$defrecord_STAR_),(function (){var x__12697__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = hinted_fields;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = pmasks;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_extend_DASH_type),(function (){var x__12697__auto__ = tagname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$map_DASH__GT_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),cljs.core.cst$kw$factory,cljs.core.cst$kw$map));
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__12697__auto__ = fn_name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12697__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12697__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([getters,cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_empty),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_dissoc),(function (){var x__12697__auto__ = ms;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
var ret__13068__auto___27484 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27485 = arguments.length;
var i__13023__auto___27486 = (0);
while(true){
if((i__13023__auto___27486 < len__13022__auto___27485)){
args__13029__auto__.push((arguments[i__13023__auto___27486]));

var G__27487 = (i__13023__auto___27486 + (1));
i__13023__auto___27486 = G__27487;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((4) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13030__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),rsym__$1)),cljs.core.assoc,cljs.core.cst$kw$internal_DASH_ctor,true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_getBasis),(function (){var x__12697__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$type),(function (){var x__12697__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrSeq),(function (){var x__12697__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27477__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_list),(function (){var x__12697__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_cljs$lang$ctorPrWriter),(function (){var x__12697__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27477__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__27478__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_write),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$writer__27478__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core$macros.build_positional_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core$macros.build_map_factory(rsym__$1,r,fields);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = r;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq27479){
var G__27480 = cljs.core.first(seq27479);
var seq27479__$1 = cljs.core.next(seq27479);
var G__27481 = cljs.core.first(seq27479__$1);
var seq27479__$2 = cljs.core.next(seq27479__$1);
var G__27482 = cljs.core.first(seq27479__$2);
var seq27479__$3 = cljs.core.next(seq27479__$2);
var G__27483 = cljs.core.first(seq27479__$3);
var seq27479__$4 = cljs.core.next(seq27479__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__27480,G__27481,G__27482,G__27483,seq27479__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__13068__auto___27515 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27516 = arguments.length;
var i__13023__auto___27517 = (0);
while(true){
if((i__13023__auto___27517 < len__13022__auto___27516)){
args__13029__auto__.push((arguments[i__13023__auto___27517]));

var G__27518 = (i__13023__auto___27517 + (1));
i__13023__auto___27517 = G__27518;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var vec__27494 = ((typeof cljs.core.first(doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(doc_PLUS_methods),cljs.core.next(doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27494,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27494,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(psym,cljs.core.assoc,cljs.core.cst$kw$doc,doc,cljs.core.cst$kw$protocol_DASH_symbol,true);
var ns_name = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__27494,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__27494,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__27497 = cljs.core.seq(methods$);
var chunk__27498 = null;
var count__27499 = (0);
var i__27500 = (0);
while(true){
if((i__27500 < count__27499)){
var vec__27501 = chunk__27498.cljs$core$IIndexed$_nth$arity$2(null,i__27500);
var seq__27502 = cljs.core.seq(vec__27501);
var first__27503 = cljs.core.first(seq__27502);
var seq__27502__$1 = cljs.core.next(seq__27502);
var mname = first__27503;
var arities = seq__27502__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__27519 = seq__27497;
var G__27520 = chunk__27498;
var G__27521 = count__27499;
var G__27522 = (i__27500 + (1));
seq__27497 = G__27519;
chunk__27498 = G__27520;
count__27499 = G__27521;
i__27500 = G__27522;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27497);
if(temp__5457__auto__){
var seq__27497__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27497__$1)){
var c__12674__auto__ = cljs.core.chunk_first(seq__27497__$1);
var G__27523 = cljs.core.chunk_rest(seq__27497__$1);
var G__27524 = c__12674__auto__;
var G__27525 = cljs.core.count(c__12674__auto__);
var G__27526 = (0);
seq__27497 = G__27523;
chunk__27498 = G__27524;
count__27499 = G__27525;
i__27500 = G__27526;
continue;
} else {
var vec__27504 = cljs.core.first(seq__27497__$1);
var seq__27505 = cljs.core.seq(vec__27504);
var first__27506 = cljs.core.first(seq__27505);
var seq__27505__$1 = cljs.core.next(seq__27505);
var mname = first__27506;
var arities = seq__27505__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__27527 = cljs.core.next(seq__27497__$1);
var G__27528 = null;
var G__27529 = (0);
var G__27530 = (0);
seq__27497 = G__27527;
chunk__27498 = G__27528;
count__27499 = G__27529;
i__27500 = G__27530;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__27494,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (p,vec__27494,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_(arg)) && (!((cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();

}
}
});})(p,vec__27494,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = sig__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12697__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = slot;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),sig__$1], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27488__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12697__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12697__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__27489__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__12697__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog_SLASH_typeOf),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27488__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__27489__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__27489__auto__),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__27489__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__12697__auto__ = fqn(fname);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,"_")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__27489__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$m__27489__auto__),sig__$1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_missing_DASH_protocol),(function (){var x__12697__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.first(sig__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});})(p,vec__27494,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_info,cljs.core.cst$kw$methods], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p,vec__27494,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__27507){
var vec__27508 = p__27507;
var seq__27509 = cljs.core.seq(vec__27508);
var first__27510 = cljs.core.first(seq__27509);
var seq__27509__$1 = cljs.core.next(seq__27509);
var fname = first__27510;
var sigs = seq__27509__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,cljs.core.cst$kw$doc,doc__$1),cljs.core.vec(sigs__$1)], null);
});})(p,vec__27494,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__27494,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__27511){
var vec__27512 = p__27511;
var seq__27513 = cljs.core.seq(vec__27512);
var first__27514 = cljs.core.first(seq__27513);
var seq__27513__$1 = cljs.core.next(seq__27513);
var fname = first__27514;
var sigs = seq__27513__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,sigs__$1)))?cljs.analyzer.warning(cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$protocol,psym__$2,cljs.core.cst$kw$name,fname], null)):null);
var slot = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fname))].join(''));
var fname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(fname,cljs.core.assoc,cljs.core.cst$kw$protocol,p,cljs.core.cst$kw$doc,doc__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),(function (){var x__12697__auto__ = fname__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__27512,seq__27513,first__27514,seq__27513__$1,fname,sigs,p,vec__27494,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig(fname__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__27512,seq__27513,first__27514,seq__27513__$1,fname,sigs,p,vec__27494,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1)], 0))));
});})(p,vec__27494,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__12697__auto__ = psym__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_STAR_),cljs.core._conj(cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq27490){
var G__27491 = cljs.core.first(seq27490);
var seq27490__$1 = cljs.core.next(seq27490);
var G__27492 = cljs.core.first(seq27490__$1);
var seq27490__$2 = cljs.core.next(seq27490__$1);
var G__27493 = cljs.core.first(seq27490__$2);
var seq27490__$3 = cljs.core.next(seq27490__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__27491,G__27492,G__27493,seq27490__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__13068__auto___27534 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__27531 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27531,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27531,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__12697__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__12697__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___27538 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,cljs.core.cst$kw$locals),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__27535 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27535,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27535,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12697__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__12697__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__12697__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__12697__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = xsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_or),(function (){var x__12697__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unsafe_DASH_bit_DASH_and),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = bit;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))):false);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_identical_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PROTOCOL_SENTINEL),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_not),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = msym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__12697__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_native_DASH_satisfies_QMARK_),(function (){var x__12697__auto__ = psym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__13068__auto___27542 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27543 = arguments.length;
var i__13023__auto___27544 = (0);
while(true){
if((i__13023__auto___27544 < len__13022__auto___27543)){
args__13029__auto__.push((arguments[i__13023__auto___27544]));

var G__27545 = (i__13023__auto___27544 + (1));
i__13023__auto___27544 = G__27545;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_LazySeq),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq27539){
var G__27540 = cljs.core.first(seq27539);
var seq27539__$1 = cljs.core.next(seq27539);
var G__27541 = cljs.core.first(seq27539__$1);
var seq27539__$2 = cljs.core.next(seq27539__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__27540,G__27541,seq27539__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__13068__auto___27549 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27550 = arguments.length;
var i__13023__auto___27551 = (0);
while(true){
if((i__13023__auto___27551 < len__13022__auto___27550)){
args__13029__auto__.push((arguments[i__13023__auto___27551]));

var G__27552 = (i__13023__auto___27551 + (1));
i__13023__auto___27551 = G__27552;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Delay),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq27546){
var G__27547 = cljs.core.first(seq27546);
var seq27546__$1 = cljs.core.next(seq27546);
var G__27548 = cljs.core.first(seq27546__$1);
var seq27546__$2 = cljs.core.next(seq27546__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__27547,G__27548,seq27546__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__13068__auto___27561 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27562 = arguments.length;
var i__13023__auto___27563 = (0);
while(true){
if((i__13023__auto___27563 < len__13022__auto___27562)){
args__13029__auto__.push((arguments[i__13023__auto___27563]));

var G__27564 = (i__13023__auto___27563 + (1));
i__13023__auto___27563 = G__27564;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var tempnames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,vals);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__27557){
var vec__27558 = p__27557;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27558,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27558,(1),null);
return cljs.core._conj((function (){var x__12697__auto__ = k;
return cljs.core._conj((function (){var x__12697__auto____$1 = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),cljs.core.cst$sym$set_BANG_);
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tempnames,names)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$try),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$finally),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq27553){
var G__27554 = cljs.core.first(seq27553);
var seq27553__$1 = cljs.core.next(seq27553);
var G__27555 = cljs.core.first(seq27553__$1);
var seq27553__$2 = cljs.core.next(seq27553__$1);
var G__27556 = cljs.core.first(seq27553__$2);
var seq27553__$3 = cljs.core.next(seq27553__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__27554,G__27555,G__27556,seq27553__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__13068__auto___27569 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27570 = arguments.length;
var i__13023__auto___27571 = (0);
while(true){
if((i__13023__auto___27571 < len__13022__auto___27570)){
args__13029__auto__.push((arguments[i__13023__auto___27571]));

var G__27572 = (i__13023__auto___27571 + (1));
i__13023__auto___27571 = G__27572;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_with_DASH_redefs),(function (){var x__12697__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq27565){
var G__27566 = cljs.core.first(seq27565);
var seq27565__$1 = cljs.core.next(seq27565);
var G__27567 = cljs.core.first(seq27565__$1);
var seq27565__$2 = cljs.core.next(seq27565__$1);
var G__27568 = cljs.core.first(seq27565__$2);
var seq27565__$3 = cljs.core.next(seq27565__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__27566,G__27567,G__27568,seq27565__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__13068__auto___27585 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27586 = arguments.length;
var i__13023__auto___27587 = (0);
while(true){
if((i__13023__auto___27587 < len__13022__auto___27586)){
args__13029__auto__.push((arguments[i__13023__auto___27587]));

var G__27588 = (i__13023__auto___27587 + (1));
i__13023__auto___27587 = G__27588;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((4) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13030__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__27579 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_GT__GT_,cljs.core.second(args)))?(3):(2)),args);
var vec__27582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27579,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27582,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27582,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27582,(2),null);
var clause = vec__27582;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27579,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = b;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_if_DASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p__27573__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = pred__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = expr__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$p__27573__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs$core$macros$emit(pred__$1,expr__$1,more);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = gpred;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = pred;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = gexpr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = emit(gpred,gexpr,clauses);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq27574){
var G__27575 = cljs.core.first(seq27574);
var seq27574__$1 = cljs.core.next(seq27574);
var G__27576 = cljs.core.first(seq27574__$1);
var seq27574__$2 = cljs.core.next(seq27574__$1);
var G__27577 = cljs.core.first(seq27574__$2);
var seq27574__$3 = cljs.core.next(seq27574__$2);
var G__27578 = cljs.core.first(seq27574__$3);
var seq27574__$4 = cljs.core.next(seq27574__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__27575,G__27576,G__27577,G__27578,seq27574__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__11731__auto__ = cljs.core.list_QMARK_(x);
if(and__11731__auto__){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x));
} else {
return and__11731__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$const);
} else {
return null;
}
});
var ret__13068__auto___27609 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27610 = arguments.length;
var i__13023__auto___27611 = (0);
while(true){
if((i__13023__auto___27611 < len__13022__auto___27610)){
args__13029__auto__.push((arguments[i__13023__auto___27611]));

var G__27612 = (i__13023__auto___27611 + (1));
i__13023__auto___27611 = G__27612;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (esym,default$,env){
return (function (m,p__27597){
var vec__27598 = p__27597;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27598,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27598,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__27598,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj((function (){var x__12697__auto__ = test__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.cst$sym$quote):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
});})(vec__27598,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,cljs.core._conj((function (){var x__12697__auto__ = test;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.cst$sym$quote),expr,env);
} else {
return cljs.core$macros.assoc_test(m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var tests = cljs.core.keys(pairs);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.char_QMARK_,cljs.core.cst$kw$nonchar),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (esym,default$,env,pairs,tests){
return (function (p1__27589_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__27589_SHARP_);
});})(esym,default$,env,pairs,tests))
], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__27590_SHARP_){
if(cljs.core.seq_QMARK_(p1__27590_SHARP_)){
return cljs.core.vec(p1__27590_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27590_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),(function (){var x__12697__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__27591_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27591_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__27592_SHARP_){
if(cljs.core.seq_QMARK_(p1__27592_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kw_str,p1__27592_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str(p1__27592_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_keyword_QMARK_),(function (){var x__12697__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_fqn),(function (){var x__12697__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$case_STAR_),(function (){var x__12697__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = tests__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = thens;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = e;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_cond),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (esym,default$,env,pairs,tests){
return (function (p__27605){
var vec__27606 = p__27605;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27606,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27606,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__12697__auto__ = m;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = esym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = c;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pairs], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$else),(function (){var x__12697__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq27593){
var G__27594 = cljs.core.first(seq27593);
var seq27593__$1 = cljs.core.next(seq27593);
var G__27595 = cljs.core.first(seq27593__$1);
var seq27593__$2 = cljs.core.next(seq27593__$1);
var G__27596 = cljs.core.first(seq27593__$2);
var seq27593__$3 = cljs.core.next(seq27593__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__27594,G__27595,G__27596,seq27593__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__13068__auto___27613 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__13068__auto___27616 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__27615 = arguments.length;
switch (G__27615) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__12697__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))].join('');
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_not),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = message;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,"\n"),(function (){var x__12697__auto__ = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__13068__auto___27654 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__27623){
var vec__27624 = p__27623;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27624,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27624,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__27655__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__27655 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__27656__i = 0, G__27656__a = new Array(arguments.length -  0);
while (G__27656__i < G__27656__a.length) {G__27656__a[G__27656__i] = arguments[G__27656__i + 0]; ++G__27656__i;}
  msg = new cljs.core.IndexedSeq(G__27656__a,0,null);
} 
return G__27655__delegate.call(this,msg);};
G__27655.cljs$lang$maxFixedArity = 0;
G__27655.cljs$lang$applyTo = (function (arglist__27657){
var msg = cljs.core.seq(arglist__27657);
return G__27655__delegate(msg);
});
G__27655.cljs$core$IFn$_invoke$arity$variadic = G__27655__delegate;
return G__27655;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__27627){
var vec__27628 = p__27627;
var seq__27629 = cljs.core.seq(vec__27628);
var first__27630 = cljs.core.first(seq__27629);
var seq__27629__$1 = cljs.core.next(seq__27629);
var vec__27631 = first__27630;
var seq__27632 = cljs.core.seq(vec__27631);
var first__27633 = cljs.core.first(seq__27632);
var seq__27632__$1 = cljs.core.next(seq__27632);
var bind = first__27633;
var first__27633__$1 = cljs.core.first(seq__27632__$1);
var seq__27632__$2 = cljs.core.next(seq__27632__$1);
var expr = first__27633__$1;
var mod_pairs = seq__27632__$2;
var vec__27634 = seq__27629__$1;
var vec__27637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27634,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27637,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27637,(1),null);
var next_groups = vec__27634;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = ((function (giter,gxs,vec__27628,seq__27629,first__27630,seq__27629__$1,vec__27631,seq__27632,first__27633,seq__27632__$1,bind,first__27633__$1,seq__27632__$2,expr,mod_pairs,vec__27634,vec__27637,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__27640){
var vec__27641 = p__27640;
var seq__27642 = cljs.core.seq(vec__27641);
var first__27643 = cljs.core.first(seq__27642);
var seq__27642__$1 = cljs.core.next(seq__27642);
var vec__27644 = first__27643;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27644,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27644,(1),null);
var pair = vec__27644;
var etc = seq__27642__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12697__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid 'for' keyword ",k], 0));
} else {
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__27618__auto__),(function (){var x__12697__auto__ = cljs$core$macros$for_$_emit_bind(next_groups);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__27619__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iterys__27618__auto__),(function (){var x__12697__auto__ = next_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__27619__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$fs__27619__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_cons),(function (){var x__12697__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_rest),(function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));

}
}
}
}
}
});})(giter,gxs,vec__27628,seq__27629,first__27630,seq__27629__$1,vec__27631,seq__27632,first__27633,seq__27632__$1,bind,first__27633__$1,seq__27632__$2,expr,mod_pairs,vec__27634,vec__27637,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_first),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__27628,seq__27629,first__27630,seq__27629__$1,vec__27631,seq__27632,first__27633,seq__27632__$1,bind,first__27633__$1,seq__27632__$2,expr,mod_pairs,vec__27634,vec__27637,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__27647){
var vec__27648 = p__27647;
var seq__27649 = cljs.core.seq(vec__27648);
var first__27650 = cljs.core.first(seq__27649);
var seq__27649__$1 = cljs.core.next(seq__27649);
var vec__27651 = first__27650;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27651,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27651,(1),null);
var pair = vec__27651;
var etc = seq__27649__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12697__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod(etc);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__12697__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid 'for' keyword ",k], 0));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_append),(function (){var x__12697__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = body_expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__12697__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__27628,seq__27629,first__27630,seq__27629__$1,vec__27631,seq__27632,first__27633,seq__27632__$1,bind,first__27633__$1,seq__27632__$2,expr,mod_pairs,vec__27634,vec__27637,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),(function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__27620__auto__),(function (){var x__12697__auto__ = cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),(function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/raoof/projects/hotreload/dist/cljs/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2383),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2383),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,82),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$tag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_not_DASH_native)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__27621__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__27620__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_buffer),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__27621__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12697__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$size__27621__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__27620__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = gi;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = do_cmod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),(function (){var x__12697__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = giter;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),(function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_cons),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk),(function (){var x__12697__auto__ = gb;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = bind;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__12697__auto__ = gxs;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = do_mod(mod_pairs);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}
});})(to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iter__27622__auto__),(function (){var x__12697__auto__ = emit_bind(to_groups(seq_exprs));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$iter__27622__auto__),(function (){var x__12697__auto__ = cljs.core.second(seq_exprs);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__13068__auto___27663 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27664 = arguments.length;
var i__13023__auto___27665 = (0);
while(true){
if((i__13023__auto___27665 < len__13022__auto___27664)){
args__13029__auto__.push((arguments[i__13023__auto___27665]));

var G__27666 = (i__13023__auto___27665 + (1));
i__13023__auto___27665 = G__27666;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__27667__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__27667 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__27668__i = 0, G__27668__a = new Array(arguments.length -  0);
while (G__27668__i < G__27668__a.length) {G__27668__a[G__27668__i] = arguments[G__27668__i + 0]; ++G__27668__i;}
  msg = new cljs.core.IndexedSeq(G__27668__a,0,null);
} 
return G__27667__delegate.call(this,msg);};
G__27667.cljs$lang$maxFixedArity = 0;
G__27667.cljs$lang$applyTo = (function (arglist__27669){
var msg = cljs.core.seq(arglist__27669);
return G__27667__delegate(msg);
});
G__27667.cljs$core$IFn$_invoke$arity$variadic = G__27667__delegate;
return G__27667;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not(exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),body)))], null);
} else {
var k = cljs.core.first(exprs);
var v = cljs.core.second(exprs);
var seqsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__12697__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair.call(null,(0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair.call(null,(1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$let)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$while)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12697__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$when)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = recform__$1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid 'doseq' keyword",k], 0));
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12697__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_inc),(function (){var x__12697__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12697__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null),(function (){var x__12697__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),(function (){var x__12697__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_coercive_DASH_boolean),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12697__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = countsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_nth),(function (){var x__12697__auto__ = chunksym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = isym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = subform_chunk;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when_DASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12697__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunked_DASH_seq_QMARK_),(function (){var x__12697__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__27658__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_first),(function (){var x__12697__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_chunk_DASH_rest),(function (){var x__12697__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__27658__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$c__27658__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_first),(function (){var x__12697__auto__ = seqsym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = subform;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step(null,cljs.core.seq(seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq27659){
var G__27660 = cljs.core.first(seq27659);
var seq27659__$1 = cljs.core.next(seq27659);
var G__27661 = cljs.core.first(seq27659__$1);
var seq27659__$2 = cljs.core.next(seq27659__$1);
var G__27662 = cljs.core.first(seq27659__$2);
var seq27659__$3 = cljs.core.next(seq27659__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__27660,G__27661,G__27662,seq27659__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__13068__auto___27673 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27674 = arguments.length;
var i__13023__auto___27675 = (0);
while(true){
if((i__13023__auto___27675 < len__13022__auto___27674)){
args__13029__auto__.push((arguments[i__13023__auto___27675]));

var G__27676 = (i__13023__auto___27675 + (1));
i__13023__auto___27675 = G__27676;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq27670){
var G__27671 = cljs.core.first(seq27670);
var seq27670__$1 = cljs.core.next(seq27670);
var G__27672 = cljs.core.first(seq27670__$1);
var seq27670__$2 = cljs.core.next(seq27670__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__27671,G__27672,seq27670__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__13068__auto___27687 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__27686 = arguments.length;
switch (G__27686) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27689 = arguments.length;
var i__13023__auto___27690 = (0);
while(true){
if((i__13023__auto___27690 < len__13022__auto___27689)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27690]));

var G__27691 = (i__13023__auto___27690 + (1));
i__13023__auto___27690 = G__27691;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13046__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Array$),(function (){var x__12697__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),(function (){var x__12697__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dims__27677__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),more_sizes)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__27678__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),(function (){var x__12697__auto__ = size;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__27679__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__27678__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__27678__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__27679__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_apply),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_make_DASH_array),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dims__27677__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$dimarray__27678__auto__)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$array);
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq27681){
var G__27682 = cljs.core.first(seq27681);
var seq27681__$1 = cljs.core.next(seq27681);
var G__27683 = cljs.core.first(seq27681__$1);
var seq27681__$2 = cljs.core.next(seq27681__$1);
var G__27684 = cljs.core.first(seq27681__$2);
var seq27681__$3 = cljs.core.next(seq27681__$2);
var G__27685 = cljs.core.first(seq27681__$3);
var seq27681__$4 = cljs.core.next(seq27681__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__27682,G__27683,G__27684,G__27685,seq27681__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__13068__auto___27700 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__27698 = arguments.length;
switch (G__27698) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27702 = arguments.length;
var i__13023__auto___27703 = (0);
while(true){
if((i__13023__auto___27703 < len__13022__auto___27702)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27703]));

var G__27704 = (i__13023__auto___27703 + (1));
i__13023__auto___27703 = G__27704;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13046__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_List);
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constant,cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_27699 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_27699;
}})()))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27692__auto__),(function (){var x__12697__auto__ = x;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_conj),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_list),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27692__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq27694){
var G__27695 = cljs.core.first(seq27694);
var seq27694__$1 = cljs.core.next(seq27694);
var G__27696 = cljs.core.first(seq27694__$1);
var seq27694__$2 = cljs.core.next(seq27694__$1);
var G__27697 = cljs.core.first(seq27694__$2);
var seq27694__$3 = cljs.core.next(seq27694__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__27695,G__27696,G__27697,seq27694__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__13068__auto___27710 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__27709 = arguments.length;
switch (G__27709) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27712 = arguments.length;
var i__13023__auto___27713 = (0);
while(true){
if((i__13023__auto___27713 < len__13022__auto___27712)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27713]));

var G__27714 = (i__13023__auto___27713 + (1));
i__13023__auto___27713 = G__27714;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13046__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cnt;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(5)),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY_DASH_NODE),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArray),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentVector);
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq27706){
var G__27707 = cljs.core.first(seq27706);
var seq27706__$1 = cljs.core.next(seq27706);
var G__27708 = cljs.core.first(seq27706__$1);
var seq27706__$2 = cljs.core.next(seq27706__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__27707,G__27708,seq27706__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__13068__auto___27724 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__27721 = arguments.length;
switch (G__27721) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27726 = arguments.length;
var i__13023__auto___27727 = (0);
while(true){
if((i__13023__auto___27727 < len__13022__auto___27726)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27727]));

var G__27728 = (i__13023__auto___27727 + (1));
i__13023__auto___27727 = G__27728;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13046__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$$_DASH_EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap);
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if((cljs.core.every_QMARK_(((function (keys){
return (function (p1__27715_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__27715_SHARP_),cljs.core.cst$kw$constant);
});})(keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (p1__27716_SHARP_){
var _STAR_cljs_warnings_STAR_27723 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__27716_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_27723;
}});})(keys))
,keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = (cljs.core.count(kvs) / (2));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$createAsIfByAssoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),kvs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq27718){
var G__27719 = cljs.core.first(seq27718);
var seq27718__$1 = cljs.core.next(seq27718);
var G__27720 = cljs.core.first(seq27718__$1);
var seq27718__$2 = cljs.core.next(seq27718__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__27719,G__27720,seq27718__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__13068__auto___27734 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__27733 = arguments.length;
switch (G__27733) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27736 = arguments.length;
var i__13023__auto___27737 = (0);
while(true){
if((i__13023__auto___27737 < len__13022__auto___27736)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27737]));

var G__27738 = (i__13023__auto___27737 + (1));
i__13023__auto___27737 = G__27738;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13046__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$fromArrays),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),ks)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),vs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashMap);
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq27730){
var G__27731 = cljs.core.first(seq27730);
var seq27730__$1 = cljs.core.next(seq27730);
var G__27732 = cljs.core.first(seq27730__$1);
var seq27730__$2 = cljs.core.next(seq27730__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__27731,G__27732,seq27730__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__13068__auto___27748 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__27745 = arguments.length;
switch (G__27745) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__13045__auto__ = [];
var len__13022__auto___27750 = arguments.length;
var i__13023__auto___27751 = (0);
while(true){
if((i__13023__auto___27751 < len__13022__auto___27750)){
args_arr__13045__auto__.push((arguments[i__13023__auto___27751]));

var G__27752 = (i__13023__auto___27751 + (1));
i__13023__auto___27751 = G__27752;
continue;
} else {
}
break;
}

var argseq__13046__auto__ = (new cljs.core.IndexedSeq(args_arr__13045__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13046__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_EMPTY),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__27739_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$op.cljs$core$IFn$_invoke$arity$1(p1__27739_SHARP_),cljs.core.cst$kw$constant);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27740_SHARP_){
var _STAR_cljs_warnings_STAR_27747 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invoke_DASH_ctor,cljs.core.cst$kw$extending_DASH_base_DASH_js_DASH_type,cljs.core.cst$kw$unsupported_DASH_preprocess_DASH_value,cljs.core.cst$kw$redef,cljs.core.cst$kw$js_DASH_shadowed_DASH_by_DASH_local,cljs.core.cst$kw$unsupported_DASH_js_DASH_module_DASH_type,cljs.core.cst$kw$invalid_DASH_protocol_DASH_symbol,cljs.core.cst$kw$protocol_DASH_duped_DASH_method,cljs.core.cst$kw$munged_DASH_namespace,cljs.core.cst$kw$single_DASH_segment_DASH_namespace,cljs.core.cst$kw$fn_DASH_arity,cljs.core.cst$kw$infer_DASH_warning,cljs.core.cst$kw$variadic_DASH_max_DASH_arity,cljs.core.cst$kw$protocol_DASH_with_DASH_variadic_DASH_method,cljs.core.cst$kw$fn_DASH_deprecated,cljs.core.cst$kw$undeclared_DASH_var,cljs.core.cst$kw$preamble_DASH_missing,cljs.core.cst$kw$undeclared_DASH_protocol_DASH_symbol,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$invalid_DASH_array_DASH_access,cljs.core.cst$kw$unprovided,cljs.core.cst$kw$ns_DASH_var_DASH_clash,cljs.core.cst$kw$undeclared_DASH_ns,cljs.core.cst$kw$undeclared_DASH_ns_DASH_form,cljs.core.cst$kw$invalid_DASH_arithmetic,cljs.core.cst$kw$protocol_DASH_deprecated,cljs.core.cst$kw$fn_DASH_var,cljs.core.cst$kw$protocol_DASH_impl_DASH_recur_DASH_with_DASH_target,cljs.core.cst$kw$overload_DASH_arity,cljs.core.cst$kw$protocol_DASH_multiple_DASH_impls,cljs.core.cst$kw$redef_DASH_in_DASH_file,cljs.core.cst$kw$protocol_DASH_invalid_DASH_method,cljs.core.cst$kw$extend_DASH_type_DASH_invalid_DASH_method_DASH_shape,cljs.core.cst$kw$multiple_DASH_variadic_DASH_overloads,cljs.core.cst$kw$protocol_DASH_impl_DASH_with_DASH_variadic_DASH_method],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__27740_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_27747;
}}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentArrayMap$),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.count(xs);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$createAsIfByAssoc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array),xs)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_PersistentHashSet);
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq27742){
var G__27743 = cljs.core.first(seq27742);
var seq27742__$1 = cljs.core.next(seq27742);
var G__27744 = cljs.core.first(seq27742__$1);
var seq27742__$2 = cljs.core.next(seq27742__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__27743,G__27744,seq27742__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$js_STAR_,["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"}"].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$object);
});
var ret__13068__auto___27768 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27769 = arguments.length;
var i__13023__auto___27770 = (0);
while(true){
if((i__13023__auto___27770 < len__13022__auto___27769)){
args__13029__auto__.push((arguments[i__13023__auto___27770]));

var G__27771 = (i__13023__auto___27770 + (1));
i__13023__auto___27770 = G__27771;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_){
return (function (p__27756){
var vec__27757 = p__27756;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rest)));
var sym_pairs = filter_on_keys(cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sym_or_str_QMARK_),cljs.core.keys(kvs)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var obj = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
if(cljs.core.empty_QMARK_(rest)){
return cljs.core$macros.js_obj_STAR_(cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),(function (){var x__12697__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__27760){
var vec__27761 = p__27760;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27761,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27761,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__12697__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__27764){
var vec__27765 = p__27764;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27765,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__12697__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = v;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__12697__auto__ = obj;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq27753){
var G__27754 = cljs.core.first(seq27753);
var seq27753__$1 = cljs.core.next(seq27753);
var G__27755 = cljs.core.first(seq27753__$1);
var seq27753__$2 = cljs.core.next(seq27753__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__27754,G__27755,seq27753__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__13068__auto___27772 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"~{}.length"),cljs.core.cst$sym$js_STAR_),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$number);
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__13068__auto___27775 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__27773__auto__),(function (){var x__12697__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__27774__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__27773__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_aclone),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__27773__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__27774__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_aset),(function (){var x__12697__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__13068__auto___27778 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__27776__auto__),(function (){var x__12697__auto__ = a;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__27777__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$a__27776__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = init;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$l__27777__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__12697__auto__ = idx;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = ret;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__13068__auto___27784 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27785 = arguments.length;
var i__13023__auto___27786 = (0);
while(true){
if((i__13023__auto___27786 < len__13022__auto___27785)){
args__13029__auto__.push((arguments[i__13023__auto___27786]));

var G__27787 = (i__13023__auto___27786 + (1));
i__13023__auto___27786 = G__27787;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$n__27779__auto__),(function (){var x__12697__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12697__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$n__27779__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),(function (){var x__12697__auto__ = i;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq27780){
var G__27781 = cljs.core.first(seq27780);
var seq27780__$1 = cljs.core.next(seq27780);
var G__27782 = cljs.core.first(seq27780__$1);
var seq27780__$2 = cljs.core.next(seq27780__$1);
var G__27783 = cljs.core.first(seq27780__$2);
var seq27780__$3 = cljs.core.next(seq27780__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__27781,G__27782,G__27783,seq27780__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27791 = arguments.length;
var i__13023__auto___27792 = (0);
while(true){
if((i__13023__auto___27792 < len__13022__auto___27791)){
args__13029__auto__.push((arguments[i__13023__auto___27792]));

var G__27793 = (i__13023__auto___27792 + (1));
i__13023__auto___27792 = G__27793;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((1) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__13030__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27788_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27788_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq27789){
var G__27790 = cljs.core.first(seq27789);
var seq27789__$1 = cljs.core.next(seq27789);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__27790,seq27789__$1);
});

var ret__13068__auto___27803 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27804 = arguments.length;
var i__13023__auto___27805 = (0);
while(true){
if((i__13023__auto___27805 < len__13022__auto___27804)){
args__13029__auto__.push((arguments[i__13023__auto___27805]));

var G__27806 = (i__13023__auto___27805 + (1));
i__13023__auto___27805 = G__27806;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$doc,docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,cljs.core.cst$kw$default,cljs.core.cst$kw$default);
cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$default,cljs.core.cst$kw$hierarchy], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defonce),(function (){var x__12697__auto__ = cljs.core.with_meta(mm_name,m__$2);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__27794__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__12697__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__27795__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__12697__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__27796__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__12697__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__27797__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_atom),(function (){var x__12697__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__27798__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get),(function (){var x__12697__auto__ = options__$4;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$hierarchy),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_get_DASH_global_DASH_hierarchy))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_MultiFn$),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__12697__auto__ = mm_ns;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.name(mm_name);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = dispatch_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = default$;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$hierarchy__27798__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_table__27794__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$prefer_DASH_table__27795__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$method_DASH_cache__27796__auto__),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cached_DASH_hierarchy__27797__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq27799){
var G__27800 = cljs.core.first(seq27799);
var seq27799__$1 = cljs.core.next(seq27799);
var G__27801 = cljs.core.first(seq27799__$1);
var seq27799__$2 = cljs.core.next(seq27799__$1);
var G__27802 = cljs.core.first(seq27799__$2);
var seq27799__$3 = cljs.core.next(seq27799__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__27800,G__27801,G__27802,seq27799__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__13068__auto___27812 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27813 = arguments.length;
var i__13023__auto___27814 = (0);
while(true){
if((i__13023__auto___27814 < len__13022__auto___27813)){
args__13029__auto__.push((arguments[i__13023__auto___27814]));

var G__27815 = (i__13023__auto___27814 + (1));
i__13023__auto___27814 = G__27815;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((4) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13030__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_add_DASH_method),(function (){var x__12697__auto__ = cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core_SLASH_MultiFn], null));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = dispatch_val;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),fn_tail)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq27807){
var G__27808 = cljs.core.first(seq27807);
var seq27807__$1 = cljs.core.next(seq27807);
var G__27809 = cljs.core.first(seq27807__$1);
var seq27807__$2 = cljs.core.next(seq27807__$1);
var G__27810 = cljs.core.first(seq27807__$2);
var seq27807__$3 = cljs.core.next(seq27807__$2);
var G__27811 = cljs.core.first(seq27807__$3);
var seq27807__$4 = cljs.core.next(seq27807__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__27808,G__27809,G__27810,G__27811,seq27807__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__13068__auto___27818 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__27816__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_system_DASH_time))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__27817__auto__),(function (){var x__12697__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_prn),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Elapsed time: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$toFixed),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_system_DASH_time))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__27816__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(6))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__27817__auto__)], 0))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__13068__auto___27833 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27834 = arguments.length;
var i__13023__auto___27835 = (0);
while(true){
if((i__13023__auto___27835 < len__13022__auto___27834)){
args__13029__auto__.push((arguments[i__13023__auto___27835]));

var G__27836 = (i__13023__auto___27835 + (1));
i__13023__auto___27835 = G__27836;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((5) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__13030__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__27830){
var map__27831 = p__27830;
var map__27831__$1 = ((((!((map__27831 == null)))?((((map__27831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27831):map__27831);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27831__$1,cljs.core.cst$kw$print_DASH_fn,cljs.core.cst$sym$println);
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = bindings;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__27819__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__27820__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_dotimes),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$___27821__auto__),(function (){var x__12697__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = expr;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$end__27822__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$getTime),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Date$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__27823__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$end__27822__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$start__27819__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = print_fn;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),(function (){var x__12697__auto__ = bs_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__12697__auto__ = expr_str;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,", "),(function (){var x__12697__auto__ = iterations;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY," runs, "),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$elapsed__27823__auto__),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq27824){
var G__27825 = cljs.core.first(seq27824);
var seq27824__$1 = cljs.core.next(seq27824);
var G__27826 = cljs.core.first(seq27824__$1);
var seq27824__$2 = cljs.core.next(seq27824__$1);
var G__27827 = cljs.core.first(seq27824__$2);
var seq27824__$3 = cljs.core.next(seq27824__$2);
var G__27828 = cljs.core.first(seq27824__$3);
var seq27824__$4 = cljs.core.next(seq27824__$3);
var G__27829 = cljs.core.first(seq27824__$4);
var seq27824__$5 = cljs.core.next(seq27824__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__27825,G__27826,G__27827,G__27828,G__27829,seq27824__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__27838 = arguments.length;
switch (G__27838) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = (function (){var G__27842 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__27842) : cljs.core$macros.cs.call(null,G__27842));
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_rest),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__EQ__EQ_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),cljs.core._conj(cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__13068__auto___27844 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_defn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$apply_DASH_to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args)], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_zero_QMARK_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argc))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_STAR_unchecked_DASH_if_STAR_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var proto_inv = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var next_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__27845_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27845_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((num_args + (1))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = new_arg_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),(function (){var x__12697__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = next_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),(function (){var x__12697__auto__ = args;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_nil_QMARK_),(function (){var x__12697__auto__ = next_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$if),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = proto_prop;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = proto_inv;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$call),(function (){var x__12697__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),all_args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = ((((19) <= num_args))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$arr__27846__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_array),all_args)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s__27847__auto__),(function (){var x__12697__auto__ = next_sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s__27847__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$push),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$arr__27846__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_first),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s__27847__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_next),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s__27847__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$apply),(function (){var x__12697__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$arr__27846__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))):(function (){var G__27857 = f;
var G__27858 = (num_args + (1));
var G__27859 = next_sym;
return (cljs.core$macros.gen_apply_to_simple_helper.cljs$core$IFn$_invoke$arity$3 ? cljs.core$macros.gen_apply_to_simple_helper.cljs$core$IFn$_invoke$arity$3(G__27857,G__27858,G__27859) : cljs.core$macros.gen_apply_to_simple_helper.call(null,G__27857,G__27858,G__27859));
})());
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
var ret__13068__auto___27860 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper(f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__13068__auto___27866 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27867 = arguments.length;
var i__13023__auto___27868 = (0);
while(true){
if((i__13023__auto___27868 < len__13022__auto___27867)){
args__13029__auto__.push((arguments[i__13023__auto___27868]));

var G__27869 = (i__13023__auto___27868 + (1));
i__13023__auto___27868 = G__27869;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__27861__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog$string$StringBuffer$))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_binding),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_newline_STAR_),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_fn_STAR_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27862__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$append),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__27861__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$x__27862__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$sb__27861__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq27863){
var G__27864 = cljs.core.first(seq27863);
var seq27863__$1 = cljs.core.next(seq27863);
var G__27865 = cljs.core.first(seq27863__$1);
var seq27863__$2 = cljs.core.next(seq27863__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__27864,G__27865,seq27863__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__13068__auto___27874 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27875 = arguments.length;
var i__13023__auto___27876 = (0);
while(true){
if((i__13023__auto___27876 < len__13022__auto___27875)){
args__13029__auto__.push((arguments[i__13023__auto___27876]));

var G__27877 = (i__13023__auto___27876 + (1));
i__13023__auto___27876 = G__27877;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_concat),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27870_SHARP_){
return cljs.core._conj((function (){var x__12697__auto__ = p1__27870_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.cst$sym$cljs$core$macros_SLASH_lazy_DASH_seq);
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq27871){
var G__27872 = cljs.core.first(seq27871);
var seq27871__$1 = cljs.core.next(seq27871);
var G__27873 = cljs.core.first(seq27871__$1);
var seq27871__$2 = cljs.core.next(seq27871__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__27872,G__27873,seq27871__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__13068__auto___27878 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj(cljs.core._conj((function (){var x__12697__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),"''+~{}"),cljs.core.cst$sym$js_STAR_);
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__13068__auto___27880 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$goog$object_SLASH_set),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$_DASH_prototype),(function (){var x__12697__auto__ = ty;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_ITER_SYMBOL),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_this_DASH_as),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27879__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_es6_DASH_iterator),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$this__27879__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__13068__auto___27897 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__12697__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__27889){
var vec__27890 = p__27889;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27890,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27890,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__12697__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
});})(ns))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__27893){
var vec__27894 = p__27893;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27894,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27894,(1),null);
return cljs.core.not(cljs.core.cst$kw$private.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null))))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__13068__auto___27906 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__12697__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__27902){
var vec__27903 = p__27902;
var ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27903,(0),null);
var qualified_ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27903,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__12697__auto__ = cljs.core.name(ctor);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(qualified_ctor);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
});})(ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$imports], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__13068__auto___27915 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_into),(function (){var x__12697__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns){
return (function (p__27911){
var vec__27912 = p__27911;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_symbol),(function (){var x__12697__auto__ = cljs.core.name(sym);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
});})(ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null)))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__13068__auto___27916 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_(quoted_sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_sym),cljs.core.cst$sym$quote)) && ((cljs.core.second(quoted_sym) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
var sym = cljs.core.second(quoted_sym);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$analyzer_SLASH_namespaces,ns,cljs.core.cst$kw$defs], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_delete),(function (){var x__12697__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__13068__auto___27922 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27923 = arguments.length;
var i__13023__auto___27924 = (0);
while(true){
if((i__13023__auto___27924 < len__13022__auto___27923)){
args__13029__auto__.push((arguments[i__13023__auto___27924]));

var G__27925 = (i__13023__auto___27924 + (1));
i__13023__auto___27924 = G__27925;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((4) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__13030__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_vreset_BANG_),(function (){var x__12697__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__DASH_deref),(function (){var x__12697__auto__ = vol;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq27917){
var G__27918 = cljs.core.first(seq27917);
var seq27917__$1 = cljs.core.next(seq27917);
var G__27919 = cljs.core.first(seq27917__$1);
var seq27917__$2 = cljs.core.next(seq27917__$1);
var G__27920 = cljs.core.first(seq27917__$2);
var seq27917__$3 = cljs.core.next(seq27917__$2);
var G__27921 = cljs.core.first(seq27917__$3);
var seq27917__$4 = cljs.core.next(seq27917__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27918,G__27919,G__27920,G__27921,seq27917__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__13068__auto___27930 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27931 = arguments.length;
var i__13023__auto___27932 = (0);
while(true){
if((i__13023__auto___27932 < len__13022__auto___27931)){
args__13029__auto__.push((arguments[i__13023__auto___27932]));

var G__27933 = (i__13023__auto___27932 + (1));
i__13023__auto___27932 = G__27933;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq27926){
var G__27927 = cljs.core.first(seq27926);
var seq27926__$1 = cljs.core.next(seq27926);
var G__27928 = cljs.core.first(seq27926__$1);
var seq27926__$2 = cljs.core.next(seq27926__$1);
var G__27929 = cljs.core.first(seq27926__$2);
var seq27926__$3 = cljs.core.next(seq27926__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__27927,G__27928,G__27929,seq27926__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__13068__auto___27937 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27938 = arguments.length;
var i__13023__auto___27939 = (0);
while(true){
if((i__13023__auto___27939 < len__13022__auto___27938)){
args__13029__auto__.push((arguments[i__13023__auto___27939]));

var G__27940 = (i__13023__auto___27939 + (1));
i__13023__auto___27939 = G__27940;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__12697__auto__ = cljs.core.cons(cljs.core.cst$kw$require,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq27934){
var G__27935 = cljs.core.first(seq27934);
var seq27934__$1 = cljs.core.next(seq27934);
var G__27936 = cljs.core.first(seq27934__$1);
var seq27934__$2 = cljs.core.next(seq27934__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__27935,G__27936,seq27934__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__13068__auto___27944 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27945 = arguments.length;
var i__13023__auto___27946 = (0);
while(true){
if((i__13023__auto___27946 < len__13022__auto___27945)){
args__13029__auto__.push((arguments[i__13023__auto___27946]));

var G__27947 = (i__13023__auto___27946 + (1));
i__13023__auto___27946 = G__27947;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__12697__auto__ = cljs.core.cons(cljs.core.cst$kw$require_DASH_macros,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq27941){
var G__27942 = cljs.core.first(seq27941);
var seq27941__$1 = cljs.core.next(seq27941);
var G__27943 = cljs.core.first(seq27941__$1);
var seq27941__$2 = cljs.core.next(seq27941__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__27942,G__27943,seq27941__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__13068__auto___27951 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27952 = arguments.length;
var i__13023__auto___27953 = (0);
while(true){
if((i__13023__auto___27953 < len__13022__auto___27952)){
args__13029__auto__.push((arguments[i__13023__auto___27953]));

var G__27954 = (i__13023__auto___27953 + (1));
i__13023__auto___27953 = G__27954;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__12697__auto__ = cljs.core.cons(cljs.core.cst$kw$use,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq27948){
var G__27949 = cljs.core.first(seq27948);
var seq27948__$1 = cljs.core.next(seq27948);
var G__27950 = cljs.core.first(seq27948__$1);
var seq27948__$2 = cljs.core.next(seq27948__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__27949,G__27950,seq27948__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__13068__auto___27958 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27959 = arguments.length;
var i__13023__auto___27960 = (0);
while(true){
if((i__13023__auto___27960 < len__13022__auto___27959)){
args__13029__auto__.push((arguments[i__13023__auto___27960]));

var G__27961 = (i__13023__auto___27960 + (1));
i__13023__auto___27960 = G__27961;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__12697__auto__ = cljs.core.cons(cljs.core.cst$kw$use_DASH_macros,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq27955){
var G__27956 = cljs.core.first(seq27955);
var seq27955__$1 = cljs.core.next(seq27955);
var G__27957 = cljs.core.first(seq27955__$1);
var seq27955__$2 = cljs.core.next(seq27955__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__27956,G__27957,seq27955__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__13068__auto___27965 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27966 = arguments.length;
var i__13023__auto___27967 = (0);
while(true){
if((i__13023__auto___27967 < len__13022__auto___27966)){
args__13029__auto__.push((arguments[i__13023__auto___27967]));

var G__27968 = (i__13023__auto___27967 + (1));
i__13023__auto___27967 = G__27968;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__12697__auto__ = cljs.core.cons(cljs.core.cst$kw$import,import_symbols_or_lists);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq27962){
var G__27963 = cljs.core.first(seq27962);
var seq27962__$1 = cljs.core.next(seq27962);
var G__27964 = cljs.core.first(seq27962__$1);
var seq27962__$2 = cljs.core.next(seq27962__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__27963,G__27964,seq27962__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__13068__auto___27972 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__13029__auto__ = [];
var len__13022__auto___27973 = arguments.length;
var i__13023__auto___27974 = (0);
while(true){
if((i__13023__auto___27974 < len__13022__auto___27973)){
args__13029__auto__.push((arguments[i__13023__auto___27974]));

var G__27975 = (i__13023__auto___27974 + (1));
i__13023__auto___27974 = G__27975;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((2) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__13030__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ns_STAR_),(function (){var x__12697__auto__ = cljs.core.cons(cljs.core.cst$kw$refer_DASH_clojure,args);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq27969){
var G__27970 = cljs.core.first(seq27969);
var seq27969__$1 = cljs.core.next(seq27969);
var G__27971 = cljs.core.first(seq27969__$1);
var seq27969__$2 = cljs.core.next(seq27969__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__27970,G__27971,seq27969__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__13068__auto___27976 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_goog),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$nodeGlobalRequire),(function (){var x__12697__auto__ = f;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__13068__auto___27977 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second(quoted);
if(cljs.core.seq_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__12697__auto__ = cljs.analyzer.macroexpand_1(_AMPERSAND_env,form);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__13068__auto___27978 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),cljs.core.cst$sym$quote)){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second(quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_(form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__27979 = form_SINGLEQUOTE_;
var G__27980 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__27979;
form_SINGLEQUOTE_ = G__27980;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__12697__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count(fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__11731__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl));
if(and__11731__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.ffirst(fdecl));
} else {
return and__11731__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__27982 = arguments.length;
switch (G__27982) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__27983,solo){
var vec__27984 = p__27983;
var seq__27985 = cljs.core.seq(vec__27984);
var first__27986 = cljs.core.first(seq__27985);
var seq__27985__$1 = cljs.core.next(seq__27985);
var arglist = first__27986;
var body = seq__27985__$1;
var method = vec__27984;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = ((function (sig,restarg,vec__27984,seq__27985,first__27986,seq__27985__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic;
});})(sig,restarg,vec__27984,seq__27985,first__27986,seq__27985__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__27984,seq__27985,first__27986,seq__27985__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate())].join(''));
});})(sig,restarg,vec__27984,seq__27985,first__27986,seq__27985__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__27984,seq__27985,first__27986,seq__27985__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = param;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_first,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/raoof/projects/hotreload/dist/cljs/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,2999),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,49),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,2999),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,54),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_next,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/raoof/projects/hotreload/dist/cljs/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,3000),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,51),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,3000),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))));
});})(sig,restarg,vec__27984,seq__27985,first__27986,seq__27985__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__27984,seq__27985,first__27986,seq__27985__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12697__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var x__12697__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12697__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = get_delegate();
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_seq),(function (){var x__12697__auto__ = restarg;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
}
});})(sig,restarg,vec__27984,seq__27985,first__27986,seq__27985__$1,arglist,body,method))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = get_delegate_prop();
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.vec(sig);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),body)));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = (cljs.core.count(sig) - (1));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())))):null),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = sym;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$applyTo)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = apply_to();
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__13068__auto___27990 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$len__27988__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_loop),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__27989__auto__),cljs.core._conj(cljs.core.List.EMPTY,(0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__27989__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$len__27988__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$push),(function (){var x__12697__auto__ = dest;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__27989__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$recur),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_inc),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$i__27989__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__27993,emit_var_QMARK_){
var vec__27994 = p__27993;
var vec__27997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27994,(0),null);
var seq__27998 = cljs.core.seq(vec__27997);
var first__27999 = cljs.core.first(seq__27998);
var seq__27998__$1 = cljs.core.next(seq__27998);
var arglist = first__27999;
var body = seq__27998__$1;
var method = vec__27997;
var fdecl = vec__27994;
var dest_args = ((function (vec__27994,vec__27997,seq__27998,first__27999,seq__27998__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__27994,vec__27997,seq__27998,first__27999,seq__27998__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});})(vec__27994,vec__27997,seq__27998,first__27999,seq__27998__$1,arglist,body,method,fdecl))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});})(vec__27994,vec__27997,seq__27998,first__27999,seq__27998__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,true,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,c_1,cljs.core.cst$kw$method_DASH_params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),cljs.core.cst$kw$arglists,(function (){var x__12697__auto__ = arglist;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__12697__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var_args)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__27991__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__27991__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__27992__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__LT_),(function (){var x__12697__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__27991__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12697__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/raoof/projects/hotreload/dist/cljs/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,3047),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,3047),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,75),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args__27991__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = c_1;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args(c_1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__27992__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(rname,method);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__12697__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_unchecked_DASH_get),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = n;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),dest_args(c))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__28008){
var vec__28009 = p__28008;
var seq__28010 = cljs.core.seq(vec__28009);
var first__28011 = cljs.core.first(seq__28010);
var seq__28010__$1 = cljs.core.next(seq__28010);
var sig = first__28011;
var body = seq__28010__$1;
var method = vec__28009;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join(''));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = method;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__28000_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),p1__28000_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$(cljs.core.some(varsig_QMARK_,arglists));
var sigs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,cljs.core.cst$kw$top_DASH_fn,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$variadic,variadic,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,maxfa,cljs.core.cst$kw$method_DASH_params,sigs,cljs.core.cst$kw$arglists,arglists,cljs.core.cst$kw$arglists_DASH_meta,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
var param_counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,arglists);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts),param_counts)){
cljs.analyzer.warning(cljs.core.cst$kw$overload_DASH_arity,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,name], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$do),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$def),(function (){var x__12697__auto__ = cljs.core.with_meta(name,meta__$1);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var_args)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_case),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__28001_SHARP_){
return fixed_arity(rname,p1__28001_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sigs], 0)),(function (){var x__12697__auto__ = ((variadic)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args_DASH_arr__28002__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_array))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_copy_DASH_arguments),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args_DASH_arr__28002__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__28003__auto__),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$new),(function (){var x__12697__auto__ = cljs.core.with_meta(cljs.core.cst$sym$cljs$core_SLASH_IndexedSeq,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$file),cljs.core._conj(cljs.core.List.EMPTY,"/home/raoof/projects/hotreload/dist/cljs/cljs/core.cljc"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$line),cljs.core._conj(cljs.core.List.EMPTY,3108),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$column),cljs.core._conj(cljs.core.List.EMPTY,59),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_line),cljs.core._conj(cljs.core.List.EMPTY,3108),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$end_DASH_column),cljs.core._conj(cljs.core.List.EMPTY,79),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$$slice),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$args_DASH_arr__28002__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = rname;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$IFn$_invoke$arity$variadic),dest_args(maxfa),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$argseq__28003__auto__)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0)))):(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH__DASH_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,(2))], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$throw),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$js_SLASH_Error$),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_str),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_alength),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_js_DASH_arguments))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_method,fdecl),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$maxFixedArity)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = maxfa;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$var),(function (){var x__12697__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))):null);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(function (){var x__12697__auto__ = fdecl__$2;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core._conj((function (){var x__12697__auto__ = cljs.core$macros.sigs(fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.cst$sym$quote)], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.multi_arity_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsdoc], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,cljs.core.cst$kw$def_DASH_emits_DASH_var.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj((function (){var x__12697__auto__ = cljs.core.with_meta(name,m__$4);
return cljs.core._conj((function (){var x__12697__auto____$1 = cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_fn,fdecl__$4);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto____$1);
})(),x__12697__auto__);
})(),cljs.core.cst$sym$def);

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__28012__i = 0, G__28012__a = new Array(arguments.length -  3);
while (G__28012__i < G__28012__a.length) {G__28012__a[G__28012__i] = arguments[G__28012__i + 3]; ++G__28012__i;}
  fdecl = new cljs.core.IndexedSeq(G__28012__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__28013){
var _AMPERSAND_form = cljs.core.first(arglist__28013);
arglist__28013 = cljs.core.next(arglist__28013);
var _AMPERSAND_env = cljs.core.first(arglist__28013);
arglist__28013 = cljs.core.next(arglist__28013);
var name = cljs.core.first(arglist__28013);
var fdecl = cljs.core.rest(arglist__28013);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__13029__auto__ = [];
var len__13022__auto___28019 = arguments.length;
var i__13023__auto___28020 = (0);
while(true){
if((i__13023__auto___28020 < len__13022__auto___28019)){
args__13029__auto__.push((arguments[i__13023__auto___28020]));

var G__28021 = (i__13023__auto___28020 + (1));
i__13023__auto___28020 = G__28021;
continue;
} else {
}
break;
}

var argseq__13030__auto__ = ((((3) < args__13029__auto__.length))?(new cljs.core.IndexedSeq(args__13029__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__13030__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__12697__auto__ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,cljs.core.cst$kw$macro,true);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__28022 = cljs.core.cons(f,p);
var G__28023 = cljs.core.next(args__$1);
p = G__28022;
args__$1 = G__28023;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__28024 = cljs.core.cons(f,p);
var G__28025 = cljs.core.next(args__$1);
p = G__28024;
args__$1 = G__28025;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__28026 = cljs.core.next(fd);
fd = G__28026;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__28027 = cljs.core.next(fd);
fd = G__28027;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(function (){var x__12697__auto__ = fdecl;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$_AMPERSAND_form,cljs.core.cons(cljs.core.cst$sym$_AMPERSAND_env,args__$1))),cljs.core.next(fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__28028 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__28029 = cljs.core.next(ds);
acc = G__28028;
ds = G__28029;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__28030 = cljs.core.next(p);
var G__28031 = cljs.core.cons(cljs.core.first(p),d);
p = G__28030;
d = G__28031;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_let),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__28014__auto__),(function (){var x__12697__auto__ = cljs.core.cons(cljs.core.cst$sym$cljs$core$macros_SLASH_defn,decl);
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$set_BANG_),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DOT_),(function (){var x__12697__auto__ = name;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_DASH_cljs$lang$macro)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$ret__28014__auto__)], 0))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq28015){
var G__28016 = cljs.core.first(seq28015);
var seq28015__$1 = cljs.core.next(seq28015);
var G__28017 = cljs.core.first(seq28015__$1);
var seq28015__$2 = cljs.core.next(seq28015__$1);
var G__28018 = cljs.core.first(seq28015__$2);
var seq28015__$3 = cljs.core.next(seq28015__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__28016,G__28017,G__28018,seq28015__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__13068__auto___28036 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_(quoted_sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second(quoted_sym);
var env = _AMPERSAND_env;
var vec__28032 = (function (){try{var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1(var$)], null);
}catch (e28035){var e = e28035;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym),null], null);
}})();
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28032,(0),null);
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28032,(1),null);
var resolved = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,cljs.core.cst$kw$cljs$analyzer_SLASH_no_DASH_resolve,true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_when),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_exists_QMARK_),(function (){var x__12697__auto__ = resolved;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_Var$),(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core$macros_SLASH_fn),(function (){var x__12697__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = resolved;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__12697__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$quote),(function (){var x__12697__auto__ = resolved;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})(),(function (){var x__12697__auto__ = meta;
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
return cljs.core._conj(cljs.core.List.EMPTY,x__12697__auto__);
})()], 0))));
});
cljs.core$macros.resolve.cljs$lang$macro = true;

