import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [{id:'visite-camille-juin-2017', 
                 title:'Camille à Lille - le retour',
                 image:null, 
                 date: "2017-07-17T08:30:00.000Z"
                 //Date(2017, 06, 17, 10, 30, 00, 00, 00).toJSON()
                 ,
                 content:"Camille profite du week-end pour venir voir son neveu, qui a bien grandi, à Lille. Le beau temps permet de se promener dans les rues lilloises et découvrir des plats parfaitement adaptés à l'été, comme le welsh!", 
                 abstract:'Camille revient à Lille'},
                {id:'visite-camille-mai-2017', 
                 title:'Camille à Lille',
                 image:null, 
                 date:"2017-05-14T10:30:00.000Z"
                 //Date(2017,05,14, 10, 30, 00,00, 00).toJSON()
                 ,
                 content:"Camille vient voir Gabriel, qui fait sa première balade en famille. Au programme, découverte du Vieux Lille et de l'intérieur de la Cathédrale Notre-Dame-de-la-Treille.", 
                 abstract:'Camille vient à Lille'},
                {id:'naissance-gabriel',
                 title:'Naissance de Gabriel',
                 image:'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/18056006_1734452563512510_6401243511163069328_o.jpg?oh=f2764f62d631ef2cfee90f9498eb1e37&oe=59DCFB85', 
                 date: "2017-04-19T08:51:00.000Z"
                 //Date(2017,4,19,08,51,00,0).toJSON()
                 , 
                 content:"Guillaume et Laëtitia sont heureux d'annoncer la naissance de Gabriel ce matin à la maternité Saint-Vincent de Paul de Lille. Il pèse 2,765kg pour 46cm de bonheur!",
                 abstract:'Gabriel est né le 19 avril 2017'},
               ];
    }
});
