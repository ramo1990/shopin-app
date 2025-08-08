import boto3
import mimetypes

# === Configuration ===
BUCKET_NAME = "nextjs-django"
# PREFIX = "products/"  # ou "" pour tout le bucket

# Connexion AWS
s3 = boto3.resource("s3")
bucket = s3.Bucket(BUCKET_NAME)

# Types de fichiers à traiter
image_extensions = (".jpg", ".jpeg", ".png", ".webp")

def update_metadata(obj):
    key = obj.key
    if not key.lower().endswith(image_extensions):
        return

    # Déterminer le type MIME
    content_type, _ = mimetypes.guess_type(key)
    if not content_type:
        print(f"❌ Type MIME introuvable pour {key}")
        return

    # Obtenir les métadonnées actuelles
    head = obj.Object().get()

    print(f"🔄 Mise à jour : {key} | Type: {content_type}")

    # Copier l'objet avec les nouveaux en-têtes
    obj.Object().copy_from(
        CopySource={'Bucket': BUCKET_NAME, 'Key': key},
        MetadataDirective='REPLACE',
        ContentType=content_type,
        CacheControl="public, max-age=31536000, immutable",
        Metadata=head["Metadata"]
    )

# Parcourir tous les objets du bucket (ou sous-dossier)
for obj_summary in bucket.objects.all():
    update_metadata(obj_summary)
