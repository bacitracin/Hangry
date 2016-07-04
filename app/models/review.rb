class Review < ActiveRecord::Base
  
  belongs_to :resturant
  belongs_to :user

end
