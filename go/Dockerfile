FROM golang:1.22.5-alpine AS build
WORKDIR /app
COPY main.go .
RUN CGO_ENABLED=0 GOOS=linux go build main.go

FROM scratch
COPY --from=build /app/main .
ENTRYPOINT [ "./main" ]
