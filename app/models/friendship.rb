class Friendship < ActiveRecord::Base

	belongs_to :user
	belongs_to :friend, :class_name => 'User' #this is done because there is no friend class
end
