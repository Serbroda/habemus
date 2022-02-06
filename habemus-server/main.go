package main

import (
	"flag"
	"fmt"

	"github.com/Serbroda/habemus-server/controllers"
	"github.com/gin-gonic/gin"
)

var (
	flagPort = flag.Int("p", 8080, "Server binding port")
)

func main() {
	flag.Parse()

	bindingAddress := fmt.Sprintf("127.0.0.1:%d", *flagPort)

	r := gin.Default()
	r.GET("/ping", controllers.Index)
	r.Run(bindingAddress)
}
