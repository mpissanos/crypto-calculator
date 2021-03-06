class Currency < ApplicationRecord

def calculate(amount)
  (current_price.to_f * amount.to_f).round(4)
end

  def current_price
    url = 'https://api.coinmarketcap.com/v1/ticker/'
    request = HTTParty.get(url + self.slug)
    response = JSON.parse(request.body)
  end
end
