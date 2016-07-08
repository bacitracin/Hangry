class ReviewSerializer < ActiveModel::Serializer

  attributes :id, :user_id, :username, :restaurant_id, :restaurant_name, :review_text, :review_date, :review_score, :review_title
  has_one :restaurant
  has_one :user

end
