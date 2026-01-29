resource "kubernetes_manifest" "statistics_route" {
  manifest = {
    apiVersion = "gateway.networking.k8s.io/v1"
    kind       = "HTTPRoute"
    metadata = {
      name      = var.name
      namespace = "default"
    }
    spec = {
      parentRefs = [
        {
          name      = "lawandorga-gateway"
          namespace = "default"
        }
      ]
      hostnames = ["statistics.law-orga.de"]
      rules = [
        {
          matches = [
            {
              path = {
                type  = "PathPrefix"
                value = "/"
              }
            }
          ]
          backendRefs = [
            {
              name = kubernetes_service_v1.service.metadata.0.name
              port = 80
            }
          ]
        }
      ]
    }
  }
}