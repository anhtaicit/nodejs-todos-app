var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController", ['$scope', 'svTodos', ($scope, svTodos) => {
    $scope.appName = "Todo Dashboard";
    $scope.formData = {};
    $scope.loading = true;
    $scope.todos = [];

    // load data from API
    svTodos.get().then((response) => {
        $scope.todos = response.data;
        $scope.loading = false;
    });

    $scope.createTodo = () => {
        $scope.loading = true;

        var todo = {
            text: $scope.formData.text,
            isDone: false
        }

        svTodos.create(todo).then((response)=>{
            $scope.todos = response.data;
            $scope.formData.text = "";
            $scope.loading = false;
        });
    };

    $scope.updateTodo = (todo) =>  {
        console.log("Update todo: ", todo);
        $scope.loading = true;
        svTodos.update(todo).then((response) => {
            $scope.todos = response.data;
            $scope.loading = false;
        });
    };

    $scope.deleteTodo = (todo) => {
        console.log("Delete todo: ", todo);
        $scope.loading = true;
        svTodos.delete(todo._id).then((response) => {
            $scope.todos = response.data;
            $scope.loading = false;
        });
    };
}]);