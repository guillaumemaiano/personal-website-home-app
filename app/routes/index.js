import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        // TODO: replace hardcoded calls with DB lookups
        return { spotlightnews: {
            id:'naissance-gabriel',
            title:'Naissance de Gabriel',
            image:'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/18056006_1734452563512510_6401243511163069328_o.jpg?oh=f2764f62d631ef2cfee90f9498eb1e37&oe=59DCFB85', 
            date: "2017-04-19T08:51:00.000Z", 
            content:"Guillaume et Laëtitia sont heureux d'annoncer la naissance de Gabriel ce matin à la maternité Saint-Vincent de Paul de Lille. Il pèse 2,765kg pour 46cm de bonheur!",
            abstract:'Gabriel est né le 19 avril 2017'
        },
                memberlist: [
                    {
                        name: "Gaël Maiano",
                        url: "gael.maiano.fr",
                        image: "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/13575837_10154268089566069_5409108658794358266_o.jpg?oh=c19615bee3d0113108f5bbeeabf93b70&oe=5A0A3A87"
                    },
                    {
                        name: "Guillaume Maiano",
                        url: "guillaume.maiano.fr",
                        image: "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/19679135_1765550717069361_3240610270719066306_o.jpg?oh=1333b04cf06818043499e6f946ced1a7&oe=59D873E9"
                    }
                ], 
                
                isEven() {
                    return ((this.memberlist.length % 2) === 0);
                }
        };
    }
});
