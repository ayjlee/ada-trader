import Backbone from 'backbone';
import _ from 'underscore';
import QuoteView from './quote_view';
import Quote from '../models/quote';

const QuoteListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.tradeTemplate = params.tradeTemplate;
    this.bus = params.bus;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.model.each( (quote) => {
      const quoteView = new QuoteView({
        model: quote,
        template: this.template,
        tradeTemplate: this.tradeTemplate,
        bus: this.bus,
        tagName: 'li',
        className: 'quote',
      });
      this.$('#quotes').append(quoteView.render().$el);
    });
    return this;
  },
});

export default QuoteListView;
