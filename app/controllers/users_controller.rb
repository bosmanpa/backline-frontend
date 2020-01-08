class UsersController < ApplicationController
    def new
        user = User.new
        render json: user
    end


    def create
        user = User.create(user_params)
        render json: user
    end
    
    private

    def user_params
      params.require(:user).permit(:username, :password)
    end


end
