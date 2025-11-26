resource "kubernetes_ingress_v1" "ingress" {
  metadata {
    name = var.name
  }

  spec {
    rule {
      host = "statistics.law-orga.de"
      http {
        path {
          backend {
            service {
              name = kubernetes_service_v1.service.metadata.0.name
              port {
                number = 80
              }
            }
          }
        }
      }
    }
    tls {
      hosts       = ["statistics.law-orga.de"]
      secret_name = var.certificate_name
    }
  }
}
