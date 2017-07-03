import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        // TODO: search table for id, then search other table for model
        return {
            id:'naissance-gabriel',
            title:'Naissance de Gabriel',
            image:'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/18056006_1734452563512510_6401243511163069328_o.jpg?oh=f2764f62d631ef2cfee90f9498eb1e37&oe=59DCFB85', 
            date: "2017-04-19T08:51:00.000Z", 
            content:"Guillaume et Laëtitia sont heureux d'annoncer la naissance de Gabriel ce matin à la maternité Saint-Vincent de Paul de Lille. Il pèse 2,765kg pour 46cm de bonheur!",
            abstract:'Gabriel est né le 19 avril 2017'
        };
    }
});
